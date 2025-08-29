import { HeroSection } from "@/components/ui/hero-section-dark";

const Hero = () => {
  return (
    <section itemScope itemType="https://schema.org/Organization">
      <HeroSection
        title=""
        subtitle={{
          regular: "A transformação digital do seu negócio ",
          gradient: "passa por aqui.",
        }}
        description="Reduza custos, otimize processos, aumente a eficiência operacional e expanda o alcance de mercado do seu negócio com nossas soluções digitais."
        gridOptions={{
          angle: 65,
          opacity: 0.4,
          cellSize: 50,
          lightLineColor: "#4a4a4a",
          darkLineColor: "#2a2a2a",
        }}
      />
    </section>
  );
};

export default Hero;