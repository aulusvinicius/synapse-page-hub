const Footer = () => {
  return (
    <footer className="bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))] border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/721eed06-04b2-4134-ab5c-0af3a86ee878.png" 
              alt="NeoFlow"
              className="h-12 w-auto"
            />
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 NeoFlow. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Suporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;