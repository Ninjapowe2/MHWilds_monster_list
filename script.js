const weaknesses = {
    "em152_00": { name: "チャタカブラ", catalog_num: 1, min: 438.5, max: 622.87, fire: 1, water: 1, lightning: 3, ice: 1, dragon: 0, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Chatacabra_Icon.webp.png" },
    "em153_00": { name: "ケマトリス", catalog_num: 2, min: 1094.86, max: 1555.2, fire: 0, water: 3, lightning: 1, ice: 1, dragon: 1, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Quematrice_Icon.webp.png" },
    "em154_00": { name: "ラバラ・バリナ", catalog_num: 3, min: 614.89, max: 873.43, fire: 3, water: 0, lightning: 1, ice: 1, dragon: 0, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Lala_Barina_Icon.webp.png" },
    "em021_00": { name: "ババコンガ", catalog_num: 4, min: 925.01, max: 1313.93, fire: 3, water: 2, lightning: 1, ice: 1, dragon: 1, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Congalala_Icon.webp.png" },
    "em151_00": { name: "バーラハーラ", catalog_num: 5, min: 1683.1, max: 2390.76, fire: 1, water: 0, lightning: 3, ice: 1, dragon: 1, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Balahara_Icon.webp.png" },
    "em150_00": { name: "ドシャグマ", catalog_num: 6, min: 1223.61, max: 1807.61, fire: 3, water: 1, lightning: 3, ice: 1, dragon: 1, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Doshaguma_Icon.webp.png" },
    "em157_00": { name: "ウズ・トゥナ", catalog_num: 7, min: 2651.57, max: 3426.18, fire: 1, water: 0, lightning: 2, ice: 1, dragon: 1, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Uth_Duna_Icon.webp.png" },
    "em155_00": { name: "ププロポル", catalog_num: 8, min: 1054.08, max: 1497.27, fire: 1, water: 3, lightning: 1, ice: 1, dragon: 1, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Rompopolo_Icon.webp.png" },
    "em156_00": { name: "レ・ダウ", catalog_num: 9, min: 1830.8, max: 2571.35, fire: 1, water: 2, lightning: 0, ice: 3, dragon: 1, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Rey_Dau_Icon.webp.png" },
    "em070_00": { name: "ネルスキュラ", catalog_num: 10, min: 644.12, max: 914.95, fire: 3, water: 0, lightning: 2, ice: 1, dragon: 0, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Nerscylla_Icon.webp.png" },
    "em161_00": { name: "ヒラバミ", catalog_num: 11, min: 1460.21, max: 1908.24, fire: 3, water: 1, lightning: 3, ice: 0, dragon: 1, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Hirabami_Icon.webp.png" },
    "em159_00": { name: "アジャラカン", catalog_num: 12, min: 1024.63, max: 1455.44, fire: 0, water: 3, lightning: 1, ice: 2, dragon: 1, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Ajarakan_Icon.webp.png" },
    "em158_00": { name: "ヌ・エグドラ", catalog_num: 13, min: 1863.39, max: 2407.75, fire: 0, water: 3, lightning: 1, ice: 1, dragon: 1, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Nu_Udra_Icon.webp.png" },
    "em150_50": { name: "護竜ドシャグマ", catalog_num: 14, min: 1223.61, max: 1738.08, fire: 3, water: 1, lightning: 2, ice: 2, dragon: 2, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Guardian_Doshaguma_Icon.webp.png" },
    "em002_50": { name: "護竜リオレウス", catalog_num: 15, min: 1499.71, max: 2130.27, fire: 0, water: 1, lightning: 2, ice: 1, dragon: 3, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Guardian_Rathalos_Icon.webp.png" },
    "em162_00": { name: "ジン・ダハド", catalog_num: 16, min: 4560.89, max: 4560.89, fire: 3, water: 1, lightning: 1, ice: 0, dragon: 1, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Jin_Dahaad_Icon.webp.png" },
    "em113_51": { name: "護竜オドガロン亜種", catalog_num: 17, min: 1222.1, max: 1735.93, fire: 1, water: 3, lightning: 1, ice: 1, dragon: 1, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Guardian_Ebony_Odogaron_Icon.webp.png" },
    "em163_00": { name: "シーウー", catalog_num: 18, min: 1228.74, max: 1745.37, fire: 1, water: 1, lightning: 1, ice: 3, dragon: 0, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Xu_Wu_Icon.webp.png" },
    "em160_50": { name: "護竜アルシュベルド", catalog_num: 19, min: 1666.54, max: 1666.54, fire: 1, water: 1, lightning: 1, ice: 1, dragon: 2, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Guardian_Arkveld_Icon.webp.png" },
    "em164_50": { name: "ゾ・シア", catalog_num: 20, min: 4623.59, max: 4623.59, fire: 1, water: 1, lightning: 1, ice: 1, dragon: 3, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Zoh_Shia_Icon.webp.png" },
    "em008_00": { name: "イャンクック", catalog_num: 21, min: 885.14, max: 1243.18, fire: 1, water: 2, lightning: 2, ice: 3, dragon: 0, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Yian_Kut-Ku_Icon.webp.png" },
    "em009_00": { name: "ゲリョス", catalog_num: 22, min: 848.44, max: 1205.17, fire: 3, water: 1, lightning: 0, ice: 2, dragon: 1, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Gypceros_Icon.webp.png" },
    "em001_00": { name: "リオレイア", catalog_num: 23, min: 1543.84, max: 2192.96, fire: 0, water: 1, lightning: 2, ice: 1, dragon: 3, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Rathian_Icon.webp.png" },
    "em100_51": { name: "護竜アンジャナフ亜種", catalog_num: 24, min: 1448.88, max: 2058.07, fire: 1, water: 2, lightning: 0, ice: 3, dragon: 1, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Guardian_Fulgur_Anjanath_Icon.webp.png" },
    "em002_00": { name: "リオレウス", catalog_num: 25, min: 1499.71, max: 2130.27, fire: 0, water: 1, lightning: 2, ice: 1, dragon: 3, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Rathalos_Icon.webp.png" },
    "em005_00": { name: "グラビモス", catalog_num: 26, min: 1848.51, max: 2625.72, fire: 0, water: 3, lightning: 1, ice: 2, dragon: 3, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Gravios_Icon.webp.png" },
    "em022_00": { name: "ドドブランゴ", catalog_num: 27, min: 791.44, max: 1124.21, fire: 3, water: 1, lightning: 2, ice: 0, dragon: 0, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Blangonga_Icon.webp.png" },
    "em071_00": { name: "ゴア・マガラ", catalog_num: 28, min: 1571.65, max: 2101.42, fire: 3, water: 0, lightning: 2, ice: 1, dragon: 2, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Gore_Magala_Icon.webp.png" },
    "em160_00": { name: "アルシュベルド", catalog_num: 29, min: 1483.22, max: 2083.17, fire: 1, water: 1, lightning: 1, ice: 1, dragon: 2, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Arkveld_Icon.webp.png" },
    "em082_00": { name: "タマミツネ", catalog_num: 30, min: 1692.62, max: 2404.29, fire: 1, water: 0, lightning: 2, ice: 1, dragon: 2, img: "https://storage.googleapis.com/mhwilds/512px-MHWilds-Mizutsune_Icon.webp.png" }
  };
  
  const iconMap = {
    fire: 'https://monsterhunterwiki.org/images/thumb/e/ee/UI-Fireblight.png/21px-UI-Fireblight.png',
    water: 'https://monsterhunterwiki.org/images/thumb/4/4c/UI-Waterblight.png/18px-UI-Waterblight.png',
    lightning: 'https://monsterhunterwiki.org/images/thumb/1/1d/UI-Thunderblight.png/22px-UI-Thunderblight.png',
    ice: 'https://monsterhunterwiki.org/images/thumb/7/7e/UI-Iceblight.png/18px-UI-Iceblight.png',
    dragon: 'https://monsterhunterwiki.org/images/thumb/e/e6/UI-Dragonblight.png/16px-UI-Dragonblight.png'
  };
  
  const crownIcons = {
    min: 'https://monsterhunterwiki.org/images/thumb/3/3f/MHWI-Small_Crown.png/32px-MHWI-Small_Crown.png',
    max: 'https://monsterhunterwiki.org/images/thumb/6/61/MHWI-Gold_Crown.png/32px-MHWI-Gold_Crown.png'
  };
  
  const elementNames = {
    fire: '火属性',
    water: '水属性',
    lightning: '雷属性',
    ice: '氷属性',
    dragon: '龍属性'
  };
  
  const elementDescriptions = {
    3: '非常に有効',
    2: '有効',
    1: 'やや有効',
    0: '効果なし'
  };
  
  const monsterGrid = document.getElementById("monsterGrid");
  
  // お気に入り管理
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      favorites = favorites.filter(fav => fav !== id);
    } else {
      favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderMonsters(
      document.getElementById("elementFilter").value,
      document.getElementById("sortFilter").value,
      document.getElementById("searchInput").value
    );
  }
  
  function renderMonsters(filter = "", sort = "catalog_num", search = "") {
    monsterGrid.innerHTML = "";
    let index = 0;
  
    // ソート処理
    let sortedMonsters = Object.entries(weaknesses);
    if (sort === "catalog_num") {
      sortedMonsters.sort((a, b) => a[1].catalog_num - b[1].catalog_num);
    } else if (sort === "name") {
      sortedMonsters.sort((a, b) => a[1].name.localeCompare(b[1].name, 'ja'));
    } else if (sort === "max") {
      sortedMonsters.sort((a, b) => b[1].max - a[1].max);
    } else if (sort === "min") {
      sortedMonsters.sort((a, b) => a[1].min - b[1].min);
    }
  
    for (const [id, m] of sortedMonsters) {
      // 検索フィルター
      if (search && !m.name.toLowerCase().includes(search.toLowerCase())) continue;
  
      // 属性フィルター
      const elements = Object.entries(m)
        .filter(([k]) => iconMap[k])
        .map(([k, v]) => ({ element: k, level: v }));
      if (filter && filter !== "favorites" && filter !== "non-favorites") {
        if (!elements.some(e => e.element === filter && e.level >= 2)) continue;
      }
      if (filter === "favorites" && !favorites.includes(id)) continue;
      if (filter === "non-favorites" && favorites.includes(id)) continue;
  
      const card = document.createElement("div");
      card.className = "monster-card";
      card.id = id;
      card.style.setProperty('--index', index++);
      card.innerHTML = `
        <div class="monster-card-inner">
          <div class="monster-card-front">
            <img src="${m.img}" alt="${m.name}" class="monster-image">
            <div class="monster-info">
              <button class="favorite-btn ${favorites.includes(id) ? 'favorited' : ''}" data-id="${id}">★</button>
              <div class="monster-name">${m.name}</div>
              <div class="monster-sizes">
                <div class="size-box">
                  <img src="${crownIcons.min}" alt="small crown">
                  ${m.min}
                </div>
                <div class="size-box">
                  <img src="${crownIcons.max}" alt="gold crown">
                  ${m.max}
                </div>
              </div>
            </div>
          </div>
          <div class="monster-card-back">
            <img src="${m.img}" alt="${m.name}" class="monster-image">
            <div class="monster-info">
              <button class="favorite-btn ${favorites.includes(id) ? 'favorited' : ''}" data-id="${id}">★</button>
              <div class="monster-name">${m.name}</div>
              <div class="weakness-icons">
                ${elements.map(e => `
                  <div class="weakness-icon level-${e.level}">
                    <img src="${iconMap[e.element]}" alt="${e.element}">
                    <span class="tooltip">${elementNames[e.element]} (${elementDescriptions[e.level]})</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
      card.querySelectorAll(".favorite-btn").forEach(btn => {
        btn.addEventListener("click", e => {
          e.stopPropagation();
          toggleFavorite(id);
        });
      });
      monsterGrid.appendChild(card);
    }
  }
  
  // 初回レンダリング
  renderMonsters();
  
  // 検索イベント
  document.getElementById("searchInput").addEventListener("input", e => {
    renderMonsters(
      document.getElementById("elementFilter").value,
      document.getElementById("sortFilter").value,
      e.target.value
    );
  });
  
  // フィルター変更イベント
  document.getElementById("elementFilter").addEventListener("change", e => {
    renderMonsters(
      e.target.value,
      document.getElementById("sortFilter").value,
      document.getElementById("searchInput").value
    );
  });
  
  // ソート変更イベント
  document.getElementById("sortFilter").addEventListener("change", e => {
    renderMonsters(
      document.getElementById("elementFilter").value,
      e.target.value,
      document.getElementById("searchInput").value
    );
  });
  
  // パーティクルエフェクトの生成
  function createParticles() {
    const particlesContainer = document.getElementById("particles");
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.width = `${Math.random() * 8 + 4}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particlesContainer.appendChild(particle);
    }
  }
  
  // パーティクル初期化
  createParticles();