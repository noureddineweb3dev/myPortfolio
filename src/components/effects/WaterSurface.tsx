'use client';

import { useEffect, useRef } from 'react';

export default function WaterSurface() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    // Use a requestAnimationFrame to ensure the canvas is laid out before setting dimensions
    const setupCanvas = () => {
      let width = canvas.offsetWidth;
      let height = canvas.offsetHeight;

      canvas.width = width;
      canvas.height = height;

      const size = width * height;
      let buffer1 = new Float32Array(size);
      let buffer2 = new Float32Array(size);

      // Add subtle ambient waves
      let time = 0;

      function resize() {
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;
        buffer1 = new Float32Array(width * height);
        buffer2 = new Float32Array(width * height);
      }

      window.addEventListener('resize', resize);

      function disturb(x: number, y: number, intensity: number = 120) {
        const radius = 4;
        for (let j = -radius; j <= radius; j++) {
          for (let i = -radius; i <= radius; i++) {
            const px = (x + i) | 0;
            const py = (y + j) | 0;
            if (px > 0 && px < width && py > 0 && py < height) {
              buffer1[px + py * width] += intensity;
            }
          }
        }
      }

      function step() {
        for (let i = width; i < size - width; i++) {
          buffer2[i] =
            ((buffer1[i - 1] + buffer1[i + 1] + buffer1[i - width] + buffer1[i + width]) / 2 -
              buffer2[i]) *
            0.98; // Slightly increased damping for more visible waves
        }

        [buffer1, buffer2] = [buffer2, buffer1];
      }

      function draw() {
        const img = ctx.createImageData(width, height);
        for (let i = 0; i < size; i++) {
          const shade = buffer1[i];
          // Enhanced cyan to blue gradient with more depth
          const intensity = Math.abs(shade);
          img.data[i * 4 + 0] = Math.min(255, 20 + intensity * 0.6); // R
          img.data[i * 4 + 1] = Math.min(255, 100 + intensity * 0.7); // G
          img.data[i * 4 + 2] = Math.min(255, 180 + intensity * 0.8); // B
          img.data[i * 4 + 3] = Math.min(100, 40 + intensity * 0.15); // Alpha - more visible
        }
        ctx.putImageData(img, 0, 0);
      }

      function addAmbientDisturbance() {
        // Create subtle waves without user interaction
        time += 0.01;
        const waveFreq = 0.005;
        const centerX = width / 2 + Math.sin(time * 0.5) * 100;
        const centerY = height / 2 + Math.cos(time * 0.7) * 100;

        if (Math.floor(time) % 2 === 0 && time % 1 < 0.05) {
          disturb(centerX, centerY, 50);
        }
      }

      function animate() {
        step();
        addAmbientDisturbance();
        draw();
        requestAnimationFrame(animate);
      }

      animate();

      let lastMouseX = 0;
      let lastMouseY = 0;

      function onMove(e: MouseEvent) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Only disturb if mouse moved significantly
        const distance = Math.sqrt(Math.pow(x - lastMouseX, 2) + Math.pow(y - lastMouseY, 2));
        if (distance > 5) {
          disturb(x, y, Math.min(150, 80 + distance / 2));
          lastMouseX = x;
          lastMouseY = y;
        }
      }

      window.addEventListener('mousemove', onMove);

      return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', onMove);
      };
    };

    // Call setup on next animation frame to ensure layout is complete
    const cleanup = requestAnimationFrame(setupCanvas);

    return () => {
      cancelAnimationFrame(cleanup);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full" />;
}
