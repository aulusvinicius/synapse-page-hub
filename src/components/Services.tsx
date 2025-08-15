import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, MessageSquare, Users, FileText, Zap, Shield, BarChart3, Bot } from "lucide-react";
import virtualizationIcon from "@/assets/virtualization-icon.jpg";
import omnichannelIcon from "@/assets/omnichannel-icon.jpg";
import crmIcon from "@/assets/crm-icon.jpg";
import documentsIcon from "@/assets/documents-icon.jpg";

const Services = () => {
  const services = [
    {
      icon: Cloud,
      image: virtualizationIcon,
      title: "Virtualização de Infraestrutura",
      description: "Soluções completas em virtualização tecnológica para otimizar recursos e reduzir custos operacionais.",
      features: ["Cloud Computing", "Servidores Virtuais", "Backup Automatizado", "Monitoramento 24/7"]
    },
    {
      icon: MessageSquare,
      image: omnichannelIcon,
      title: "Comunicação Omnichannel",
      description: "Unifique todos os canais de comunicação em uma plataforma integrada e inteligente.",
      features: ["WhatsApp Business", "Chat Web", "E-mail Marketing", "Central Telefônica"]
    },
    {
      icon: Users,
      image: crmIcon,
      title: "CRM Inteligente",
      description: "Gerencie relacionamentos com clientes de forma eficiente com nossa solução CRM completa.",
      features: ["Automação de Vendas", "Analytics Avançados", "Funil de Conversão", "Relatórios Personalizados"]
    },
    {
      icon: FileText,
      image: documentsIcon,
      title: "Gerenciador de Documentos",
      description: "Sistema inteligente para organização, armazenamento e controle de documentos digitais.",
      features: ["Assinatura Digital", "Controle de Versão", "Busca Inteligente", "Compliance LGPD"]
    },
    {
      icon: BarChart3,
      image: virtualizationIcon,
      title: "Painéis Gerenciais",
      description: "Dashboards inteligentes com análises em tempo real para tomada de decisões estratégicas.",
      features: ["KPIs em Tempo Real", "Relatórios Customizados", "Análise Preditiva", "Business Intelligence"]
    },
    {
      icon: Bot,
      image: omnichannelIcon,
      title: "Automações Inteligentes",
      description: "Soluções de automação para otimizar processos e aumentar a produtividade da sua empresa.",
      features: ["Workflows Personalizados", "Integrações API", "RPA Avançado", "IA Aplicada"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-surface-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-neo-pink mr-2" />
            <span className="text-neo-pink font-semibold">Nossos Serviços</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Soluções</span>
            <span className="bg-tech-gradient bg-clip-text text-transparent"> Tecnológicas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A neoflow oferece um ecossistema completo de soluções para transformar sua empresa digitalmente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-neo-pink/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div 
                    className="w-16 h-16 rounded-lg bg-cover bg-center mr-4 border border-neo-blue/30"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <service.icon className="h-8 w-8 text-neo-pink group-hover:animate-glow" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-neo-pink transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-neo-pink rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border">
            <Shield className="h-12 w-12 text-neo-blue mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Segurança Garantida</h3>
            <p className="text-muted-foreground text-sm">Proteção total dos seus dados com criptografia avançada</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border">
            <Zap className="h-12 w-12 text-neo-pink mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Alto Performance</h3>
            <p className="text-muted-foreground text-sm">Sistemas neoflow otimizados para máxima eficiência operacional</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border">
            <Users className="h-12 w-12 text-neo-blue mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Suporte 24/7</h3>
            <p className="text-muted-foreground text-sm">Equipe neoflow especializada disponível a qualquer momento</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;