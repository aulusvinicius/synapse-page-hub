import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-950">
      <Header />
      <div className="pt-24">
        <Hero />
        <Services />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;