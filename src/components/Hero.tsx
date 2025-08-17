import { HeroSection } from "@/components/ui/hero-section-dark";

const Hero = () => {
  return (
    <HeroSection
      title="Transformação Digital"
      subtitle={{
        regular: "Sua disrupção ",
        gradient: "Tecnológica passa por aqui.",
      }}
      description="Soluções completas em virtualização, automação, comunicação omnichannel, CRM e gestão de documentos para impulsionar sua empresa rumo ao futuro digital."
      ctaText="Conhecer Soluções"
      ctaHref="#services"
      bottomImage={{
        light: "https://www.launchuicomponents.com/app-light.png",
        dark: "https://www.launchuicomponents.com/app-dark.png",
      }}
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