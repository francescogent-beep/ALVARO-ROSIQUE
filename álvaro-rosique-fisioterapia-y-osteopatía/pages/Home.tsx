import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { Section, Container, H1, Text, Button, Grid, Badge } from '../components/UI';
import { FaqPreviewSection } from '../components/Layout';
import { SITE_DATA } from '../data';
import { Star, ArrowRight, ShieldCheck, Zap, MessageCircle, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = SITE_DATA.reviews;
  
  // Responsive visible count
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setVisibleCount(1);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative group">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
        >
          {reviews.map((r, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 px-4" 
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <div className="w-6 h-6 bg-white border border-slate-100 rounded shadow-sm flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>
                
                <p className="text-slate-700 font-light leading-relaxed mb-8 flex-grow italic text-base md:text-lg">
                  "{r.text}"
                </p>
                
                <div className="flex items-center space-x-4 pt-6 border-t border-slate-50">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-950 text-white rounded-full flex items-center justify-center font-black text-sm md:text-base">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-brand-950 text-sm md:text-base">{r.name}</p>
                    <p className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-widest font-bold">Paciente verificado</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg text-brand-950 hover:bg-brand-950 hover:text-white transition-all z-10 border border-slate-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg text-brand-950 hover:bg-brand-950 hover:text-white transition-all z-10 border border-slate-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <SEO />
      
      {/* 1. HERO */}
      <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-start overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/XMB80cs.png" 
            alt="Centro Osteopatía Velázquez" 
            className="w-full h-full object-cover grayscale-[0.1] opacity-90 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-60% to-white/70 md:via-white/90 md:via-30% md:to-transparent"></div>
          <div className="absolute inset-0 bg-white/10 md:bg-white/5 backdrop-blur-[0.5px] md:backdrop-blur-[0.3px]"></div>
        </div>

        <Container className="relative z-10 pt-12 md:pt-20 lg:pt-28 xl:pt-32 pb-16 md:pb-24 lg:pb-32 w-full">
          <div className="animate-in fade-in slide-in-from-left duration-1000 w-full flex flex-col items-start">
            <div className="text-left lg:max-w-[75%] xl:max-w-[65%] lg:pl-[8%] xl:pl-[12%] w-full">
              <div className="flex items-center justify-center md:justify-start w-full mb-8 md:mb-12 lg:mb-16">
                <div className="flex items-center">
                  <div className="hidden md:block h-[1px] bg-brand-950/20 w-16 md:w-32 lg:w-48 shrink-0 mr-4 md:mr-8"></div>
                  <span className="text-[9px] md:text-[11px] font-black uppercase tracking-luxury text-brand-950/60 whitespace-nowrap text-center md:text-left">
                    Osteopatía · Quiromasaje · Acupuntura
                  </span>
                </div>
              </div>

              <H1 className="mb-6 md:mb-10 lg:mb-14 !text-brand-950 leading-[0.9] tracking-tighter drop-shadow-sm">
                La ciencia del <span className="text-teal-600">movimiento</span>.
              </H1>
              <Text className="mb-10 md:mb-16 lg:mb-20 max-w-2xl !text-brand-950 text-xl md:text-3xl 2xl:text-4xl font-medium leading-[1.4] tracking-tight drop-shadow-sm">
                Restauramos el equilibrio de tu organismo mediante osteopatía clínica avanzada, con un enfoque integral para el dolor persistente, las disfunciones del movimiento y el alto rendimiento físico.
              </Text>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-start w-full mt-6 md:mt-12">
                <Button href={SITE_DATA.contact.whatsapp} variant="primary" className="h-14 md:h-20 px-12 md:px-16 text-xs md:text-sm shadow-2xl">
                  Agendar Consulta
                </Button>
                <Button href="#metodo" variant="outline" className="group h-14 md:h-20 text-xs md:text-sm border-brand-950/20 text-brand-950 hover:bg-brand-50">
                  Nuestro Método <ArrowRight className="ml-4 md:ml-5 group-hover:translate-x-3 transition-transform duration-700" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. SYMPTOMS - UPDATED COPY */}
      <Section className="bg-brand-950 text-white">
        <Container>
          <div className="text-center max-w-5xl mx-auto mb-16 md:mb-32">
            <Badge className="bg-white/5 text-white border-white/10">Tratamiento Integral</Badge>
            <h2 className="text-4xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold mb-8 md:mb-12 tracking-tighter">El origen real del síntoma.</h2>
            <p className="text-slate-400 text-lg md:text-2xl 2xl:text-4xl font-light avenir-minimal max-w-3xl mx-auto">No tratamos solo la zona de dolor. Analizamos la biomecánica global para una solución definitiva.</p>
          </div>
          <Grid cols={3}>
            {[
              {
                title: "Dolor Crónico",
                desc: "Dolor persistente en espalda o cuello que limita tu mobility y afecta tu calidad de vida diaria.",
                solution: "Liberación Estructural"
              },
              {
                title: "Migrañas y Estrés",
                desc: "Tensión acumulada que se manifiesta en cefaleas, alteraciones del sueño y agotamiento mental.",
                solution: "Osteopatía Craneal"
              },
              {
                title: "Limitación Física",
                desc: "Rigidez articular o lesiones deportivas que no recuperan su función correctamente.",
                solution: "Recuperación Funcional"
              }
            ].map((p, i) => (
              <div key={i} className="p-10 md:p-16 border border-white/5 rounded-[3rem] md:rounded-[5rem] bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-1000 group flex flex-col h-full">
                <div className="mb-8 md:mb-12 p-4 md:p-6 bg-teal-900/50 rounded-2xl md:rounded-[2rem] w-fit">
                  <Zap className="text-teal-400 w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl md:text-4xl 2xl:text-5xl font-semibold mb-6 md:mb-10 tracking-tighter">{p.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed mb-10 md:mb-16 flex-grow text-base md:text-xl 2xl:text-2xl avenir-minimal">{p.desc}</p>
                <div className="pt-8 md:pt-10 border-t border-white/10 text-teal-400 font-black uppercase text-[10px] md:text-[11px] tracking-luxury">
                  Abordaje: {p.solution}
                </div>
              </div>
            ))}
          </Grid>
          {/* Bridge Line - Made pure white and more visible */}
          <p className="mt-16 md:mt-24 text-center text-white text-[10px] md:text-[11px] font-black uppercase tracking-luxury">
            En la mayoría de los casos, el síntoma no es el problema, sino la causa que lo mantiene.
          </p>
        </Container>
      </Section>

      {/* 3. METHODOLOGY */}
      <Section id="metodo">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 lg:gap-40 items-center">
            <div className="relative group order-2 lg:order-1">
               <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" className="rounded-[3rem] md:rounded-[6rem] border border-brand-50 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" alt="Metodología Osteopatía" />
               <div className="absolute -bottom-12 -right-12 md:-bottom-24 md:-right-24 bg-brand-950 text-white p-10 md:p-20 rounded-[2rem] md:rounded-[4rem] hidden xl:block shadow-3xl">
                  <ShieldCheck className="mb-4 md:mb-8 text-teal-400 w-10 h-10 md:w-14 md:h-14" />
                  <p className="font-black uppercase tracking-luxury text-[10px] md:text-[11px]">Rigurosa Praxis</p>
               </div>
            </div>
            <div className="lg:pl-12 order-1 lg:order-2">
              <Badge>Protocolo Clínico</Badge>
              <h2 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-semibold tracking-tighter leading-[1.1] text-brand-950 mb-8 md:mb-12">Recuperación estructural.</h2>
              <Text className="mb-12 md:mb-20 text-lg md:text-2xl 2xl:text-4xl">
                Nuestro protocolo de tres fases garantiza que no solo recuperes la movilidad, sino que prevengas recaídas futures.
              </Text>
              <div className="space-y-12 md:space-y-20">
                {SITE_DATA.methodology.map((m, i) => (
                  <div key={i} className="flex space-x-8 md:space-x-16 items-start">
                    <span className="text-5xl md:text-7xl font-black text-brand-50 leading-none">{m.step}</span>
                    <div>
                      <h4 className="text-xl md:text-3xl 2xl:text-4xl font-bold text-brand-950 mb-3 md:mb-6 tracking-tight">{m.title}</h4>
                      <p className="text-slate-500 font-light leading-relaxed text-base md:text-xl 2xl:text-2xl avenir-minimal">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. CALL TO ACTION */}
      <Section className="bg-brand-50">
        <Container>
          <div className="bg-white rounded-[3rem] md:rounded-[6rem] p-12 md:p-24 lg:p-40 border border-brand-200/50 grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-semibold tracking-tighter leading-[1.1] text-brand-950 mb-8 md:mb-12">¿Hablamos de tu salud?</h2>
              <Text className="mb-10 md:mb-16 text-xl md:text-3xl">Explícanos tu caso de forma confidencial y te asesoraremos sobre el tratamiento más adecuado.</Text>
              <Button href={SITE_DATA.contact.whatsapp} variant="primary" className="h-20 md:h-28 text-xs md:text-sm">
                <MessageCircle className="mr-4 md:mr-5" /> Chat de Diagnóstico
              </Button>
            </div>
            <div className="space-y-8 md:space-y-12">
              {["Agenda Preferente", "Tratamiento Personalizado", "Evaluación Postural"].map((item, i) => (
                <div key={i} className="flex items-center space-x-6 md:space-x-8 group">
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 md:border-4 border-teal-600 group-hover:bg-teal-600 transition-all duration-500"></div>
                  <span className="font-black text-brand-950 uppercase tracking-luxury text-xs md:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. REVIEWS CAROUSEL */}
      <Section className="bg-slate-50/30 overflow-hidden">
        <Container>
          <div className="flex flex-col items-center mb-16 md:mb-24">
            <div className="inline-flex flex-col items-center bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm mb-12">
              <div className="flex items-center space-x-3 mb-2">
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-2xl md:text-3xl font-black text-brand-950">4.6</span>
              </div>
              <div className="flex text-yellow-400 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest">Reseñas en Google Maps</p>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-semibold tracking-tighter leading-[1.1] text-brand-950 text-center lowercase !mb-0">Lo que dicen nuestros pacientes.</h2>
          </div>

          <ReviewCarousel />
          
          <div className="flex justify-center mt-12 md:mt-20">
            <Button href="/resenas" variant="secondary" className="group h-16 md:h-20">
              Ver todas las opiniones <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={16} />
            </Button>
          </div>
        </Container>
      </Section>

      {/* FAQ Preview Section positioned after Reviews */}
      <FaqPreviewSection />

      {/* 6. BOOKING */}
      <Section className="bg-brand-50/50 pb-32 md:pb-48 lg:pb-60">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 lg:gap-40 items-start">
            <div>
              <Badge>Reserva de Cita</Badge>
              <h2 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-semibold tracking-tighter leading-[1.1] text-brand-950 mb-8 md:mb-12">Invierte en bienestar.</h2>
              <Text className="mb-12 md:mb-20 text-xl md:text-3xl avenir-minimal">Centro Velázquez se sitúa en el corazón de Cartagena, ofreciendo un entorno de calma y rigor profesional.</Text>
              
              <div className="space-y-8 md:space-y-12 mb-16 md:mb-24">
                <div className="flex items-center space-x-6 md:space-x-10 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-[1.5rem] flex items-center justify-center border border-brand-100 shadow-sm group-hover:border-teal-600 transition-colors duration-500">
                    <Phone className="text-teal-600 w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <a href={`tel:${SITE_DATA.contact.phone}`} className="text-xl md:text-3xl font-bold text-brand-950 hover:text-teal-600 transition-colors">{SITE_DATA.contact.phone}</a>
                </div>

                <div className="flex items-center space-x-6 md:space-x-10 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-[1.5rem] flex items-center justify-center border border-brand-100 shadow-sm group-hover:border-teal-600 transition-colors duration-500">
                    <Mail className="text-teal-600 w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <a href={`mailto:${SITE_DATA.contact.email}`} className="text-xl md:text-3xl font-bold text-brand-950 hover:text-teal-600 transition-colors tracking-tight">{SITE_DATA.contact.email}</a>
                </div>

                <div className="flex items-center space-x-6 md:space-x-10 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-[1.5rem] flex items-center justify-center border border-brand-100 shadow-sm group-hover:border-teal-600 transition-colors duration-500">
                    <MapPin className="text-teal-600 w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div className="text-xl md:text-3xl font-bold text-brand-950 uppercase tracking-tighter leading-none">
                    {SITE_DATA.contact.address}<br/>
                    <span className="text-teal-600/70 text-sm md:text-lg">{SITE_DATA.contact.postalCode} {SITE_DATA.contact.city}</span>
                  </div>
                </div>
              </div>

              <Button href={SITE_DATA.contact.whatsapp} variant="primary" className="w-full h-24 md:h-32 text-base md:text-lg">
                Reservar Mi Sesión
              </Button>
            </div>
            
            <div className="rounded-[3rem] md:rounded-[6rem] overflow-hidden h-[400px] md:h-[600px] lg:h-[800px] border border-brand-50 group shadow-2xl relative sticky top-32">
              <iframe 
                title="Google Maps Cartagena"
                src={SITE_DATA.contact.googleMapsEmbed}
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
                className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Home;