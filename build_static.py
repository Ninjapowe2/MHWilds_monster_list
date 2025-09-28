import json
import re
from pathlib import Path

ROOT = Path(__file__).parent
INDEX_PATH = ROOT / 'index.html'
MONSTER_PATH = ROOT / 'data' / 'monsters.json'
UI_PATH = ROOT / 'data' / 'ui.json'

if not INDEX_PATH.exists():
    raise SystemExit('index.html not found')
if not MONSTER_PATH.exists() or not UI_PATH.exists():
    raise SystemExit('Source JSON files are missing')

index_text = INDEX_PATH.read_text(encoding='utf-8')

monsters_raw = json.loads(MONSTER_PATH.read_text(encoding='utf-8'))
ui_raw = json.loads(UI_PATH.read_text(encoding='utf-8'))

def to_indented_json(data: object) -> str:
    pretty = json.dumps(data, ensure_ascii=False, indent=2)
    return '\n'.join('    ' + line for line in pretty.splitlines())

def replace_block(text: str, name: str, payload: str) -> str:
    pattern = re.compile(
        rf'(    <!-- build:{name}:start -->)(.*?)(    <!-- build:{name}:end -->)',
        re.DOTALL,
    )
    if not pattern.search(text):
        raise SystemExit(f'build markers for {name} not found')
    return pattern.sub(lambda match: f"{match.group(1)}\n{payload}\n{match.group(3)}", text, count=1)

index_text = replace_block(index_text, 'monsters', to_indented_json(monsters_raw))
index_text = replace_block(index_text, 'ui', to_indented_json(ui_raw))

INDEX_PATH.write_text(index_text, encoding='utf-8')
print('Embedded JSON payloads into index.html')
