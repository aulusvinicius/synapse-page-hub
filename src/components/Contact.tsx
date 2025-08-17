import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });
    
    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Entre em</span>
            <span className="bg-tech-gradient bg-clip-text text-transparent"> Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar sua empresa? Fale com nossos especialistas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-surface-gradient border-border shadow-elevated">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Envie sua mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário e nossa equipe entrará em contato
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Seu nome"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border focus:border-neo-pink"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Seu e-mail"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border focus:border-neo-pink"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Empresa"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border focus:border-neo-pink"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Telefone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border focus:border-neo-pink"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Conte-nos sobre seu projeto ou necessidade"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border focus:border-neo-pink"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="xl" className="w-full group">
                    Enviar Mensagem
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-neo-pink/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-neo-pink" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">E-mail</p>
                    <p className="text-muted-foreground">contato@neoflow.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-neo-blue/10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-neo-blue" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Telefone</p>
                    <p className="text-muted-foreground">(38) 99836-6849</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-neo-pink/10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-neo-pink" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Endereço</p>
                    <p className="text-muted-foreground"></p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-glow-gradient border-neo-pink/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Consultoria Gratuita
                </h4>
                <p className="text-muted-foreground mb-4">
                  Agende uma reunião para descobrir como podemos ajudar sua empresa
                </p>
                <Button variant="glow" className="w-full">
                  Agendar Reunião
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;