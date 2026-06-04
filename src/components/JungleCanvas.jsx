import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion.js';

export default function JungleCanvas() {
  const canvasRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) return undefined;

    const ctx = canvas.getContext('2d', { alpha: true });
    let width = 0;
    let height = 0;
    let frameId = 0;
    let running = true;
    let resizeTimeout = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    class Leaf {
      constructor(initial = false) {
        this.reset(initial);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -20;
        this.size = Math.random() * 8 + 4;
        this.speed = Math.random() * 1.4 + 0.6;
        this.angle = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.08;
        this.fillStyle =
          Math.random() > 0.5
            ? `rgba(34, 197, 94, ${Math.random() * 0.25 + 0.16})`
            : `rgba(16, 185, 129, ${Math.random() * 0.25 + 0.16})`;
      }

      update() {
        this.y += this.speed;
        this.x += Math.sin(this.angle) * 0.4;
        this.angle += this.rotationSpeed;
        if (this.y > height + 20) this.reset();
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.fillStyle;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size * 1.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    resize();
    const leafCount = window.innerWidth < 768 ? 12 : 24;
    const leaves = Array.from({ length: leafCount }, () => new Leaf(true));

    function animate() {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      leaves.forEach((leaf) => {
        leaf.update();
        leaf.draw();
      });
      frameId = requestAnimationFrame(animate);
    }

    function handleResize() {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(resize, 180);
    }

    function handleVisibilityChange() {
      running = !document.hidden;
      if (running) animate();
      else cancelAnimationFrame(frameId);
    }

    animate();
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      running = false;
      window.clearTimeout(resizeTimeout);
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [prefersReducedMotion]);

  return <canvas ref={canvasRef} className="jungle-canvas" aria-hidden="true" />;
}
