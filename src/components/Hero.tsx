import { HeroSection } from "@/components/ui/hero-section-dark";

const Hero = () => {
  return (
    <HeroSection
      title="Bem-vindo à NeoFlow"
      subtitle={{
        regular: "Transforme suas ideias em ",
        gradient: "experiências digitais extraordinárias",
      }}
      description="Transforme suas ideias em realidade com nossa suíte abrangente de ferramentas de desenvolvimento e recursos digitais para empresas."
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