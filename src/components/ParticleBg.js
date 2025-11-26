'use client';
import { useEffect, useRef } from 'react';

export default function ParticleBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Mouse tracking
    let mouse = { x: -9999, y: -9999 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.speedY = Math.random() * 0.5 + 0.2;
        this.vx = 0;
        this.vy = this.speedY;
      }
      update() {
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let dist = Math.sqrt(dx*dx + dy*dy);
        
        if (dist < 100) {
            const angle = Math.atan2(dy, dx);
            const force = (100 - dist) / 100;
            this.vx += Math.cos(angle) * force * 2;
            this.vy += Math.sin(angle) * force * 2;
        }

        this.vx *= 0.95;
        this.vy = this.speedY + (this.vy - this.speedY) * 0.95;
        this.x += this.vx;
        this.y += this.vy;

        if (this.y > canvas.height + this.radius) { this.reset(); this.y = 0; }
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 255, 218, 0.5)';
        ctx.fill();
      }
    }

    for (let i = 0; i < 100; i++) particles.push(new Particle());

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(100, 255, 218, ${1 - dist/120})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
}