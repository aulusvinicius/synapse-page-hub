import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-8 w-8 text-neo-pink mr-3 animate-glow" />
            <span className="text-neo-pink font-semibold text-lg">Transformação Digital</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Inovação em</span>
            <br />
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Tecnologia
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