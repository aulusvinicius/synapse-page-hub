import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  IconBrandReact, 
  IconBrandJavascript, 
  IconBrandPython, 
  IconBrandNodejs, 
  IconBrandDocker, 
  IconDatabase, 
  IconCloud, 
  IconBrandGit,
  IconBrandAws,
  IconApi
} from "@tabler/icons-react";

interface FloatingParticlesProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
  animationSpeed?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  opacityDirection: number;
  iconIndex: number;
}

const techIcons = [
  IconBrandReact,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandNodejs,
  IconBrandDocker,
  IconDatabase,
  IconCloud,
  IconBrandGit,
  IconBrandAws,
  IconApi,
];

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  className,
  particleCount = 12,
  particleColor = "rgba(255, 255, 255, 0.5)",
  animationSpeed = 1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const newParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.5 * animationSpeed,
        vy: (Math.random() - 0.5) * 0.5 * animationSpeed,
        opacity: Math.random() * 0.5 + 0.3,
        opacityDirection: Math.random() > 0.5 ? 1 : -1,
        iconIndex: Math.floor(Math.random() * techIcons.length),
      });
    }
    setParticles(newParticles);
  }, [dimensions, particleCount, animationSpeed]);

  useEffect(() => {
    if (!particles.length) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    let animationId: number;

    const updateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.vx;
        let newY = particle.y + particle.vy;

        // Wrap around edges
        if (newX < 0) newX = dimensions.width;
        if (newX > dimensions.width) newX = 0;
        if (newY < 0) newY = dimensions.height;
        if (newY > dimensions.height) newY = 0;

        // Animate opacity
        let newOpacity = particle.opacity + particle.opacityDirection * 0.005;
        let newOpacityDirection = particle.opacityDirection;

        if (newOpacity <= 0.2) {
          newOpacityDirection = 1;
          newOpacity = 0.2;
        }
        if (newOpacity >= 0.8) {
          newOpacityDirection = -1;
          newOpacity = 0.8;
        }

        return {
          ...particle,
          x: newX,
          y: newY,
          opacity: newOpacity,
          opacityDirection: newOpacityDirection,
        };
      }));
    };

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (150 - distance) / 150 * 0.2;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
    };

    const animate = () => {
      updateParticles();
      drawConnections();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [particles, dimensions]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{ zIndex: 0 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      {particles.map((particle, index) => {
        const IconComponent = techIcons[particle.iconIndex];
        return (
          <div
            key={index}
            className="absolute transition-opacity duration-100"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: particle.opacity,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <IconComponent
              size={24}
              className="text-white/70 drop-shadow-lg"
            />
          </div>
        );
      })}
    </div>
  );
};