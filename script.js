(() => {
  const MONSTER_DATA_URL = 'data/monsters.json';
  const UI_DATA_URL = 'data/ui.json';
  const FAVORITES_KEY = 'mhWildsFavorites';
  const INLINE_MONSTER_DATA_ID = 'monstersData';
  const INLINE_UI_DATA_ID = 'uiData';

  const monsterGrid = document.getElementById('monsterGrid');
  const searchInput = document.getElementById('searchInput');
  const elementFilter = document.getElementById('elementFilter');
  const sortFilter = document.getElementById('sortFilter');
  const emptyState = document.getElementById('emptyState');
  const loadingIndicator = document.getElementById('loadingIndicator');
  const backgroundOrbs = document.getElementById('backgroundOrbs');

  const state = {
    monsters: [],
    iconMap: {},
    crownIcons: {},
    elementNames: {},
    elementDescriptions: {},
    favorites: new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]')),
    filters: {
      query: '',
      element: '',
      sort: 'catalog_num',
    },
  };

  const cardObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -10%' }
  );

  function setLoading(isLoading) {
    if (!loadingIndicator) return;
    loadingIndicator.classList.toggle('is-active', isLoading);
  }

  function fetchJSON(url) {
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${url}`);
      }
      return response.json();
    });
  }

  function readInlineJSON(elementId) {
    const node = document.getElementById(elementId);
    if (!node) return null;
    try {
      const raw = node.textContent || '';
      const sanitized = raw.replace(/<!--[\s\S]*?-->/g, '').trim();
      if (!sanitized) return null;
      return JSON.parse(sanitized);
    } catch (error) {
      console.warn(`Inline JSON parse failed for #${elementId}`, error);
      return null;
    }
  }

  function normaliseText(value) {
    return value
      .toString()
      .trim()
      .replace(/\s+/g, '')
      .toLowerCase();
  }

  function isFavorited(id) {
    return state.favorites.has(id);
  }

  function persistFavorites() {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...state.favorites]));
  }

  function toggleFavorite(id) {
    if (isFavorited(id)) {
      state.favorites.delete(id);
    } else {
      state.favorites.add(id);
    }
    persistFavorites();
    renderMonsters();
  }

  function getWeaknessPayload(monster) {
    return Object.keys(state.iconMap).map(element => {
      const level = Number(monster[element] ?? 0);
      return {
        element,
        level,
        icon: state.iconMap[element],
        label: state.elementNames[element] || element,
        description: state.elementDescriptions[String(level)] || '',
      };
    });
  }

  function formatCatalogNumber(value) {
    return String(value).padStart(3, '0');
  }

  function createCard(monster, index) {
    const weaknesses = getWeaknessPayload(monster).sort((a, b) => b.level - a.level);
    const highestLevel = weaknesses.length ? weaknesses[0].level : 0;
    const card = document.createElement('article');
    card.className = 'monster-card';
    card.dataset.id = monster.id;
    card.style.setProperty('--index', index);
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
    card.setAttribute('tabindex', '0');

    const favoriteActive = isFavorited(monster.id);

    const weaknessBadges = weaknesses
      .map(weakness => `
        <li class="weakness-badge level-${weakness.level} ${weakness.level === highestLevel ? 'is-strongest' : ''}">
          <figure class="weakness-icon">
            <img src="${weakness.icon}" alt="${weakness.label}" loading="lazy">
          </figure>
          <span class="badge-label">${weakness.label}</span>
          <span class="badge-level">Lv.${weakness.level}</span>
          <span class="badge-tooltip">${weakness.description}</span>
        </li>
      `)
      .join('');

    card.innerHTML = `
      <div class="monster-card-inner">
        <div class="monster-face monster-face--front">
          <div class="monster-face__overlay"></div>
          <header class="monster-head">
            <div class="monster-rank">#${formatCatalogNumber(monster.catalog_num)}</div>
            <button
              class="favorite-btn ${favoriteActive ? 'is-active' : ''}"
              type="button"
              data-id="${monster.id}"
              aria-pressed="${favoriteActive}"
              aria-label="お気に入りに${favoriteActive ? '登録済み' : '追加'}"
            >★</button>
          </header>
          <figure class="monster-portrait">
            <img src="${monster.img}" alt="${monster.name}" loading="lazy">
          </figure>
          <h2 class="monster-name">${monster.name}</h2>
          <dl class="monster-size">
            <div>
              <dt>最小</dt>
              <dd>
                <img src="${state.crownIcons.min}" alt="最小冠">
                <span>${monster.min}</span>
              </dd>
            </div>
            <div>
              <dt>最大</dt>
              <dd>
                <img src="${state.crownIcons.max}" alt="最大冠">
                <span>${monster.max}</span>
              </dd>
            </div>
          </dl>
          <footer class="card-footer">
            <div class="flip-hint">カードをタップすると弱点詳細を表示</div>
          </footer>
        </div>
        <div class="monster-face monster-face--back">
          <div class="monster-face__overlay"></div>
          <header class="monster-back-head">
            <h3>弱点属性</h3>
            <button
              class="favorite-btn ${favoriteActive ? 'is-active' : ''}"
              type="button"
              data-id="${monster.id}"
              aria-pressed="${favoriteActive}"
              aria-label="お気に入りに${favoriteActive ? '登録済み' : '追加'}"
            >★</button>
          </header>
          <ul class="weakness-list">
            ${weaknessBadges}
          </ul>
        </div>
      </div>
    `;

    const favoriteButtons = card.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
      button.addEventListener('click', event => {
        event.stopPropagation();
        const monsterId = button.dataset.id;
        toggleFavorite(monsterId);
      });
    });

    card.addEventListener('click', event => {
      if (event.target.closest('.favorite-btn')) return;
      card.classList.toggle('is-flipped');
    });

    card.addEventListener('keypress', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.classList.toggle('is-flipped');
      }
    });

    card.addEventListener('pointermove', handleCardTilt);
    card.addEventListener('pointerleave', resetCardTilt);

    cardObserver.observe(card);
    return card;
  }

  function handleCardTilt(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const rotateY = ((offsetX / rect.width) - 0.5) * 16;
    const rotateX = ((offsetY / rect.height) - 0.5) * -16;
    card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
    card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
  }

  function resetCardTilt(event) {
    const card = event.currentTarget;
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
  }

  function applyFilters(monsters) {
    const { query, element, sort } = state.filters;
    const normalizedQuery = normaliseText(query);

    let filtered = monsters.filter(monster => {
      if (element === 'favorites' && !isFavorited(monster.id)) return false;
      if (element === 'non-favorites' && isFavorited(monster.id)) return false;

      if (element && !['favorites', 'non-favorites'].includes(element)) {
        if (Number(monster[element] ?? 0) < 2) return false;
      }

      if (!normalizedQuery) return true;
      return normaliseText(monster.name).includes(normalizedQuery);
    });

    filtered = filtered.sort((a, b) => {
      if (sort === 'name') {
        return a.name.localeCompare(b.name, 'ja');
      }
      if (sort === 'max') {
        return Number(b.max) - Number(a.max);
      }
      if (sort === 'min') {
        return Number(a.min) - Number(b.min);
      }
      return Number(a.catalog_num) - Number(b.catalog_num);
    });

    return filtered;
  }

  function renderMonsters() {
    if (!monsterGrid) return;
    monsterGrid.textContent = '';

    const monsters = applyFilters(state.monsters);

    if (monsters.length === 0) {
      if (emptyState) {
        emptyState.hidden = false;
      }
      return;
    }

    if (emptyState) {
      emptyState.hidden = true;
    }

    const fragment = document.createDocumentFragment();

    monsters.forEach((monster, index) => {
      const card = createCard(monster, index);
      fragment.appendChild(card);
    });

    monsterGrid.appendChild(fragment);
  }

  function bindControls() {
    if (searchInput) {
      searchInput.addEventListener('input', event => {
        state.filters.query = event.target.value;
        renderMonsters();
      });
    }

    if (elementFilter) {
      elementFilter.addEventListener('change', event => {
        state.filters.element = event.target.value;
        renderMonsters();
      });
    }

    if (sortFilter) {
      sortFilter.addEventListener('change', event => {
        state.filters.sort = event.target.value;
        renderMonsters();
      });
    }

    window.addEventListener('storage', event => {
      if (event.key === FAVORITES_KEY) {
        state.favorites = new Set(JSON.parse(event.newValue || '[]'));
        renderMonsters();
      }
    });
  }

  function createBackgroundOrbs() {
    if (!backgroundOrbs) return;
    const orbCount = 18;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < orbCount; i += 1) {
      const orb = document.createElement('span');
      orb.className = 'background-orb';
      orb.style.setProperty('--x', `${Math.random() * 100}`);
      orb.style.setProperty('--y', `${Math.random() * 100}`);
      orb.style.setProperty('--delay', `${Math.random() * 12}s`);
      orb.style.setProperty('--duration', `${12 + Math.random() * 18}s`);
      fragment.appendChild(orb);
    }
    backgroundOrbs.textContent = '';
    backgroundOrbs.appendChild(fragment);
  }

  function showError(message) {
    if (!monsterGrid) return;
    monsterGrid.innerHTML = `<div class="error-callout">${message}</div>`;
  }

  async function loadData() {
    const inlineMonsters = readInlineJSON(INLINE_MONSTER_DATA_ID);
    const inlineUI = readInlineJSON(INLINE_UI_DATA_ID);

    if (inlineMonsters && inlineUI) {
      return { monsters: inlineMonsters, ui: inlineUI };
    }

    const [monsters, ui] = await Promise.all([
      fetchJSON(MONSTER_DATA_URL),
      fetchJSON(UI_DATA_URL),
    ]);

    return { monsters, ui };
  }

  async function init() {
    setLoading(true);
    bindControls();
    createBackgroundOrbs();

    try {
      const { monsters, ui } = await loadData();

      state.monsters = monsters;
      state.iconMap = ui.iconMap || {};
      state.crownIcons = ui.crownIcons || {};
      state.elementNames = ui.elementNames || {};
      state.elementDescriptions = ui.elementDescriptions || {};

      renderMonsters();
    } catch (error) {
      console.error(error);
      showError('データの読み込みに失敗しました。時間を置いて再度お試しください。');
    } finally {
      setLoading(false);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
