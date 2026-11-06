// Standalone published-site regression checks. Run: node --test test-*.js
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const base='https://verdictstudios.be/coc/play/';
const languages=['nl','fr','de','en'];
const names={nl:'Cassatie of Cel',fr:'Cassation ou Cachot',de:'Kassation oder Knast',en:'Cassation or Cell'};
const read=file=>fs.readFileSync(path.join(__dirname,file),'utf8');

for(const lang of languages){
  test(`${lang}: real localized HTML, canonical/social metadata and reciprocal language links`,()=>{
    const html=read(`coc/play/${lang}/index.html`);
    assert.ok(html.includes(`<html lang="${lang}" data-page-language="${lang}">`));
    assert.ok(html.includes(`<h1 id="app-title" data-copy="name">${names[lang]}</h1>`));
    assert.ok(html.includes(`<link rel="canonical" href="${base+lang}/">`));
    assert.ok(html.includes(`<meta property="og:url" content="${base+lang}/">`));
    assert.ok(html.includes(`<title>${names[lang]} — `));
    assert.match(html,/<meta name="description" content=".{80,200}">/);
    for(const alternate of languages)assert.ok(html.includes(`<link rel="alternate" hreflang="${alternate}" href="${base+alternate}/">`));
    assert.ok(html.includes(`<link rel="alternate" hreflang="x-default" href="${base}nl/">`));
    assert.match(html,/href="\.\.\/site.css"/);assert.match(html,/src="\.\.\/site.js"/);
    assert.match(html,/href="\/" data-copy="privacy"/);
    assert.match(html,/itemscope itemtype="https:\/\/schema.org\/WebSite"/);
    assert.match(html,/itemprop="publisher" itemscope itemtype="https:\/\/schema.org\/Organization"/);
    assert.match(html,/script-src 'self'; style-src 'self'/);
    assert.match(html,/connect-src 'none'/);
    assert.doesNotMatch(html,/unsafe-inline|noindex|aggregateRating|reviewCount|google-analytics|googletagmanager/i);
    assert.match(html,/https:\/\/forms.gle\/mKwj6xQWo4FjbQhSA/);
    assert.match(html,/https:\/\/apps.apple.com\/be\/app\/id6790086255/);
  });
}

test('root sitemap and robots reference real canonical files without blocking crawl resources',()=>{
  const robots=read('robots.txt'),sitemap=read('sitemap.xml');
  assert.match(robots,/^User-agent: \*\nAllow: \/\n/m);
  assert.match(robots,/Sitemap: https:\/\/verdictstudios.be\/sitemap.xml/);
  assert.doesNotMatch(robots,/Disallow:/i);
  const locations=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>match[1]);
  assert.equal(locations.length,6);
  for(const url of locations){
    assert.equal(new URL(url).origin,'https://verdictstudios.be');
    assert.ok(fs.existsSync(path.join(__dirname,new URL(url).pathname,'index.html')),url);
  }
  assert.doesNotMatch(sitemap,/lastmod|\?lang=|<loc>[^<]*\/demo\//);
});

test('old printed/shared paths remain compatible and legal URLs stay canonical',()=>{
  assert.match(read('coc/index.html'),/https:\/\/verdictstudios.be\/coc\/play\//);
  assert.match(read('play/index.html'),/https:\/\/verdictstudios.be\/coc\/play\//);
  assert.match(read('index.html'),/<link rel="canonical" href="https:\/\/verdictstudios.be\/">/);
  assert.match(read('coc/delete-data/index.html'),/<link rel="canonical" href="https:\/\/verdictstudios.be\/coc\/delete-data\/">/);
  const script=read('coc/play/site.js');
  assert.match(script,/new URLSearchParams\(location.search\).get\('lang'\)/);
  assert.match(script,/const PUBLIC_BASE = 'https:\/\/verdictstudios.be\/coc\/play\/'/);
  assert.doesNotMatch(script,/fetch\(|XMLHttpRequest|sendBeacon|localStorage/);
});
