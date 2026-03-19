/*
 ESM-friendly image optimization script using sharp.
 Converts JPEG/PNG files in public/assets to WebP and AVIF variants and writes
 public/assets/optimized-manifest.json with mappings.

 Usage:
   npm install --save-dev sharp
   node scripts/optimize-images.js

 Safe: does not delete originals.
*/
import fs from "fs";
import path from "path";
import sharp from "sharp";

async function main() {
  const assetsDir = path.join(process.cwd(), "public", "assets");
  if (!fs.existsSync(assetsDir)) {
    console.error("Assets directory not found:", assetsDir);
    process.exit(1);
  }

  const files = fs
    .readdirSync(assetsDir)
    .filter((f) => /\.(jpe?g|png)$/i.test(f));
  const manifest = {};

  for (const file of files) {
    const inPath = path.join(assetsDir, file);
    const name = path.parse(file).name;
    const webp = `${name}.webp`;
    const avif = `${name}.avif`;
    try {
      await sharp(inPath)
        .webp({ quality: 80 })
        .toFile(path.join(assetsDir, webp));
      await sharp(inPath)
        .avif({ quality: 50 })
        .toFile(path.join(assetsDir, avif));
      manifest[file] = { webp, avif };
      console.log(`Optimized ${file} -> ${webp}, ${avif}`);
    } catch (err) {
      console.error(`Failed to optimize ${file}:`, err.message || err);
    }
  }

  fs.writeFileSync(
    path.join(assetsDir, "optimized-manifest.json"),
    JSON.stringify(manifest, null, 2)
  );
  console.log(
    "Image optimization complete. Manifest written to public/assets/optimized-manifest.json"
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
