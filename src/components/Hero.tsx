import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic disruption background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neo-pink/20 to-transparent animate-pulse" />
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className={`border border-neo-pink/10 animate-pulse`}
                style={{
                  animationDelay: `${(i % 12) * 0.1}s`,
                  animationDuration: `${2 + (i % 3)}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-neo-pink/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Disruption waves */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neo-pink to-transparent animate-pulse" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-tech-gradient opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neo-pink to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>
      
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
            Soluções completas em virtualização, comunicação omnichannel, CRM e gestão documental 
            para impulsionar sua empresa ao futuro digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Conhecer Soluções
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="tech" size="xl">
              Falar com Especialista
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