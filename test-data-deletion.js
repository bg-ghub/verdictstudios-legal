// Run with: node --test test-data-deletion.js
// Static regression checks only; live availability and rendering are checked separately.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const html = fs.readFileSync(path.join(__dirname, 'coc', 'delete-data', 'index.html'), 'utf8');
const languages = ['nl', 'fr', 'de', 'en'];
const deletionEmail = 'mailto:info@verdictstudios.be?subject=Data%20Deletion%20Cassatie%20of%20Cel';

test('deletion page is public, static, responsive HTML with stable language anchors', () => {
  assert.match(html, /<meta charset="utf-8">/i);
  assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1">/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/verdictstudios\.be\/coc\/delete-data\/">/);
  assert.match(html, /@media\(max-width:480px\)/);
  assert.deepEqual([...html.matchAll(/<section id="([^"]+)"/g)].map(m => m[1]), languages);
  assert.doesNotMatch(html, /<(?:script|iframe|form|input|button|img|video|audio|object|embed)\b/i);
  assert.doesNotMatch(html, /http-equiv\s*=\s*["']refresh|noindex/i);
  assert.doesNotMatch(html, /google-analytics|googletagmanager|sendBeacon|fetch\s*\(|XMLHttpRequest|url\s*\(|@import|\bon\w+\s*=/i);
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    assert.ok(/^(?:https:\/\/|mailto:|#)/i.test(href), `unexpected or insecure link: ${href}`);
  }
  for (const lang of languages) assert.match(html, new RegExp(`href="#${lang}" lang="${lang}"`));
});

for (const lang of languages) {
  test(`${lang}: complete four-step deletion instructions and responsible-party details`, () => {
    const section = html.match(new RegExp(`<section id="${lang}" lang="${lang}" aria-labelledby="title-${lang}">([\\s\\S]*?)</section>`))?.[1];
    assert.ok(section, `missing language metadata for ${lang}`);
    assert.match(section, new RegExp(`<h1 id="title-${lang}">`));
    assert.deepEqual([...section.matchAll(/<h2>(\d+)\./g)].map(m => +m[1]), [1, 2, 3, 4]);
    for (const item of ['Gauthier Berth', 'Verdict Studios', '0781.961.243',
      'Android', 'iPhone/iPad', 'iCloud', 'Google', 'Game Center',
      '2026', 'Data Deletion Cassatie of Cel', deletionEmail,
      'mailto:info@verdictstudios.be', 'https://privacy.apple.com/',
      'https://play.google.com/games/profile',
      'https://support.google.com/googleplay/answer/9130646',
      `https://verdictstudios.be/#${lang}`]) {
      assert.ok(section.includes(item), `${lang}: missing ${item}`);
    }
    assert.doesNotMatch(section, /\b(?:30|60|90)\s*(?:days|dagen|jours|Tage)\b/i);
  });
}

test('English deletion instructions distinguish device, platform and developer-held records', () => {
  const english = html.match(/<section id="en"[^>]*>([\s\S]*?)<\/section>/)[1];
  for (const topic of [/6 November 2026/, /no Verdict Studios player account or server-side career database/,
    /not Offload App/, /backups must be managed separately/, /entitlement-cache entries may survive/,
    /does not erase store purchase history, revoke your unlock or refund/,
    /Leaving does not automatically delete your form responses/, /no passwords or payment-card details/,
    /proportionate information/, /applicable statutory period/,
    /we explain any information that must be retained and why/]) {
    assert.match(english, topic);
  }
});
