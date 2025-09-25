import { cn } from "@/lib/utils";
import { IconCloud as TablerIconCloud, IconRobot, IconMessage, IconFileText, IconChartBar, IconUsers } from "@tabler/icons-react";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const services = [
  {
    icon: <TablerIconCloud />,
    title: "Computação em Nuvem",
    description: "Hospede seus sistemas e arquivos na nuvem, com segurança e flexibilidade. Assim, sua equipe acessa tudo de qualquer lugar e sua empresa reduz custos com servidores físicos."
  },
  {
    icon: <IconRobot />,
    title: "Automações com I.A.",
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
        "flex flex-col py-10 relative group/feature"
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
        
        <div className="relative max-w-7xl mx-auto min-h-[800px] flex items-center justify-center">
          {/* Centro - IconCloud */}
          <div className="relative flex items-center justify-center">
            <div className="relative flex items-center justify-center overflow-hidden scale-75 px-12 pb-12 pt-6 z-10">
              <IconCloud iconSlugs={[
                "typescript",
                "javascript",
                "react",
                "nextdotjs",
                "nodejs",
                "python",
                "postgresql",
                "mongodb",
                "docker",
                "kubernetes",
                "amazonaws",
                "googlecloud",
                "microsoftazure",
                "git",
                "github",
                "gitlab",
                "jenkins",
                "terraform",
                "ansible",
                "prometheus",
                "grafana",
                "elasticsearch",
                "redis",
                "nginx",
                "apache",
                "linux",
                "ubuntu",
                "centos",
                "figma",
                "adobexd",
                "n8n",
                "chatwoot",
                "supabase",
                "openai",
                "anthropic",
                "googlebard",
                "meta",
                "x"
              ]} />
            </div>
            
            {/* Cards orbitando ao redor */}
            <div className="absolute inset-0">
              {/* Card 1 - Top Left */}
              <div className="absolute top-0 left-0 w-72 transform -translate-x-1/2 -translate-y-1/2">
                <Feature {...services[0]} index={0} />
              </div>
              
              {/* Card 2 - Top Right */}
              <div className="absolute top-0 right-0 w-72 transform translate-x-1/2 -translate-y-1/2">
                <Feature {...services[1]} index={1} />
              </div>
              
              {/* Card 3 - Middle Left */}
              <div className="absolute top-1/2 left-0 w-72 transform -translate-x-full -translate-y-1/2">
                <Feature {...services[2]} index={2} />
              </div>
              
              {/* Card 4 - Middle Right */}
              <div className="absolute top-1/2 right-0 w-72 transform translate-x-full -translate-y-1/2">
                <Feature {...services[3]} index={3} />
              </div>
              
              {/* Card 5 - Bottom Left */}
              <div className="absolute bottom-0 left-0 w-72 transform -translate-x-1/2 translate-y-1/2">
                <Feature {...services[4]} index={4} />
              </div>
              
              {/* Card 6 - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-72 transform translate-x-1/2 translate-y-1/2">
                <Feature {...services[5]} index={5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;