const puppeteerPath = "C:/Users/Bizim OSGB/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/puppeteer-core";
const puppeteer = require(puppeteerPath);
const fs = require('fs');
function findChrome() {
  const candidates = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'];
  for (const c of candidates) if (fs.existsSync(c)) return c;
  throw new Error('chrome not found');
}
(async () => {
  const browser = await puppeteer.launch({ executablePath: findChrome(), headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.getElementById('urunler').scrollIntoView());
  await new Promise(r => setTimeout(r, 2500));
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('#urunler [role="button"]'));
    const leftMost = buttons.sort((a,b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left)[0];
    leftMost && leftMost.click();
  });
  await new Promise(r => setTimeout(r, 2000));
  const info = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.v2-product-card'));
    return cards.map(c => ({
      transform: c.style.transform,
      title: c.querySelector('h3')?.textContent,
      visibility: c.style.visibility
    }));
  });
  console.log(JSON.stringify(info, null, 1));
  const rect2 = await page.evaluate(() => {
    const section = document.getElementById('urunler');
    const r = section.getBoundingClientRect();
    return { top: r.top + window.scrollY, left: 0, width: 1280, height: Math.min(r.height + 60, 900) };
  });
  await page.screenshot({ path: 'docs/qa/P2AR-1280-state-brokers.png', clip: { x: rect2.left, y: rect2.top, width: rect2.width, height: rect2.height } });
  await browser.close();
  console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
