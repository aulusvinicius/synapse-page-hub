const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/b16e495f-6476-43b3-b760-922274b90a86.png" 
              alt="NeoFlow"
              className="h-12 w-auto"
            />
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 neoflow. Todos os direitos reservados.
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