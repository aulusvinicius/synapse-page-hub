import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-gradient border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/8b3ee719-8c36-41d7-90a8-2adbbe33fc7c.png" 
              alt="neo.flow" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-muted-foreground mb-6 max-w-md">
              Transformando empresas através de soluções tecnológicas inovadoras e inteligentes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-neo-pink transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neo-pink transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neo-pink transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neo-pink transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-neo-pink transition-colors">
                  Virtualização
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neo-pink transition-colors">
                  Omnichannel
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neo-pink transition-colors">
                  CRM
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neo-pink transition-colors">
                  Gestão de Documentos
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-neo-pink transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neo-pink transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neo-pink transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-neo-pink transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 neo.flow. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-neo-pink transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-neo-pink transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;