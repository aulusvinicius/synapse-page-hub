import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const { toast } = useToast();
  
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  const validatePhone = (phone: string) => {
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return phoneRegex.test(phone);
  };
  
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    
    const newErrors: {[key: string]: string} = {};
    
    if (!validateEmail(email)) {
      newErrors.email = "Por favor, insira um e-mail válido";
    }
    
    if (!validatePhone(phone)) {
      newErrors.phone = "Por favor, insira um telefone válido no formato (11) 99999-9999";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    const data = {
      name: formData.get('name'),
      email: email,
      phone: phone,
      company: formData.get('company'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
      triggered_from: window.location.origin,
    };

    try {
      await fetch('https://webhooks.neoflow.com.br/webhook/form-neoflow', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(data),
      });

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
        variant: "success",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error sending form:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 py-2 leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-pink-500 dark:from-white dark:via-pink-200 dark:to-pink-400">
              Sua empresa a um clique da disrupção digital
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Fale com a gente e veja como nossas soluções podem acelerar o crescimento do seu negócio.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Por que escolher a NeoFlow?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-300 dark:to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Soluções personalizadas para cada necessidade empresarial</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-300 dark:to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Tecnologia de ponta com suporte especializado</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-300 dark:to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Implementação rápida e eficiente</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-300 dark:to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">ROI comprovado e resultados mensuráveis</p>
                </div>
              </div>
              
              <div className="flex items-center justify-start w-full mt-5 -ml-8">
                <div className="relative flex items-center justify-center overflow-hidden scale-150 px-20 pb-20 pt-8">
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
              </div>
            </div>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Impulsione Seus Resultados</CardTitle>
                <CardDescription>
                  Descubra o potencial da digitalização, solicite uma demonstração:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2 form-field-focus">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name" 
                      name="name" 
                      placeholder="Seu nome completo" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2 form-field-focus">
                    <Label htmlFor="email">E-mail Corporativo</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="seu.email@empresa.com" 
                      required 
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  
                  <div className="space-y-2 form-field-focus">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="(11) 99999-9999" 
                      required 
                      className={errors.phone ? "border-red-500" : ""}
                      onChange={(e) => {
                        e.target.value = formatPhone(e.target.value);
                      }}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>
                  
                  <div className="space-y-2 form-field-focus">
                    <Label htmlFor="company">Empresa</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      placeholder="Nome da sua empresa" 
                    />
                  </div>
                  
                  <div className="space-y-2 form-field-focus">
                    <Label htmlFor="message">Mensagem (Opcional)</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Conte-nos sobre suas necessidades específicas..."
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <span className="relative inline-block overflow-hidden rounded-full p-[1.5px] w-full">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFCFE1_0%,#FA5080_50%,#FFCFE1_100%)]" />
                    <Button
                      type="submit"
                      className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl bg-gradient-to-tr from-zinc-300/20 via-pink-400/30 to-transparent dark:from-zinc-300/5 dark:via-pink-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-pink-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-pink-400/30 transition-all py-4 px-10"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar Solicitação
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </span>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;