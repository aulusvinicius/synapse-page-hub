import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  IconBrandReact, 
  IconBrandJavascript, 
  IconBrandPython, 
  IconBrandNodejs,
  IconBrandDocker,
  IconBrandGit,
  IconBrandTypescript,
  IconDatabase,
  IconApi,
  IconCloud
} from "@tabler/icons-react";

interface FloatingParticlesProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
  animationSpeed?: number;
}

interface TechParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  icon: React.ComponentType<any>;
  opacity: number;
  opacityDirection: number;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  className,
  particleCount = 30,
  animationSpeed = 1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particlesRef = useRef<TechParticle[]>([]);
  const [, forceUpdate] = useState({});
  
  const techIcons = [
    IconBrandReact,
    IconBrandJavascript,
    IconBrandPython,
    IconBrandNodejs,
    IconBrandDocker,
    IconBrandGit,
    IconBrandTypescript,
    IconDatabase,
    IconApi,
    IconCloud
  ];

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setDimensions({ width: clientWidth, height: clientHeight });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const newParticles: TechParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.05 * animationSpeed,
        vy: (Math.random() - 0.5) * 0.05 * animationSpeed,
        icon: techIcons[Math.floor(Math.random() * techIcons.length)],
        opacity: Math.random() * 0.5 + 0.3,
        opacityDirection: Math.random() > 0.5 ? 1 : -1,
      });
    }
    particlesRef.current = newParticles;
    forceUpdate({});
  }, [dimensions, particleCount, animationSpeed]);

  useEffect(() => {
    if (!canvasRef.current || particlesRef.current.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particle positions directly in ref
      particlesRef.current = particlesRef.current.map(particle => {
        let newX = particle.x + particle.vx;
        let newY = particle.y + particle.vy;

        // Wrap around edges
        if (newX < 0) newX = dimensions.width;
        if (newX > dimensions.width) newX = 0;
        if (newY < 0) newY = dimensions.height;
        if (newY > dimensions.height) newY = 0;

        // Animate opacity
        let newOpacity = particle.opacity + particle.opacityDirection * 0.003;
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
      });

      // Draw connections
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (120 - distance) / 120 * 0.15;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Only force update DOM occasionally to reduce re-renders
      if (Math.random() < 0.1) {
        forceUpdate({});
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dimensions]);

  return (
    <div 
      ref={containerRef}
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{ zIndex: 0 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ width: '100%', height: '100%' }}
      />
      {particlesRef.current.map((particle) => {
        const IconComponent = particle.icon;
        return (
          <div
            key={particle.id}
            className="absolute transition-opacity duration-300"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: particle.opacity * 0.5,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <IconComponent 
              size={12} 
              className="text-white/40"
              strokeWidth={1.5}
            />
          </div>
        );
      })}
    </div>
  );
};