import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Produtos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-12 bg-surface-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-6 group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Voltar ao Início
              </Button>
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-foreground">Nossas</span>
              <br />
              <span className="bg-tech-gradient bg-clip-text text-transparent">
                Soluções
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Conheça todas as soluções tecnológicas que oferecemos para transformar sua empresa
            </p>
          </div>
        </div>
      </section>
      
      <Services />
      <Footer />
    </div>
  );
};

export default Produtos;