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
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <h1 className="text-xl font-bold">NeoFlow</h1>
        </div>
      </div>
      <NavBar items={navItems} />
    </header>
  );
};

export default Header;