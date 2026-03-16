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

      <Section className="bg-white pt-12 md:pt-20 lg:pt-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <Badge>Preguntas Frecuentes</Badge>
            <H1 className="mb-6 md:mb-8 tracking-tighter leading-tight">Resolvemos tus <span className="text-emerald-600 italic">dudas</span>.</H1>
            <Text className="text-lg md:text-xl lg:text-xl">Aquí tienes respuesta a las preguntas que más nos hacen en la clínica de Cartagena. Si no encuentras lo que buscas, pregúntanos sin compromiso.</Text>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 md:space-y-10">
            {SITE_DATA.generalFaqs.map((f, i) => (
              <Card key={i} className="bg-slate-50/30 border-slate-100 p-8 md:p-12 lg:p-16 hover:bg-white hover:shadow-2xl transition-all duration-1000 rounded-[2.5rem] md:rounded-[3.5rem] group">
                <div className="flex flex-col md:flex-row items-start md:space-x-10">
                  <div className="w-14 h-14 bg-emerald-600/10 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0 mb-6 md:mb-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                    <HelpCircle size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-950 mb-4 tracking-tighter leading-tight">{f.q}</h3>
                    <p className="text-slate-500 text-base md:text-lg lg:text-lg font-light leading-relaxed avenir-minimal">{f.a}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 md:mt-32 bg-brand-950 rounded-[3rem] md:rounded-[5rem] p-10 md:p-20 lg:p-28 text-center text-white relative overflow-hidden shadow-3xl">
             <div className="relative z-10">
               <H2 className="text-white mb-8 md:mb-10 tracking-tighter text-4xl md:text-5xl lg:text-6xl">¿Aún tienes dudas?</H2>
               <Text className="text-slate-400 mb-10 md:mb-16 max-w-3xl mx-auto text-lg md:text-xl lg:text-xl font-light avenir-minimal">Si no has encontrado la respuesta que buscabas, escríbenos por WhatsApp y Álvaro Rosique te ayudará encantado.</Text>
               <Button href={SITE_DATA.contact.whatsapp} variant="secondary" className="h-16 md:h-20 px-12 text-base shadow-2xl">
                 <MessageCircle className="mr-4" size={20} /> Preguntar por WhatsApp
               </Button>
             </div>
             <HelpCircle className="absolute -bottom-20 -right-20 w-80 h-80 text-white/5 -rotate-12" />
             <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Faqs;