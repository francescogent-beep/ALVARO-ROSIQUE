
import React from 'react';
import SEO from '../components/SEO';
import { Section, Container, H1, H2, Text, Button, Grid, Card, Badge, Breadcrumbs } from '../components/UI';
import { SITE_DATA } from '../data';
import { Award, Target, Heart, GraduationCap, Microscope, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="Sobre Mí" 
        description="Conoce la trayectoria profesional de Álvaro Rosique. Especialista en fisioterapia y osteopatía avanzada con amplia experiencia clínica en Cartagena." 
      />
      
      <Breadcrumbs items={[{ name: 'Sobre Mí' }]} />

      {/* Hero Section */}
      <Section className="bg-white pt-16 md:pt-32 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 -z-10"></div>
        
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 md:gap-32 lg:gap-40 items-center">
            <div className="relative z-10 animate-in fade-in slide-in-from-left duration-1000">
              <Badge>Sobre Mí</Badge>
              <H1 className="mb-8 md:mb-10 tracking-tighter leading-tight lg:leading-[1.1]">Pasión por <span className="text-emerald-600 italic">cuidarte</span>.</H1>
              <div className="space-y-6 md:space-y-8 mb-10 md:mb-14">
                <Text className="text-xl md:text-2xl lg:text-2xl leading-snug text-brand-950 font-medium tracking-tight">
                  Soy <span className="font-bold text-emerald-600">Álvaro Rosique</span>, y mi objetivo es que te sientas bien en tu propio cuerpo.
                </Text>
                <Text className="text-lg md:text-xl lg:text-xl text-slate-500 leading-relaxed avenir-minimal">
                  Llevo años trabajando en Cartagena ayudando a personas como tú a superar sus dolores. No solo trato la lesión, busco que tu cuerpo recupere su fuerza natural con técnicas suaves y seguras.
                </Text>
              </div>
              <div className="flex flex-wrap gap-6 relative z-30">
                <Button href={SITE_DATA.contact.whatsapp} variant="primary" className="h-16 md:h-20 min-w-[200px] shadow-2xl hover:scale-105 transition-transform">
                  Agendar Consulta
                </Button>
                <Button href="#pilares" variant="outline" className="h-16 md:h-20 min-w-[200px] border-brand-950/10 text-brand-950 hover:bg-brand-50">
                  Nuestra Filosofía
                </Button>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-1000">
              <div className="rounded-[4rem] md:rounded-[8rem] overflow-hidden border border-slate-100 shadow-3xl relative z-10 aspect-[4/5]">
                <img 
                  src="https://i.imgur.com/AHQPsiD.png" 
                  alt="Álvaro Rosique - Fisioterapeuta y Osteópata" 
                  className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000 scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 bg-brand-950 text-white p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-3xl hidden md:block z-20 border border-white/5">
                <div className="text-5xl md:text-8xl font-black mb-3 tracking-tighter text-emerald-400">+15</div>
                <div className="text-[11px] md:text-[12px] font-black uppercase tracking-luxury opacity-60">Años de Experiencia Clínica</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Specialized Values Grid */}
      <Section className="bg-slate-50/50" id="pilares">
        <Container>
          <div className="text-center mb-16 md:mb-24">
            <Badge>Cómo trabajamos</Badge>
            <H2>Lo que nos hace diferentes.</H2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto italic font-light">
              "Buscamos que recuperes tu salud, no solo que el dolor desaparezca un rato."
            </p>
          </div>
          <Grid cols={3}>
            {[
              { 
                icon: Microscope, 
                title: "Tratamiento real", 
                text: "No damos palos de ciego. Hacemos pruebas sencillas para saber exactamente qué te pasa antes de empezar a tratarte. Nos basamos en lo que funciona de verdad." 
              },
              { 
                icon: ShieldCheck, 
                title: "Técnicas seguras", 
                text: "Usamos técnicas suaves y seguras, adaptadas a tu edad y a cómo te sientas. Tu seguridad y comodidad son lo más importante para nosotros." 
              },
              { 
                icon: Heart, 
                title: "Cuidado total", 
                text: "Entendemos que el estrés o el día a día influyen en tu dolor. Por eso te tratamos de forma completa, mirando más allá de la zona que te duele." 
              }
            ].map((v, i) => (
              <Card key={i} className="group hover:-translate-y-2 transition-all duration-700 hover:shadow-2xl bg-white border-none shadow-sm">
                <div className="w-16 h-16 bg-emerald-600/10 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 mx-auto md:mx-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                  <v.icon size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-950 mb-6 tracking-tight">{v.title}</h3>
                <Text className="text-base md:text-lg opacity-80">{v.text}</Text>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Professional Journey (Timeline style) */}
      <Section className="bg-brand-950 text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <Badge className="bg-white/10 text-white border-white/20">Mi camino</Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10 tracking-tighter">Mi formación y experiencia.</h2>
              <p className="text-slate-400 text-lg md:text-xl lg:text-xl font-light avenir-minimal">Siempre estoy aprendiendo nuevas formas de cuidar a mis pacientes en Cartagena. Aquí tienes un resumen de mi trayectoria.</p>
            </div>
            
            <div className="space-y-16 md:space-y-24 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-[1px] before:bg-white/10 before:-translate-x-1/2 hidden md:block">
              {[
                { 
                  year: "2010", 
                  title: "Fisioterapeuta", 
                  school: "Me gradué en Fisioterapia por la Universidad de Murcia. Empecé a trabajar ayudando a deportistas y personas con lesiones de todo tipo.",
                  align: "left"
                },
                { 
                  year: "2015", 
                  title: "Osteopatía", 
                  school: "Empecé mi formación de 5 años en Osteopatía en Madrid. Aprendí a ver el cuerpo como un todo y a tratar problemas más profundos.",
                  align: "right"
                },
                { 
                  year: "2020", 
                  title: "Mi propia clínica", 
                  school: "Abrí mi centro en el centro de Cartagena para ofrecer un trato más personal y directo a mis pacientes.",
                  align: "left"
                },
                { 
                  year: "2024", 
                  title: "Siempre aprendiendo", 
                  school: "Sigo formándome cada año para conocer las mejores técnicas contra el dolor y poder ayudarte mejor.",
                  align: "right"
                }
              ].map((c, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center justify-between w-full mb-8 relative ${c.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-5/12"></div>
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-brand-950 -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
                  <div className={`w-full md:w-5/12 ${c.align === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="text-emerald-400 font-black text-2xl mb-2 tracking-tighter">{c.year}</div>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">{c.title}</h4>
                    <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed avenir-minimal">{c.school}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View Timeline */}
            <div className="space-y-12 md:hidden">
              {[
                { year: "2010", title: "Universidad de Murcia", desc: "Graduado en Fisioterapia e inicio de carrera clínica profesional." },
                { year: "2015", title: "EOM Madrid", desc: "Máster de especialización en Osteopatía Estructural y Craneal." },
                { year: "2020", title: "Cartagena", desc: "Apertura del centro especializado con tecnología y rigor clínico." }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-emerald-500 pl-6 pb-4">
                  <div className="text-emerald-400 font-black text-xl mb-1">{item.year}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Philosophy Deep Dive Section */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <Badge>Mi Filosofía</Badge>
                <H2>Tu bienestar es lo primero.</H2>
                <div className="space-y-6">
                  <Text className="!text-slate-800 font-medium">
                    Cada persona es diferente, por eso cada tratamiento también lo es. Me tomo el tiempo necesario para entender qué te pasa y cómo podemos solucionarlo juntos.
                  </Text>
                  <Text className="text-lg md:text-xl">
                    Uso la <span className="text-brand-950 font-bold">fisioterapia</span> para tratar tus músculos y articulaciones, y la <span className="text-brand-950 font-bold">osteopatía</span> para equilibrar todo tu cuerpo. Así conseguimos que el alivio sea real y duradero.
                  </Text>
                  <Text className="text-lg md:text-xl">
                    Si llevas tiempo con molestias que no se van, mi compromiso es darte una respuesta honesta y un tratamiento de calidad aquí en Cartagena. No busco parches, busco que vuelvas a sentirte bien.
                  </Text>
                </div>
             </div>
             <div className="bg-brand-50 rounded-[4rem] p-12 md:p-20 relative overflow-hidden group border border-brand-100">
                <Target className="absolute -top-12 -right-12 w-64 h-64 text-brand-950/5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                <QuoteIcon className="mb-8" />
                <blockquote className="text-2xl md:text-4xl font-semibold text-brand-950 leading-tight tracking-tight mb-10 italic">
                  "El mejor tratamiento no es el que fuerza tu cuerpo, sino el que le ayuda a recuperarse de forma natural."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="h-[2px] w-12 bg-emerald-600"></div>
                  <cite className="font-black uppercase tracking-luxury text-[10px] md:text-[11px] text-brand-950 not-italic">Álvaro Rosique</cite>
                </div>
             </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-brand-50 py-20 md:py-32 border-t border-brand-100">
        <Container className="text-center">
          <div className="max-w-4xl mx-auto">
            <GraduationCap className="mx-auto text-emerald-600 mb-8 w-12 h-12 md:w-20 md:h-20" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10 tracking-tighter leading-[1.1] text-brand-950">
              ¿Quieres volver a moverte <span className="text-emerald-600">sin dolor</span>?
            </h2>
            <Text className="text-slate-600 mb-10 md:mb-16 max-w-2xl mx-auto text-lg md:text-xl lg:text-xl leading-relaxed">
              Permíteme ayudarte a recuperar tu bienestar. Mi compromiso es ofrecerte el mejor trato posible en Cartagena, con un plan pensado solo para ti.
            </Text>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button href={SITE_DATA.contact.whatsapp} variant="primary" className="h-16 md:h-20 text-base px-12 shadow-2xl">
                Pedir mi primera cita
              </Button>
              <Button href="/servicios" variant="outline" className="h-16 md:h-20 text-base px-12 border-2 bg-white hover:bg-brand-950">
                Ver tratamientos
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

const QuoteIcon = ({ className = "" }) => (
  <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M11.6667 0C5.22667 0 0 5.22667 0 11.6667V28.3333H15V13.3333H6.66667C6.66667 8.91333 10.2467 5.33333 14.6667 5.33333L11.6667 0ZM36.6667 0C30.2267 0 25 5.22667 25 11.6667V28.3333H40V13.3333H31.6667C31.6667 8.91333 35.2467 5.33333 39.6667 5.33333L36.6667 0Z" fill="#10B981" fillOpacity="0.2"/>
  </svg>
);

export default About;
