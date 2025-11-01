import { useEffect, useRef } from 'react';

const AnimatedWaves = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const waves = [
      { amplitude: 40, frequency: 0.002, speed: 0.5, offset: 0 },
      { amplitude: 30, frequency: 0.003, speed: 0.7, offset: 100 },
      { amplitude: 50, frequency: 0.0015, speed: 0.4, offset: 200 },
      { amplitude: 35, frequency: 0.0025, speed: 0.6, offset: 300 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.strokeStyle = `hsla(262, 83%, 58%, ${0.15 - index * 0.03})`;
        ctx.lineWidth = 2;

        for (let x = 0; x < canvas.width; x += 5) {
          const y =
            canvas.height / 2 +
            wave.amplitude * Math.sin(x * wave.frequency + time * wave.speed + wave.offset);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      });

      time += 0.01;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default AnimatedWaves;
