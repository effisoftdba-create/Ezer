/**
 * Automatically removes background (white, black, solid color, or fake checkerboard)
 * from an image using HTML5 Canvas pixel manipulation.
 * Returns a Promise that resolves with a transparent PNG data-URL.
 */
export function removeImageBackground(imageSrc) {
  return new Promise((resolve) => {
    if (!imageSrc || typeof imageSrc !== 'string') {
      resolve(imageSrc);
      return;
    }

    // SVG string or already handled
    if (imageSrc.trim().startsWith('<svg')) {
      resolve(imageSrc);
      return;
    }

    const img = new Image();
    img.crossOrigin = 'Anonymous';
    
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Sample corner pixels to identify background color
        const cornerPixels = [
          getPixel(data, 0, 0, canvas.width),
          getPixel(data, canvas.width - 1, 0, canvas.width),
          getPixel(data, 0, canvas.height - 1, canvas.width),
          getPixel(data, canvas.width - 1, canvas.height - 1, canvas.width)
        ];

        let lightCorners = 0;
        let darkCorners = 0;
        let avgR = 0, avgG = 0, avgB = 0;

        cornerPixels.forEach(p => {
          avgR += p.r;
          avgG += p.g;
          avgB += p.b;
          if (p.r > 200 && p.g > 200 && p.b > 200) lightCorners++;
          if (p.r < 65 && p.g < 65 && p.b < 65) darkCorners++;
        });

        avgR = Math.round(avgR / 4);
        avgG = Math.round(avgG / 4);
        avgB = Math.round(avgB / 4);

        const isLightBg = lightCorners >= 2 || (avgR > 180 && avgG > 180 && avgB > 180);
        const isDarkBg = darkCorners >= 2 || (avgR < 65 && avgG < 65 && avgB < 65);

        // Process every pixel
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];

          if (a === 0) continue; // Already transparent

          // 1. Remove Light / White / Light-Gray background & Fake Checkerboard tiles
          if (isLightBg) {
            // Near white or light gray
            if (r > 205 && g > 205 && b > 205) {
              data[i + 3] = 0; // Make transparent
              continue;
            }
            // Fake checkerboard pattern pixels (#ffffff, #dcdcdc, #cccccc)
            if (Math.abs(r - g) < 18 && Math.abs(g - b) < 18 && r > 185) {
              data[i + 3] = 0;
              continue;
            }
          }

          // 2. Remove Dark / Black background
          if (isDarkBg) {
            // Near black or dark gray
            if (r < 55 && g < 55 && b < 55) {
              data[i + 3] = 0; // Make transparent
              continue;
            }
          }

          // 3. Remove pixels matching corner average color (Tolerance 42)
          const distToCornerAvg = Math.sqrt(
            (r - avgR) * (r - avgR) +
            (g - avgG) * (g - avgG) +
            (b - avgB) * (b - avgB)
          );

          if (distToCornerAvg < 40) {
            data[i + 3] = 0;
          }
        }

        ctx.putImageData(imageData, 0, 0);
        const transparentPng = canvas.toDataURL('image/png');
        resolve(transparentPng);
      } catch (err) {
        console.warn('Background removal failed:', err);
        resolve(imageSrc);
      }
    };

    img.onerror = () => resolve(imageSrc);
    img.src = imageSrc;
  });
}

function getPixel(data, x, y, width) {
  const index = (y * width + x) * 4;
  return {
    r: data[index],
    g: data[index + 1],
    b: data[index + 2],
    a: data[index + 3]
  };
}
