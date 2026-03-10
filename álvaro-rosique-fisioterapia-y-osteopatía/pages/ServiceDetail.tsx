
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { Section, Container, H1, H2, Text, Button, Card, Badge, Breadcrumbs } from '../components/UI';
import { SITE_DATA } from '../data';
import { CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams();
  const service = SITE_DATA.services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/servicios" />;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": SITE_DATA.baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${SITE_DATA.baseUrl}/#/servicios` },
      { "@type": "ListItem", "position": 3, "name": service.title }
    ]
  };

  return (
    <>
      <SEO 
        title={service.title} 
        description={`${service.title} en Cartagena. ${service.summary}`}
        jsonLd={[faqSchema, breadcrumbSchema]}
      />

      <Breadcrumbs items={[
        { name: 'Servicios', path: '/servicios' },
        { name: service.title }
      ]} />

      <Section className="pb-0 pt-10 md:pt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <Badge>Especialidad</Badge>
              <H1 className="mb-6 md:mb-8 text-3xl md:text-5xl lg:text-7xl tracking-tighter">{service.title}</H1>
              <Text className="mb-8 md:mb-10 text-lg md:text-xl xl:text-2xl font-medium text-slate-800">
                {service.description}
              </Text>
              
              <div className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <CheckCircle2 className="text-teal-600 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 font-bold text-sm md:text-base uppercase tracking-wider">{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={SITE_DATA.contact.whatsapp} variant="primary" className="h-16 md:h-20">Reservar Cita</Button>
                <Button href={`tel:${SITE_DATA.contact.phone}`} variant="outline" className="h-16 md:h-20">Llamar Ahora</Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src={`https://picsum.photos/seed/${service.slug}-detail/800/600`} 
                alt={service.title} 
                className="rounded-[2.5rem] md:rounded-[4rem] shadow-2xl w-full aspect-video md:aspect-square object-cover grayscale-[0.2]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-16 md:py-24">
        <Container>
          <div className="bg-brand-50 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-16 lg:p-24 border border-brand-100 text-center">
            <H2 className="mb-6">¿Cómo trabajamos?</H2>
            <Text className="mb-0 max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl">{service.process}</Text>
          </div>
        </Container>
      </Section>

      {service.faqs.length > 0 && (
        <Section className="bg-white py-16 md:py-24">
          <Container>
            <div className="max-w-4xl mx-auto">
              <H2 className="text-center mb-12 md:mb-20">Preguntas Frecuentes</H2>
              <div className="grid gap-6 md:gap-8">
                {service.faqs.map((f, i) => (
                  <Card key={i} className="bg-slate-50/50 border-none p-8 md:p-12 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start space-x-4 md:space-x-6">
                      <HelpCircle className="text-teal-600 shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="font-black text-brand-950 text-lg md:text-xl mb-4 tracking-tight">{f.q}</h4>
                        <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed avenir-minimal">{f.a}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      <Section className="bg-slate-50 pt-16 md:pt-24">
        <Container>
          <h3 className="text-xs md:text-sm font-black mb-8 md:mb-12 uppercase tracking-luxury text-slate-400">Explorar Otros Tratamientos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {SITE_DATA.services.filter(s => s.slug !== slug).map(s => (
              <Link 
                key={s.slug} 
                to={`/servicios/${s.slug}`} 
                className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 hover:border-teal-600 hover:text-teal-600 transition-all shadow-sm font-black text-brand-950 text-center uppercase text-[10px] md:text-[11px] tracking-widest"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ServiceDetail;
