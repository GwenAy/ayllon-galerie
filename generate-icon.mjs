import sharp from 'sharp';

// Apple touch icon
await sharp('app/icon.svg')
  .resize(180, 180)
  .png()
  .toFile('app/apple-icon.png');

console.log('apple-icon.png créé !');

// Open Graph image
await sharp('app/icon.svg')
  .resize(200, 200)
  .extend({
    top: 215,
    bottom: 215,
    left: 500,
    right: 500,
    background: { r: 255, g: 255, b: 255, alpha: 1 }
  })
  .png()
  .toFile('public/og-image.png');

console.log('og-image.png créé !');