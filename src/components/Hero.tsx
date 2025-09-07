import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

const Hero = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <section itemScope itemType="https://schema.org/Organization">
      <div
        className="h-[400vh] bg-background w-full relative pt-40 overflow-clip"
        ref={ref}
      >
        {/* Mantém o fundo atual com gradiente radial */}
        <div className="absolute top-0 z-[-1] h-screen w-screen bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(168,85,247,0.15),transparent_70%)] pointer-events-none" />
        
        <GoogleGeminiEffect
          title="A transformação digital do seu negócio passa por aqui."
          description="Reduza custos, otimize processos, aumente a eficiência operacional e expanda o alcance de mercado do seu negócio com nossas soluções digitais."
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
    </section>
  );
};

export default Hero;