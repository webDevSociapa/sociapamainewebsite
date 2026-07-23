import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const imgPaths = [
  'hero-illustration.png',
  'logoSociapa.png',
  'why-team.png'
];

async function compressImages() {
  for (const imgPath of imgPaths) {
    const fullPath = path.join(publicDir, imgPath);
    if (fs.existsSync(fullPath)) {
      const webpPath = fullPath.replace('.png', '.webp');
      await sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      console.log(`Converted ${imgPath} to WebP`);
    }
  }
}

compressImages();
