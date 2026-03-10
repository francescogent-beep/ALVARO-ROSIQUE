import React from 'react';
import SEO from '../components/SEO';
// Added H2 to the UI components import
import { Section, Container, H1, H2, Text, Card, Grid, Breadcrumbs, Badge, Button } from '../components/UI';
import { SITE_DATA } from '../data';
import { HelpCircle, MessageCircle } from 'lucide-react';

const Faqs: React.FC = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": SITE_DATA.generalFaqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Preguntas Frecuentes" 
        description="Resolvemos tus dudas sobre osteopatía, duración de sesiones, precios y tratamientos en nuestro centro de Cartagena."
        jsonLd={[faqSchema]}
      />
      
      <Breadcrumbs items={[{ name: 'FAQ' }]} />

      <Section className="bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <Badge>Centro de Ayuda</Badge>
            <H1 className="mb-6">Preguntas Frecuentes</H1>
            <Text>Aquí encontrarás respuesta a las dudas más comunes sobre la práctica de la osteopatía y el funcionamiento de nuestra clínica.</Text>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            {SITE_DATA.generalFaqs.map((f, i) => (
              <Card key={i} className="bg-slate-50/30 border-slate-100 p-8 md:p-12 hover:bg-white hover:shadow-xl transition-all duration-700">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-teal-600/10 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                    <HelpCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-brand-950 mb-4 tracking-tight leading-tight">{f.q}</h3>
                    <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed avenir-minimal">{f.a}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 md:mt-32 bg-brand-950 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
             <div className="relative z-10">
               <H2 className="text-white mb-6">¿Aún tienes dudas?</H2>
               <Text className="text-slate-400 mb-12 max-w-2xl mx-auto">Si no has encontrado la respuesta que buscabas, escríbenos directamente por WhatsApp y te ayudaremos encantados.</Text>
               <Button href={SITE_DATA.contact.whatsapp} variant="secondary" className="h-16 md:h-20">
                 <MessageCircle className="mr-3" /> Consultar por WhatsApp
               </Button>
             </div>
             <HelpCircle className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 -rotate-12" />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Faqs;