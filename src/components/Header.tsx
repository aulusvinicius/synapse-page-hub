import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <h1 className="text-xl font-bold">NeoFlow</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Serviços
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex">
          Fale Conosco
        </Button>
      </div>
    </header>
  );
};

export default Header;