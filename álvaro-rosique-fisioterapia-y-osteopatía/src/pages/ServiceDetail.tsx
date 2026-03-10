
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

      <Section className="pb-0 pt-16 md:pt-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 lg:gap-40 items-center">
            <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left duration-1000">
              <Badge>Tratamiento</Badge>
              <H1 className="mb-8 md:mb-12 text-4xl md:text-6xl lg:text-8xl tracking-tighter leading-none">{service.title}</H1>
              <Text className="mb-10 md:mb-16 text-xl md:text-3xl font-medium text-brand-950 leading-snug tracking-tight">
                {service.description}
              </Text>
              
              <div className="space-y-6 md:space-y-10 mb-12 md:mb-20">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-start space-x-6 group">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-brand-950 font-black text-xs md:text-sm uppercase tracking-luxury">{b}</span>
                  </div>
                ))}
              </div>
 
              <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
                <Button href={SITE_DATA.contact.whatsapp} variant="primary" className="h-20 md:h-28 px-16 text-sm shadow-2xl">Pedir mi cita</Button>
                <Button href={`tel:${SITE_DATA.contact.phone}`} variant="outline" className="h-20 md:h-28 px-16 text-sm border-brand-950/10 text-brand-950 hover:bg-brand-50">Preguntar dudas</Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 animate-in fade-in slide-in-from-right duration-1000">
              <div className="rounded-[4rem] md:rounded-[8rem] overflow-hidden shadow-3xl w-full aspect-[4/5] relative border border-slate-100">
                <img 
                  src={`https://picsum.photos/seed/${service.slug}-detail/1200/1500`} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-24 md:py-40">
        <Container>
          <div className="bg-slate-50 rounded-[4rem] md:rounded-[8rem] p-12 md:p-24 lg:p-40 border border-slate-100 text-center relative overflow-hidden">
            <div className="relative z-10">
              <Badge className="bg-white border-slate-200">Cómo lo hacemos</Badge>
              <H2 className="mb-10 md:mb-16 tracking-tighter leading-none">Nuestro plan para ti.</H2>
              <Text className="mb-0 max-w-5xl mx-auto text-xl md:text-3xl lg:text-4xl leading-relaxed avenir-minimal text-slate-600">{service.process}</Text>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
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
                      <HelpCircle className="text-blue-600 shrink-0 mt-1" size={24} />
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
                className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm font-black text-brand-950 text-center uppercase text-[10px] md:text-[11px] tracking-widest"
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
