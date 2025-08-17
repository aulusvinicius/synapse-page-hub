import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, Settings, MessageCircle } from "lucide-react";

const Header = () => {
  const navItems = [
    { name: 'Início', url: '#', icon: Home },
    { name: 'Serviços', url: '#services', icon: Settings },
    { name: 'Contato', url: '#contact', icon: MessageCircle }
  ];

  return (
    <header className="relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/600fb528-4d70-496b-b5fe-4662354fb61c.png" 
            alt="neoFlow"
            className="h-8 w-auto"
          />
        </div>
      </div>
      <NavBar items={navItems} />
    </header>
  );
};

export default Header;