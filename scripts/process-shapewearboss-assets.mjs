import sharp from 'sharp';
import fs from 'fs';

const logoSrc = 'public/logo-source.png';
if (!fs.existsSync(logoSrc)) {
  console.error('Missing public/logo-source.png');
  process.exit(1);
}

await sharp(logoSrc).png().toFile('public/logo.png');
await sharp(logoSrc).png().toFile('public/logo-header.png');
await sharp(logoSrc).png().toFile('public/logo-footer.png');
await sharp(logoSrc).png().toFile('public/logo-mark.png');

await sharp(logoSrc)
  .resize(1200, 630, { fit: 'contain', background: '#000000' })
  .png()
  .toFile('public/og-image.png');

async function squareIcon(size, out) {
  await sharp(logoSrc)
    .resize(size, size, { fit: 'contain', background: '#000000' })
    .png()
    .toFile(out);
}

await squareIcon(180, 'public/apple-touch-icon.png');
await squareIcon(192, 'public/icon-192.png');
await squareIcon(512, 'public/icon-512.png');
await squareIcon(32, 'public/favicon.png');

if (!fs.existsSync('public/hero.jpg') && fs.existsSync('public/hero-2.jpg')) {
  fs.copyFileSync('public/hero-2.jpg', 'public/hero.jpg');
}

console.log('ShapewearBoss assets ready');
