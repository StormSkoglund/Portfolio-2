import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright";
// We'll inject axe directly from CDN at runtime for ESM script compatibility

(async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const outDir = path.resolve(__dirname, "..", "screenshots");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const page = await context.newPage();

  // try the common vite dev ports but prefer 5173 first (your server reported on 5173)
  const candidates = [
    "http://localhost:5173/",
    "http://localhost:5174/",
    "http://localhost:5175/",
  ];
  let url = null;
  for (const u of candidates) {
    try {
      const resp = await page.goto(u, {
        waitUntil: "domcontentloaded",
        timeout: 10000,
      });
      if (resp && resp.ok()) {
        url = u;
        break;
      }
      if (resp) {
        url = u;
        break;
      }
    } catch (e) {
      // ignore and try next
    }
  }

  if (!url) {
    console.error(
      "Could not reach dev server on ports 5175/5174/5173. Please start the dev server."
    );
    await browser.close();
    process.exit(2);
  }

  console.log("Using URL:", url);

  // Desktop light
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outDir, "desktop-light.png"),
    fullPage: true,
  });

  // Desktop dark
  await page.evaluate(() => document.documentElement.classList.add("dark"));
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(outDir, "desktop-dark.png"),
    fullPage: true,
  });

  // Mobile light
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => document.documentElement.classList.remove("dark"));
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(outDir, "mobile-light.png"),
    fullPage: true,
  });

  // Mobile dark
  await page.evaluate(() => document.documentElement.classList.add("dark"));
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(outDir, "mobile-dark.png"),
    fullPage: true,
  });

  // Accessibility scan using axe (inject axe from CDN to avoid ESM import issues)
  await page.evaluate(() => document.documentElement.classList.remove("dark"));
  await page.addScriptTag({
    url: "https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.8.4/axe.min.js",
  });
  // wait for axe to be available on window
  await page.waitForFunction(() => !!window.axe, { timeout: 5000 });
  const results = await page.evaluate(async () => await window.axe.run());
  fs.writeFileSync(
    path.join(outDir, "axe-results.json"),
    JSON.stringify(results, null, 2)
  );

  console.log("Screenshots and axe results written to", outDir);
  await browser.close();
})();
