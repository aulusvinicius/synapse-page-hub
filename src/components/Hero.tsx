import { HeroSection } from "@/components/ui/hero-section-dark";

const Hero = () => {
  return (
    <HeroSection
      title=""
      subtitle={{
        regular: "Reduza custos, otimize processos, aumente a eficiência operacional e expanda o alcance de mercado do seu negócio com ",
        gradient: "nossas soluções digitais.",
      }}
      description="Sua empresa na vanguarda tecnológica com a nossa suíte abrangente de ferramentas de desenvolvimento e recursos digitais."
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}
    />
  );
};

export default Hero;