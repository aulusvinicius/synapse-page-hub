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
      <div className="absolute top-0 z-[0] h-screen w-screen bg-gradient-to-br from-purple-950/95 via-pink-950/90 to-purple-950/95" />
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/b16e495f-6476-43b3-b760-922274b90a86.png" 
            alt="NeoFlow"
            className="h-12 w-auto"
          />
        </div>
      </div>
      <NavBar items={navItems} />
    </header>
  );
};

export default Header;