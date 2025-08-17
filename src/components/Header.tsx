import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, Settings, MessageCircle } from "lucide-react";

const Header = () => {
  const navItems = [
    { name: 'Início', url: '#', icon: Home },
    { name: 'Soluções', url: '#services', icon: Settings },
    { name: 'Contato', url: '#contact', icon: MessageCircle }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/721eed06-04b2-4134-ab5c-0af3a86ee878.png" 
            alt="NeoFlow"
            className="h-16 w-auto"
          />
        </div>
      </div>
      <NavBar items={navItems} />
    </header>
  );
};

export default Header;