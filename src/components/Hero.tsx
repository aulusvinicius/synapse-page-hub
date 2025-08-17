import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    };

    const initVanta = async () => {
      if (vantaRef.current && !vantaEffect.current) {
        try {
          // Load Three.js first
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
          
          // Then load Vanta NET effect
          await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js');
          
          // Initialize the NET effect
          vantaEffect.current = (window as any).VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xec4899, // neo-pink color
            backgroundColor: 0x0a0a0a, // dark background
            points: 10.00,
            maxDistance: 23.00,
            spacing: 17.00,
            showDots: false
          });
        } catch (error) {
          console.error('Error loading Vanta.js:', error);
        }
      }
    };

    initVanta();

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vanta.js NET background */}
      <div ref={vantaRef} className="absolute inset-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-8 w-8 text-neo-pink mr-3 animate-glow" />
            <span className="text-neo-pink font-semibold text-lg">Transformação Digital</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Sua disrupção</span>
            <br />
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Tecnológica passa por aqui.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Soluções completas em virtualização, automação, comunicação omnichannel, CRM e gestão de documentos 
            para impulsionar sua empresa rumo ao futuro digital.
          </p>
          
          <div className="flex justify-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Conhecer Soluções
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-neo-pink rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neo-pink rounded-full mt-2 animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;