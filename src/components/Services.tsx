import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Zap, MessageCircle, FileText, BarChart, Users } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud & Virtualização",
    description: "Soluções robustas de cloud computing e virtualização para maximizar a eficiência da sua infraestrutura."
  },
  {
    icon: Zap,
    title: "Automações",
    description: "Automatize processos complexos e aumente a produtividade com nossas soluções inteligentes de automação."
  },
  {
    icon: MessageCircle,
    title: "Comunicação Omnichannel",
    description: "Integre todos os canais de comunicação em uma plataforma única e ofereça experiências consistentes."
  },
  {
    icon: FileText,
    title: "Gerenciador de Documentos",
    description: "Organize, armazene e gerencie documentos com segurança e eficiência em um sistema centralizado."
  },
  {
    icon: BarChart,
    title: "Painéis Gerenciais",
    description: "Dashboards inteligentes com analytics em tempo real para tomada de decisões estratégicas."
  },
  {
    icon: Users,
    title: "CRM",
    description: "Sistema completo de gestão de relacionamento com clientes para otimizar vendas e fidelização."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossas Soluções Digitais
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços digitais para transformar e modernizar sua empresa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-to-tr group-hover:from-zinc-300/30 group-hover:via-purple-400/40 group-hover:to-transparent dark:group-hover:from-zinc-300/10 dark:group-hover:via-purple-400/30 transition-all border border-input">
                  <service.icon className="h-6 w-6 text-gray-900 dark:text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;