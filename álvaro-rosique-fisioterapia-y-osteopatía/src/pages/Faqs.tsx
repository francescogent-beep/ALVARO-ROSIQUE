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

      <Section className="bg-white pt-16 md:pt-24 lg:pt-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <Badge>Preguntas Frecuentes</Badge>
            <H1 className="mb-6 md:mb-8 tracking-tighter leading-tight">Resolvemos tus <span className="text-blue-600 italic">dudas</span>.</H1>
            <Text className="text-lg md:text-xl lg:text-2xl">Aquí tienes respuesta a las preguntas que más nos hacen en la clínica de Cartagena. Si no encuentras lo que buscas, pregúntanos sin compromiso.</Text>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
            {SITE_DATA.generalFaqs.map((f, i) => (
              <Card key={i} className="bg-slate-50/30 border-slate-100 p-10 md:p-16 lg:p-20 hover:bg-white hover:shadow-2xl transition-all duration-1000 rounded-[3rem] md:rounded-[4rem] group">
                <div className="flex flex-col md:flex-row items-start md:space-x-12">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 mb-8 md:mb-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <HelpCircle size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold text-brand-950 mb-6 tracking-tighter leading-tight">{f.q}</h3>
                    <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed avenir-minimal">{f.a}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-24 md:mt-40 bg-brand-950 rounded-[4rem] md:rounded-[6rem] p-12 md:p-24 lg:p-32 text-center text-white relative overflow-hidden shadow-3xl">
             <div className="relative z-10">
               <H2 className="text-white mb-8 md:mb-12 tracking-tighter text-4xl md:text-7xl">¿Aún tienes dudas?</H2>
               <Text className="text-slate-400 mb-12 md:mb-20 max-w-3xl mx-auto text-lg md:text-2xl font-light avenir-minimal">Si no has encontrado la respuesta que buscabas, escríbenos por WhatsApp y Álvaro Rosique te ayudará encantado.</Text>
               <Button href={SITE_DATA.contact.whatsapp} variant="secondary" className="h-20 md:h-28 px-16 text-base shadow-2xl">
                 <MessageCircle className="mr-4" size={24} /> Preguntar por WhatsApp
               </Button>
             </div>
             <HelpCircle className="absolute -bottom-20 -right-20 w-96 h-96 text-white/5 -rotate-12" />
             <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Faqs;