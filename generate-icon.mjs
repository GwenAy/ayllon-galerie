import sharp from 'sharp';

await sharp('app/icon.svg')
  .resize(180, 180)
  .png()
  .toFile('app/apple-icon.png');

console.log('apple-icon.png créé !');