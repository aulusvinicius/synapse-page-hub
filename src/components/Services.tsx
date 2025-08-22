import { cn } from "@/lib/utils";
import { IconCloud, IconBolt, IconMessage, IconFileText, IconChartBar, IconUsers } from "@tabler/icons-react";

const services = [
  {
    icon: <IconCloud />,
    title: "Computação em Nuvem",
    description: "Hospede seus sistemas e arquivos na nuvem, com segurança e flexibilidade. Assim, sua equipe acessa tudo de qualquer lugar e sua empresa reduz custos com servidores físicos."
  },
  {
    icon: <IconBolt />,
    title: "Automações",
    description: "Deixe tarefas repetitivas no automático. Ganhe tempo e produtividade com fluxos que funcionam sozinhos e podem até usar inteligência artificial."
  },
  {
    icon: <IconMessage />,
    title: "Atendimento Multicanal",
    description: "Centralize WhatsApp, e-mail, chat e redes sociais em uma única tela. Facilite o atendimento e ofereça uma experiência mais rápida e consistente ao cliente."
  },
  {
    icon: <IconFileText />,
    title: "Gestão de Documentos",
    description: "Guarde, organize e compartilhe arquivos em um só lugar, com segurança e controle de acessos."
  },
  {
    icon: <IconChartBar />,
    title: "Painéis de Controle",
    description: "Acompanhe seus números em tempo real em dashboards visuais. Tome decisões mais rápidas e baseadas em dados."
  },
  {
    icon: <IconUsers />,
    title: "CRM (Gestão de Clientes)",
    description: "Controle seu funil de vendas, acompanhe o histórico de cada cliente e aumente suas chances de fechar negócios e fidelizar."
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
            Cuidamos de toda a sua transformação digital com soluções na medida para alavancar seu negócio, fazendo com que ele cresça com eficiência e segurança.
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