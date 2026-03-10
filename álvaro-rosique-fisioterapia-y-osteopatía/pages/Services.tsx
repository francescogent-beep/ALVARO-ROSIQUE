
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Section, Container, H1, Text, Grid, Card, Badge, Breadcrumbs } from '../components/UI';
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

      <Section className="bg-slate-50 pt-10 md:pt-16 lg:pt-20">
        <Container>
          <div className="max-w-3xl mb-12 md:mb-16">
            <Badge>Especialidades</Badge>
            <H1 className="mb-6">Servicios Profesionales</H1>
            <Text>Utilizamos un conjunto de técnicas manuales seguras y eficaces adaptadas a las necesidades específicas de cada paciente.</Text>
          </div>

          <Grid cols={3}>
            {SITE_DATA.services.map((s) => (
              <Card key={s.slug} className="flex flex-col group p-6 md:p-8 lg:p-10">
                <div className="overflow-hidden rounded-2xl mb-6 aspect-video">
                  <img 
                    src={`https://picsum.photos/seed/${s.slug}/500/300`} 
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{s.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed font-light">{s.summary}</p>
                <Link 
                  to={`/servicios/${s.slug}`}
                  className="inline-flex items-center text-teal-600 font-bold hover:gap-2 transition-all group/link"
                >
                  Saber más <ArrowRight size={18} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default Services;
