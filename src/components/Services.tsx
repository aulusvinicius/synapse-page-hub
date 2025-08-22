import { cn } from "@/lib/utils";
import { IconCloud, IconBolt, IconMessage, IconFileText, IconChartBar, IconUsers } from "@tabler/icons-react";

const services = [
  {
    icon: <IconCloud />,
    title: "Cloud & Virtualização",
    description: "Soluções robustas de cloud computing e virtualização para maximizar a eficiência da sua infraestrutura."
  },
  {
    icon: <IconBolt />,
    title: "Automações",
    description: "Automatize processos complexos e aumente a produtividade com nossas soluções inteligentes com I.A."
  },
  {
    icon: <IconMessage />,
    title: "Comunicação Omnichannel",
    description: "Integre todos os canais de comunicação em uma plataforma única e ofereça experiências consistentes."
  },
  {
    icon: <IconFileText />,
    title: "Gerenciador de Documentos",
    description: "Organize, armazene e gerencie documentos com segurança e eficiência em um sistema centralizado."
  },
  {
    icon: <IconChartBar />,
    title: "Painéis Gerenciais",
    description: "Dashboards inteligentes com analytics em tempo real para tomada de decisões estratégicas."
  },
  {
    icon: <IconUsers />,
    title: "CRM",
    description: "Sistema completo de gestão de relacionamento com clientes para otimizar vendas e fidelização."
  }
];

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-pink-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-300 to-pink-500 dark:from-white dark:via-pink-200 dark:to-pink-400 leading-relaxed py-2">
            Não importa o tamanho da sua empresa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de produtos e serviços digitais para transformar e modernizar sua empresa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Feature key={service.title} title={service.title} description={service.description} icon={service.icon} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;