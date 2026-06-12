import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const colors = ['#c9a94b', '#e8c96d', '#a07a20'];
    const particleCount = 60;

    const setCanvasSize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 2 + 1;
        this.speedY = Math.random() * 1 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.opacity = 0;
        this.targetOpacity = Math.random() * 0.5 + 0.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        if (!prefersReducedMotion) {
          this.y -= this.speedY;
          this.x += this.speedX;
        }

        // Fade in
        if (this.opacity < this.targetOpacity && this.y > canvas.height * 0.2) {
          this.opacity += 0.01;
        }

        // Fade out
        if (this.y < canvas.height * 0.2) {
          this.opacity -= 0.01;
        }

        if (this.y < 0 || this.opacity <= 0) {
          if (!prefersReducedMotion) {
             this.reset();
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0, this.opacity);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const p = new Particle();
        if (prefersReducedMotion) {
          p.y = Math.random() * canvas.height;
          p.opacity = p.targetOpacity;
        }
        particles.push(p);
      }
    };

    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    if (prefersReducedMotion) {
      animate(); // draw once
    } else {
      animate();
    }

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}
