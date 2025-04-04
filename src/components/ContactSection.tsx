
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, ingrese un email válido.",
  }),
  subject: z.string().min(5, {
    message: "El asunto debe tener al menos 5 caracteres.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const contactRef = useRef<HTMLDivElement>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, this would send data to a backend service
      console.log('Form values:', values);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={contactRef} className="py-16 bg-gradient-to-b from-techguard-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Contacta con <span className="text-techguard-600">Nosotros</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asunto</FormLabel>
                      <FormControl>
                        <Input placeholder="Asunto de tu mensaje" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Escribe tu mensaje aquí..." 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full btn-animate flex items-center justify-center bg-techguard-600 hover:bg-techguard-700" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Información de contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-techguard-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-techguard-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Correo electrónico</p>
                  <a href="mailto:info@geoentry.com" className="text-techguard-600 hover:text-techguard-500">
                    info@geoentry.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-techguard-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-techguard-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Teléfono</p>
                  <a href="tel:+123456789" className="text-techguard-600 hover:text-techguard-500">
                    +123 456 789
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-techguard-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-techguard-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Dirección</p>
                  <p className="text-gray-600">
                    Calle Tecnología 123<br />
                    Ciudad Innovación, CP 12345
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Horario de atención</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados:</span>
                  <span>10:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingos:</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
