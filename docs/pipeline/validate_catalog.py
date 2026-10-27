"""Integrity checks for evidence joins, stage classification and local anchors."""
import json,pathlib,re,collections
ROOT=pathlib.Path(__file__).resolve().parents[2]
d=json.loads((ROOT/'assets/pipeline-catalog.json').read_text()); entities={e['id']:e for e in d['entities']}; ids=set(); errors=[]
assert len(entities)==40
assert collections.Counter(e['kind'] for e in entities.values())=={'individual':20,'company':20}
for item in d['items']:
 assert item['id'] not in ids;ids.add(item['id'])
 assert item['stage'] in [s['id'] for s in d['stages']]
 assert item['type'] in d['types'] and item['observations']
 for o in item['observations']:
  assert o['entity'] in entities and o['kind']!='Not established'
  assert o['source'].startswith('https://')
  for key in ['claim','published','practice','checked','qualification','format']:assert o[key]
  for key in ['detail','register']:
   part,_,anchor=o[key].lstrip('/').partition('#');path=ROOT/part.replace('.html','.md')
   assert path.exists(),path
   if anchor: assert re.search(r'id=[\"\x27]'+re.escape(anchor)+r'[\"\x27]',path.read_text()),o[key]
counts=collections.Counter(o['entity'] for i in d['items'] for o in i['observations'])
for e in entities.values():assert counts[e['id']]==e['observations']
assert not counts['companies/circleci'] and not counts['engineers/chip-huyen'] and not counts['engineers/andrej-karpathy']
print(f"PASS: {len(entities)} profiles, {len(ids)} entries, {sum(counts.values())} evidence associations; all local claim/source anchors exist")
