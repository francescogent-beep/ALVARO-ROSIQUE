
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

      <Section className="bg-slate-50 pt-12 md:pt-20 lg:pt-24">
        <Container>
          <div className="max-w-4xl mb-12 md:mb-20">
            <Badge>Nuestros Servicios</Badge>
            <H1 className="mb-6 md:mb-8 tracking-tighter leading-tight">Tratamientos para <span className="text-emerald-600">sentirte bien</span>.</H1>
            <Text className="text-lg md:text-xl lg:text-xl">En nuestra clínica de Cartagena te ayudamos a superar tus dolores con fisioterapia y osteopatía adaptada a ti.</Text>
          </div>

          <Grid cols={3} className="gap-8 md:gap-10 lg:gap-12">
            {SITE_DATA.services.map((s) => (
              <Card key={s.slug} className="flex flex-col group p-0 overflow-hidden border-none shadow-sm hover:shadow-2xl transition-all duration-1000 bg-white rounded-[2rem] md:rounded-[3rem]">
                <div className="overflow-hidden aspect-[4/3] relative">
                  <img 
                    src={`https://picsum.photos/seed/${s.slug}/800/600`} 
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-950 mb-3 tracking-tighter leading-tight">{s.title}</h3>
                  <p className="text-slate-500 mb-6 flex-grow leading-relaxed font-light text-sm md:text-base avenir-minimal">{s.summary}</p>
                  <Link 
                    to={`/servicios/${s.slug}`}
                    className="inline-flex items-center text-emerald-600 font-black uppercase tracking-luxury text-[10px] md:text-[11px] hover:gap-3 transition-all group/link"
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
      <Section className="bg-brand-950 text-white py-20 md:py-32">
        <Container className="text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 tracking-tighter leading-none">¿No sabes qué tratamiento necesitas?</h2>
            <p className="text-slate-400 text-lg md:text-xl lg:text-xl font-light avenir-minimal mb-10 md:mb-16">No te preocupes. Lo primero que hacemos es escucharte y ver qué te pasa para recomendarte lo mejor para tu caso.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button href={SITE_DATA.contact.whatsapp} variant="secondary" className="h-16 md:h-20 px-12 text-base">
                Hablar por WhatsApp
              </Button>
              <Button href="/contacto" variant="outline" className="h-16 md:h-20 px-12 text-base border-white/20 text-white hover:bg-white hover:text-brand-950">
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
