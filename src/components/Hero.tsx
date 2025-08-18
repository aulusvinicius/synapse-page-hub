import { HeroSection } from "@/components/ui/hero-section-dark";

const Hero = () => {
  return (
    <HeroSection
      title=""
      subtitle={{
        regular: "A transformação digital do seu negócio ",
        gradient: "passa por aqui.",
      }}
      description={
        <>
          Sua empresa na vanguarda tecnológica com a nossa suíte abrangente de ferramentas de desenvolvimento e recursos digitais.{" "}
          <a href="#services" className="text-pink-400 hover:text-pink-300 transition-colors underline">
            Saiba +
          </a>
        </>
      }
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