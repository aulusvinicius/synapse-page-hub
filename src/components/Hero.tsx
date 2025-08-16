import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Cpu, Brain, Code, Database, Server, Wifi, Cloud, Bot, Microchip, Network } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic flowing tech background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background overflow-hidden">
        {/* Flowing tech particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute opacity-30 animate-flow"
              style={{
                left: `${-10 + Math.random() * 120}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              {/* Tech and AI icons representing different services */}
              {i % 10 === 0 && <Cpu className="h-4 w-4 text-neo-pink/40" />}
              {i % 10 === 1 && <Brain className="h-4 w-4 text-neo-pink/40" />}
              {i % 10 === 2 && <Code className="h-4 w-4 text-neo-pink/40" />}
              {i % 10 === 3 && <Database className="h-4 w-4 text-neo-pink/40" />}
              {i % 10 === 4 && <Server className="h-4 w-4 text-neo-pink/40" />}
              {i % 10 === 5 && <Wifi className="h-4 w-4 text-neo-pink/40" />}
              {i % 10 === 6 && <Cloud className="h-4 w-4 text-neo-pink/40" />}
              {i % 10 === 7 && <Bot className="h-4 w-4 text-neo-pink/40" />}
              {i % 10 === 8 && <Microchip className="h-4 w-4 text-neo-pink/40" />}
              {i % 10 === 9 && <Network className="h-4 w-4 text-neo-pink/40" />}
            </div>
          ))}
        </div>

        {/* Continuous flowing lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-neo-pink/30 to-transparent animate-flow-horizontal" />
          <div className="absolute top-2/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-neo-pink/20 to-transparent animate-flow-horizontal" style={{ animationDelay: '3s' }} />
          <div className="absolute top-3/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-neo-pink/30 to-transparent animate-flow-horizontal" style={{ animationDelay: '6s' }} />
          <div className="absolute top-4/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-neo-pink/20 to-transparent animate-flow-horizontal" style={{ animationDelay: '9s' }} />
          <div className="absolute top-5/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-neo-pink/30 to-transparent animate-flow-horizontal" style={{ animationDelay: '12s' }} />
        </div>

        {/* Vertical flowing elements */}
        <div className="absolute inset-0">
          <div className="absolute left-1/12 top-0 h-full w-px bg-gradient-to-b from-transparent via-neo-pink/20 to-transparent animate-flow-vertical" />
          <div className="absolute left-3/12 top-0 h-full w-px bg-gradient-to-b from-transparent via-neo-pink/15 to-transparent animate-flow-vertical" style={{ animationDelay: '4s' }} />
          <div className="absolute left-5/12 top-0 h-full w-px bg-gradient-to-b from-transparent via-neo-pink/20 to-transparent animate-flow-vertical" style={{ animationDelay: '8s' }} />
          <div className="absolute left-7/12 top-0 h-full w-px bg-gradient-to-b from-transparent via-neo-pink/15 to-transparent animate-flow-vertical" style={{ animationDelay: '12s' }} />
          <div className="absolute left-9/12 top-0 h-full w-px bg-gradient-to-b from-transparent via-neo-pink/20 to-transparent animate-flow-vertical" style={{ animationDelay: '16s' }} />
        </div>

        {/* Tech grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-16 grid-rows-12 h-full w-full">
            {Array.from({ length: 192 }).map((_, i) => (
              <div
                key={i}
                className="border border-neo-pink/20"
                style={{
                  opacity: Math.random() > 0.7 ? 1 : 0,
                  animationDelay: `${i * 0.05}s`
                }}
              />
            ))}
          </div>
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