// Run with: node --test test-privacy-policy.js
// Static regression checks; live URL, rendering and Console declarations are
// verified separately. These tests are not a legal-compliance certification.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const languages = ['nl', 'fr', 'de', 'en'];

test('privacy page remains a public static HTML document with stable language anchors', () => {
  assert.match(html, /<meta charset="utf-8">/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/verdictstudios\.be\/">/);
  assert.doesNotMatch(html, /<(?:script|iframe|form)\b/i);
  assert.doesNotMatch(html, /http-equiv="refresh"/i);
  assert.doesNotMatch(html, /noindex|google-analytics|googletagmanager|sendBeacon/i);
  assert.deepEqual([...html.matchAll(/<section id="([^"]+)"/g)].map(m => m[1]), languages);
  for (const lang of languages) {
    assert.match(html, new RegExp(`href="#${lang}"`));
    assert.match(html, new RegExp(`href="coc/delete-data/#${lang}"`));
  }
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    assert.ok(!/^http:\/\//i.test(href), `insecure link: ${href}`);
  }
});

for (const lang of languages) {
  test(`${lang}: identifies controller, covers current app and required privacy topics`, () => {
    const section = html.match(new RegExp(`<section id="${lang}" lang="${lang}">([\\s\\S]*?)</section>`))?.[1];
    assert.ok(section, `missing language metadata for ${lang}`);
    const text = section.replace(/\s+/g, ' ');
    assert.deepEqual([...section.matchAll(/<h2>(\d+)\./g)].map(m => +m[1]), [1,2,3,4,5,6,7,8,9]);
    for (const item of ['Gauthier Berth', 'Verdict Studios', '0781.961.243',
      'mailto:info@verdictstudios.be', 'GitHub', 'Google Forms/Groups', 'StoreKit',
      'Google Play Billing', 'HTTPS', '2026', 'privacy.apple.com',
      'support.google.com/googleplay/answer/9130646', 'dataprotectionauthority.be']) {
      assert.ok(text.includes(item), `${lang}: missing ${item}`);
    }
    assert.ok(!/8 (?:augustus|août|August) 2026/.test(section), `${lang}: stale date`);
    assert.doesNotMatch(section, /only an\s+anonymised statement|enkel een geanonimiseerde afrekening|seulement un décompte anonymisé|nur eine anonymisierte Abrechnung/i);
    assert.doesNotMatch(section, /use the career code|gebruikt u de carrièrecode|utilisez le code de carrière|verwenden Sie den\s+Laufbahn-Code/i);
  });
}
