import { NavBar } from "@/components/ui/tubelight-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
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
            src="/lovable-uploads/bc55fd02-9c67-45bd-81bc-a76fcd76ed62.png" 
            alt="NeoFlow"
            className="h-8 w-auto"
          />
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
      <NavBar items={navItems} />
    </header>
  );
};

export default Header;