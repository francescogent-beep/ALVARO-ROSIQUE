import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
                
                <p className="text-slate-700 font-light leading-relaxed mb-6 flex-grow italic text-base">
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
      <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/XMB80cs.png" 
            alt="Álvaro Rosique Fisioterapia y Osteopatía" 
            className="w-full h-full object-cover grayscale-[0.1] opacity-90 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/95 to-white"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <Container className="relative z-10 pt-20 pb-24 lg:pt-32 lg:pb-40 w-full">
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 w-full flex flex-col items-center lg:items-start">
            <div className="text-center lg:text-left max-w-5xl lg:mx-0 w-full">
              <div className="flex items-center justify-center lg:justify-start w-full mb-10 md:mb-16">
                <div className="flex items-center">
                  <div className="hidden md:block h-[1px] bg-brand-950/20 w-24 shrink-0 mr-6"></div>
                  <span className="text-[13px] h-[12.5px] font-black uppercase tracking-luxury text-brand-950/60 whitespace-nowrap text-center lg:text-left">
                    Fisioterapia · Osteopatía · Readaptación
                  </span>
                  <div className="hidden md:block h-[1px] bg-brand-950/20 w-24 shrink-0 ml-6"></div>
                </div>
              </div>
 
              <H1 className="mb-8 md:mb-10 lg:mb-12 !text-brand-950 leading-[1.1] lg:leading-[1] tracking-tighter drop-shadow-sm py-[10px] text-center lg:text-left">
                Tu salud en<br className="hidden lg:block" />  <span className="text-emerald-600 italic">buenas manos</span>.
              </H1>
              <Text className="mb-10 md:mb-16 max-w-3xl mx-auto lg:mx-0 !text-brand-950 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-tight drop-shadow-sm text-center lg:text-left opacity-90">
                Soy Álvaro Rosique, fisioterapeuta y osteópata en Cartagena. Te ayudo a aliviar el dolor y recuperar tu bienestar con un tratamiento personalizado y cercano.
              </Text>
 
              <div className="flex flex-col sm:flex-row gap-6 md:gap-10 justify-center w-full mt-8 md:mt-16">
                <Button href={SITE_DATA.contact.whatsapp} variant="primary" className="h-16 md:h-24 px-16 md:px-20 text-sm md:text-base shadow-2xl hover:scale-105 transition-transform">
                  Agendar Consulta
                </Button>
                <Button href="#metodo" variant="outline" className="group h-16 md:h-24 text-sm md:text-base border-brand-950/20 text-brand-950 hover:bg-brand-50">
                  Nuestro Método <ArrowRight className="ml-4 md:ml-6 group-hover:translate-x-3 transition-transform duration-700" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. SYMPTOMS - UPDATED COPY */}
      <Section className="bg-brand-950 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-[150px]"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto mb-16 md:mb-24">
            <Badge className="bg-white/5 text-white border-white/10">Cómo te ayudamos</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 tracking-tighter leading-tight">¿Qué te duele hoy?</h2>
            <p className="text-slate-400 text-lg md:text-xl lg:text-xl font-light avenir-minimal max-w-3xl mx-auto leading-relaxed">No solo tratamos el dolor, buscamos por qué aparece. Te ayudamos a entender tu cuerpo para que te sientas bien de verdad.</p>
          </div>
          <Grid cols={3}>
            {SITE_DATA.painPoints.map((p, i) => (
              <div key={i} className="p-8 md:p-10 lg:p-12 border border-white/5 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-1000 group flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Zap size={80} />
                </div>
                <div className="mb-8 md:mb-10 p-5 md:p-6 bg-emerald-900/40 rounded-2xl md:rounded-[2rem] w-fit border border-emerald-500/20">
                  <Zap className="text-emerald-400 w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 tracking-tighter">{p.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed mb-8 md:mb-12 flex-grow text-base md:text-lg avenir-minimal">{p.desc}</p>
                <div className="pt-6 md:pt-8 border-t border-white/10 flex items-center justify-between">
                  <span className="text-emerald-400 font-black uppercase text-[10px] md:text-[11px] tracking-luxury">
                    Objetivo: {p.solution}
                  </span>
                  <ArrowRight size={16} className="text-white/20 group-hover:text-emerald-400 group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            ))}
          </Grid>
          <div className="mt-20 md:mt-32 flex flex-col items-center">
            <div className="h-20 w-[1px] bg-gradient-to-b from-transparent to-emerald-500 mb-10"></div>
            <p className="text-center text-white text-[11px] md:text-[12px] font-black uppercase tracking-luxury max-w-xl opacity-80">
              Casi siempre, donde duele no es donde está el problema real. Nosotros lo encontramos por ti.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. METHODOLOGY */}
      <Section id="metodo">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 lg:gap-40 items-center">
            <div className="relative group order-2 lg:order-1">
               <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" className="rounded-[3rem] md:rounded-[6rem] border border-brand-50 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" alt="Metodología Osteopatía" />
               <div className="absolute -bottom-12 -right-12 md:-bottom-24 md:-right-24 bg-brand-950 text-white p-10 md:p-20 rounded-[2rem] md:rounded-[4rem] hidden xl:block shadow-3xl">
                  <ShieldCheck className="mb-4 md:mb-8 text-emerald-400 w-10 h-10 md:w-14 md:h-14" />
                  <p className="font-black uppercase tracking-luxury text-[10px] md:text-[11px]">Rigurosa Praxis</p>
               </div>
            </div>
            <div className="lg:pl-12 order-1 lg:order-2">
              <Badge>Nuestro Método</Badge>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tighter leading-tight text-brand-950 mb-8 md:mb-10">Cómo trabajamos.</h2>
              <Text className="mb-10 md:mb-16 text-lg md:text-xl lg:text-xl">
                Nuestro método es sencillo y efectivo: te escuchamos, te tratamos y te enseñamos a cuidarte para que el dolor no vuelva.
              </Text>
              <div className="space-y-8 md:space-y-12">
                {SITE_DATA.methodology.map((m, i) => (
                  <div key={i} className="flex space-x-6 md:space-x-10 items-start">
                    <span className="text-4xl md:text-5xl font-black text-brand-50 leading-none">{m.step}</span>
                    <div>
                      <h4 className="text-xl md:text-2xl lg:text-2xl font-bold text-brand-950 mb-2 md:mb-3 tracking-tight">{m.title}</h4>
                      <p className="text-slate-500 font-light leading-relaxed text-base md:text-lg lg:text-lg avenir-minimal">{m.desc}</p>
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
          <div className="bg-white rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 lg:p-32 border border-brand-200/50 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-brand-950 mb-8 md:mb-12">¿Hablamos de tu salud?</h2>
              <Text className="mb-10 md:mb-16 text-lg md:text-xl lg:text-2xl">Explícanos tu caso de forma confidencial y te asesoraremos sobre el tratamiento más adecuado.</Text>
              <Button href={SITE_DATA.contact.whatsapp} variant="primary" className="h-16 md:h-20 text-xs md:text-sm">
                <MessageCircle className="mr-4 md:mr-5" /> Chat de Diagnóstico
              </Button>
            </div>
            <div className="space-y-8 md:space-y-12">
              {["Agenda Preferente", "Tratamiento Personalizado", "Evaluación Postural"].map((item, i) => (
                <div key={i} className="flex items-center space-x-6 md:space-x-8 group">
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 md:border-4 border-emerald-600 group-hover:bg-emerald-600 transition-all duration-500"></div>
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
                <span className="text-2xl md:text-3xl font-black text-brand-950">4.5</span>
              </div>
              <div className="flex text-yellow-400 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill={i <= 4 ? "currentColor" : "none"} stroke="currentColor" />)}
              </div>
              <p className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest">18 Reseñas en Google Maps</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tighter leading-[1.1] text-brand-950 text-center lowercase !mb-0">Lo que dicen nuestros pacientes.</h2>
          </div>

          <ReviewCarousel />
          
          <div className="flex justify-center mt-12 md:mt-20">
            <Button href="/resenas" variant="secondary" className="group h-16 md:h-20">
              Ver todas las opiniones <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={16} />
            </Button>
          </div>
        </Container>
      </Section>

      {/* BLOG PREVIEW */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <Badge>Consejos de Salud</Badge>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-tight text-brand-950">Nuestro Blog.</h2>
            </div>
            <Button href="/blog" variant="ghost" className="group">
              Ir al blog <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={16} />
            </Button>
          </div>

          <Grid cols={2}>
            {SITE_DATA.blog.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="group block bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-700"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={`https://picsum.photos/seed/${post.id}/800/450`} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-luxury text-emerald-600 shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <span className="text-[10px] font-black uppercase tracking-luxury text-slate-400 mb-4 block">
                    {post.date}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-950 mb-6 group-hover:text-emerald-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed text-base md:text-lg avenir-minimal line-clamp-2 mb-8">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-emerald-600 font-black uppercase tracking-luxury text-[10px]">
                    <span>Leer artículo</span>
                    <ChevronRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* FAQ Preview Section positioned after Blog */}
      <FaqPreviewSection />

      {/* 6. BOOKING */}
      <Section className="bg-brand-50/50 pb-32 md:pb-48 lg:pb-60">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 lg:gap-40 items-start">
            <div>
              <Badge>Pide tu cita</Badge>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tighter leading-tight text-brand-950 mb-8 md:mb-10">Cuida de ti.</h2>
              <Text className="mb-10 md:mb-16 text-lg md:text-xl lg:text-xl avenir-minimal">La clínica de Álvaro Rosique está en pleno centro de Cartagena. Un espacio tranquilo donde lo más importante eres tú.</Text>
              
              <div className="space-y-6 md:space-y-8 mb-10 md:mb-16">
                <div className="flex items-center space-x-6 md:space-x-8 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl md:rounded-[1.25rem] flex items-center justify-center border border-brand-100 shadow-sm group-hover:border-emerald-600 transition-colors duration-500">
                    <Phone className="text-emerald-600 w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <a href={`tel:${SITE_DATA.contact.phone}`} className="text-xl md:text-2xl font-bold text-brand-950 hover:text-emerald-600 transition-colors">{SITE_DATA.contact.phone}</a>
                </div>

                <div className="flex items-center space-x-6 md:space-x-8 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl md:rounded-[1.25rem] flex items-center justify-center border border-brand-100 shadow-sm group-hover:border-emerald-600 transition-colors duration-500">
                    <Mail className="text-emerald-600 w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <a href={`mailto:${SITE_DATA.contact.email}`} className="text-xl md:text-2xl font-bold text-brand-950 hover:text-emerald-600 transition-colors tracking-tight">{SITE_DATA.contact.email}</a>
                </div>

                <div className="flex items-center space-x-6 md:space-x-8 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl md:rounded-[1.25rem] flex items-center justify-center border border-brand-100 shadow-sm group-hover:border-emerald-600 transition-colors duration-500">
                    <MapPin className="text-emerald-600 w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-brand-950 uppercase tracking-tighter leading-none">
                    {SITE_DATA.contact.address}<br/>
                    <span className="text-emerald-600/70 text-sm md:text-base">{SITE_DATA.contact.postalCode} {SITE_DATA.contact.city}</span>
                  </div>
                </div>
              </div>

              <Button href={SITE_DATA.contact.whatsapp} variant="primary" className="w-full h-20 md:h-24 text-base md:text-lg">
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