import { HeroSection } from "@/components/ui/hero-section-dark";

const Hero = () => {
  return (
    <HeroSection
      title="Transformação Digital"
      subtitle={{
        regular: "Sua disrupção ",
        gradient: "tecnológica passa por aqui.",
      }}
      description="Soluções completas em virtualização, automação, comunicação omnichannel, CRM e gestão de documentos para impulsionar sua empresa rumo ao futuro digital."
      ctaText="Conhecer Soluções"
      ctaHref="#services"
      bottomImage={{
        light: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
        dark: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=600&fit=crop",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.3,
        cellSize: 50,
        lightLineColor: "#ec4899",
        darkLineColor: "#ec4899",
      }}
      className="min-h-screen"
    />
  );
};

export default Hero;