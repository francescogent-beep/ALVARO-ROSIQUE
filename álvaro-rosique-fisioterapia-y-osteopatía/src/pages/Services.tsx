
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Section, Container, H1, Text, Grid, Card, Badge, Breadcrumbs, Button } from '../components/UI';
import { SITE_DATA } from '../data';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <>
      <SEO 
        title="Tratamientos de Osteopatía" 
        description="Explora nuestros servicios especializados en Cartagena: estructural, craneal, deportiva e infantil."
      />
      
      <Breadcrumbs items={[{ name: 'Servicios' }]} />

      <Section className="bg-slate-50 pt-16 md:pt-24 lg:pt-32">
        <Container>
          <div className="max-w-4xl mb-16 md:mb-24">
            <Badge>Nuestros Servicios</Badge>
            <H1 className="mb-6 md:mb-8 tracking-tighter leading-tight">Tratamientos para <span className="text-blue-600">sentirte bien</span>.</H1>
            <Text className="text-lg md:text-xl lg:text-2xl">En nuestra clínica de Cartagena te ayudamos a superar tus dolores con fisioterapia y osteopatía adaptada a ti.</Text>
          </div>

          <Grid cols={3} className="gap-12 md:gap-16 lg:gap-24">
            {SITE_DATA.services.map((s) => (
              <Card key={s.slug} className="flex flex-col group p-0 overflow-hidden border-none shadow-sm hover:shadow-2xl transition-all duration-1000 bg-white rounded-[3rem] md:rounded-[4rem]">
                <div className="overflow-hidden aspect-[4/3] relative">
                  <img 
                    src={`https://picsum.photos/seed/${s.slug}/800/600`} 
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-10 md:p-12 lg:p-16 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-4xl font-bold text-brand-950 mb-6 tracking-tighter leading-tight">{s.title}</h3>
                  <p className="text-slate-500 mb-10 flex-grow leading-relaxed font-light text-lg md:text-xl avenir-minimal">{s.summary}</p>
                  <Link 
                    to={`/servicios/${s.slug}`}
                    className="inline-flex items-center text-blue-600 font-black uppercase tracking-luxury text-[10px] md:text-[11px] hover:gap-3 transition-all group/link"
                  >
                    Explorar Tratamiento <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Final CTA for Services */}
      <Section className="bg-brand-950 text-white py-24 md:py-40">
        <Container className="text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-bold mb-10 md:mb-16 tracking-tighter leading-none">¿No sabes qué tratamiento necesitas?</h2>
            <p className="text-slate-400 text-lg md:text-2xl font-light avenir-minimal mb-12 md:mb-20">No te preocupes. Lo primero que hacemos es escucharte y ver qué te pasa para recomendarte lo mejor para tu caso.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button href={SITE_DATA.contact.whatsapp} variant="secondary" className="h-20 md:h-28 px-16 text-base">
                Hablar por WhatsApp
              </Button>
              <Button href="/contacto" variant="outline" className="h-20 md:h-28 px-16 text-base border-white/20 text-white hover:bg-white hover:text-brand-950">
                Contactar con nosotros
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Services;
