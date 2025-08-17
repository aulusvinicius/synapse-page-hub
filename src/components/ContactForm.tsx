import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 py-2 leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-300 dark:to-purple-500">
              Sua empresa a um clique da disrupção digital
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Entre em contato conosco e descubra como nossas soluções podem impulsionar seu negócio.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Por que escolher a NeoFlow?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-300 dark:to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Soluções personalizadas para cada necessidade empresarial</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-300 dark:to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Tecnologia de ponta com suporte especializado</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-300 dark:to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Implementação rápida e eficiente</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-300 dark:to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">ROI comprovado e resultados mensuráveis</p>
                </div>
              </div>
            </div>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Solicite uma Consulta Gratuita</CardTitle>
                <CardDescription>
                  Preencha o formulário e nossa equipe entrará em contato para apresentar a melhor solução para sua empresa.
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
                    />
                  </div>
                  
                  <div className="space-y-2 form-field-focus">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="(11) 99999-9999" 
                      required 
                    />
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
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <Button
                      type="submit"
                      className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all py-4 px-10"
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