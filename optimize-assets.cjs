const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function run() {
  console.log('--- Starting Image Optimization ---');

  // 1. Generate hero video poster
  try {
    const posterSvg = `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#1f1515" />
            <stop offset="100%" stop-color="#0a0a0c" />
          </radialGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#grad)" />
      </svg>
    `;
    const posterPath = path.join(__dirname, 'public', 'images', 'hero-video-poster.webp');
    await sharp(Buffer.from(posterSvg.trim()))
      .webp({ quality: 80 })
      .toFile(posterPath);
    console.log('Generated: hero-video-poster.webp');
  } catch (err) {
    console.error('Error generating hero video poster:', err);
  }

  // 2. Specific key images
  const tasks = [
    // Case Studies
    { src: 'public/images/case-studies-nutrela.png', dest: 'public/images/case-studies-nutrela.webp', maxW: 1200 },
    { src: 'public/images/case-studies-banner.png', dest: 'public/images/case-studies-banner.webp', maxW: 1200 },
    { src: 'public/images/case-studies-bonn.png', dest: 'public/images/case-studies-bonn.webp', maxW: 1200 },
    { src: 'public/images/case-studies-apis.png', dest: 'public/images/case-studies-apis.webp', maxW: 1200 },
    { src: 'public/images/case-studies-social.png', dest: 'public/images/case-studies-social.webp', maxW: 1200 },
    { src: 'public/images/case-studies-gyan.png', dest: 'public/images/case-studies-gyan.webp', maxW: 1200 },

    // Reviews
    { src: 'public/images/review.jpg', dest: 'public/images/review.webp', maxW: 800 },
    { src: 'public/images/review2.jpg', dest: 'public/images/review2.webp', maxW: 800 },
    { src: 'public/images/review3.jpg', dest: 'public/images/review3.webp', maxW: 800 },
    { src: 'public/images/review4.png', dest: 'public/images/review4.webp', maxW: 800 },

    // Creatives
    { src: 'public/images/creatives/americana.jpeg', dest: 'public/images/creatives/americana.webp', maxW: 900 },
    { src: 'public/images/creatives/bonn.png', dest: 'public/images/creatives/bonn.webp', maxW: 900 },
    { src: 'public/images/creatives/9am.png', dest: 'public/images/creatives/9am.webp', maxW: 900 },

    // Press Banner
    { src: 'public/images/press_banner.png', dest: 'public/images/press_banner.webp', maxW: 1200 },

    // Service Banner Heavy Assets
    { src: 'public/assets/images/services_banner/unboxing_experience/unboxing.png', dest: 'public/assets/images/services_banner/unboxing_experience/unboxing.webp', maxW: 1200 },
    { src: 'public/assets/images/services_banner/creative_designing/creative_designing.png', dest: 'public/assets/images/services_banner/creative_designing/creative_designing.webp', maxW: 1200 },
    { src: 'public/assets/images/services_banner/content_designing/content_designing.png', dest: 'public/assets/images/services_banner/content_designing/content_designing.webp', maxW: 1200 },
    { src: 'public/assets/images/services_banner/brand_identity_design/banner_1920_1080.png', dest: 'public/assets/images/services_banner/brand_identity_design/banner_1920_1080.webp', maxW: 1200 },
    { src: 'public/assets/images/services_banner/packaging_design/banner_1920_1080.png', dest: 'public/assets/images/services_banner/packaging_design/banner_1920_1080.webp', maxW: 1200 },
    { src: 'public/assets/images/services_banner/go_to_market/banner_1920_1080.png', dest: 'public/assets/images/services_banner/go_to_market/banner_1920_1080.webp', maxW: 1200 },
    { src: 'public/assets/images/services_banner/brand_strategy/banner_1920_1080.png', dest: 'public/assets/images/services_banner/brand_strategy/banner_1920_1080.webp', maxW: 1200 },

    // Page Banners
    { src: 'public/images/banners/blog/blog.png', dest: 'public/images/banners/blog/blog.webp', maxW: 1200 },
    { src: 'public/images/banners/about/about_us.png', dest: 'public/images/banners/about/about_us.webp', maxW: 1200 },
    { src: 'public/images/banners/services/end_to_end_digital1.png', dest: 'public/images/banners/services/end_to_end_digital1.webp', maxW: 1200 },
    { src: 'public/images/banners/services/end_to_end_digital.png', dest: 'public/images/banners/services/end_to_end_digital.webp', maxW: 1200 },
    { src: 'public/images/banners/influencer/influencer.png', dest: 'public/images/banners/influencer/influencer.webp', maxW: 1200 },
    { src: 'public/images/banners/press/press.png', dest: 'public/images/banners/press/press.webp', maxW: 1200 },
    { src: 'public/images/banners/stories/stories.png', dest: 'public/images/banners/stories/stories.webp', maxW: 1200 },
    { src: 'public/images/services/web_app_dev.png', dest: 'public/images/services/web_app_dev.webp', maxW: 1200 },
    { src: 'public/images/blog/chat_gpt_ads.png', dest: 'public/images/blog/chat_gpt_ads.webp', maxW: 1200 },
    { src: 'public/why-team.png', dest: 'public/why-team.webp', maxW: 1000 },
  ];

  let totalSavedBytes = 0;

  for (const t of tasks) {
    const srcPath = path.resolve(t.src);
    const destPath = path.resolve(t.dest);

    if (!fs.existsSync(srcPath)) {
      console.warn(`Skipping missing source: ${t.src}`);
      continue;
    }

    const srcStat = fs.statSync(srcPath);
    let pipeline = sharp(srcPath);
    const meta = await pipeline.metadata();

    if (meta.width && meta.width > t.maxW) {
      pipeline = pipeline.resize({ width: t.maxW, withoutEnlargement: true });
    }

    await pipeline.webp({ quality: 80 }).toFile(destPath);
    const destStat = fs.statSync(destPath);
    const saved = srcStat.size - destStat.size;
    totalSavedBytes += saved;

    console.log(
      `Converted: ${path.basename(t.src)} (${(srcStat.size / 1024).toFixed(1)} KB) -> ${path.basename(t.dest)} (${(destStat.size / 1024).toFixed(1)} KB) [Saved: ${(saved / 1024).toFixed(1)} KB]`
    );
  }

  console.log(`\n>>> Total Savings: ${(totalSavedBytes / (1024 * 1024)).toFixed(2)} MB! <<<`);
}

run().catch(console.error);
