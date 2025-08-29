import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SEOHead from "@/components/ui/seo-head";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // SEO: Lazy loading de imagens
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    return () => {
      images.forEach(img => imageObserver.unobserve(img));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <Header />
      <main className="pt-24">
        <Hero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;