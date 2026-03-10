
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
        description="Conoce la trayectoria profesional de Ramón Velázquez Izquierdo. Especialista en osteopatía avanzada con más de 15 años de experiencia clínica en Cartagena." 
      />
      
      <Breadcrumbs items={[{ name: 'Sobre Mí' }]} />

      {/* Hero Section */}
      <Section className="bg-white pt-10 md:pt-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <div className="relative z-10">
              <Badge>Liderazgo Clínico</Badge>
              <H1 className="mb-8 tracking-tighter">Pasión por la <span className="text-teal-600">precisión</span>.</H1>
              <div className="space-y-6 mb-12">
                <Text className="text-xl md:text-2xl leading-relaxed text-slate-800 font-normal">
                  Mi nombre es <span className="font-bold text-brand-950">Ramón Velázquez Izquierdo</span>, fundador y director clínico del Centro de Osteopatía Velázquez. Mi viaje en el mundo de la salud manual comenzó con una convicción profunda: el cuerpo humano es una obra de ingeniería biológica perfecta que, cuando pierde su equilibrio, solo necesita el estímulo correcto para recuperarlo.
                </Text>
                <Text className="text-lg md:text-xl text-slate-500">
                  Entiendo la osteopatía no solo como una profesión, sino como un arte basado en la ciencia anatómica. Mi objetivo diario en Cartagena es transformar el dolor en movimiento, y la incertidumbre de una lesión crónica en la seguridad de una recuperación plena. Trabajamos con el rigor que tu salud merece.
                </Text>
              </div>
              <div className="flex flex-wrap gap-6 relative z-30">
                <Button href="#pilares" variant="outline" className="h-16 md:h-20 min-w-[200px] border-2 shadow-sm bg-white hover:bg-brand-950 transition-colors">
                  Nuestros Pilares
                </Button>
                <Button href={SITE_DATA.contact.whatsapp} variant="primary" className="h-16 md:h-20 min-w-[200px] shadow-xl">
                  Agendar Consulta
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] md:rounded-[6rem] overflow-hidden border border-slate-100 shadow-2xl relative z-10">
                <img 
                  src="https://i.imgur.com/XMB80cs.png" 
                  alt="Ramón Velázquez Izquierdo - Osteópata Profesional" 
                  className="w-full aspect-[4/5] object-cover grayscale-[0.2]"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 md:-bottom-16 md:-left-16 bg-brand-950 text-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-3xl hidden md:block z-20">
                <div className="text-4xl md:text-6xl font-black mb-2 tracking-tighter">+15</div>
                <div className="text-[10px] md:text-[11px] font-black uppercase tracking-luxury opacity-60">Años de Praxis</div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60 -z-0"></div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Specialized Values Grid */}
      <Section className="bg-slate-50/50" id="pilares">
        <Container>
          <div className="text-center mb-16 md:mb-24">
            <Badge>Metodología de Trabajo</Badge>
            <H2>Lo que nos diferencia.</H2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto italic font-light">
              "Buscamos la salud, no solo la ausencia de enfermedad."
            </p>
          </div>
          <Grid cols={3}>
            {[
              { 
                icon: Microscope, 
                title: "Ciencia Aplicada", 
                text: "No especulamos. Utilizamos test ortopédicos y neurológicos específicos antes de realizar cualquier manipulación estructural. Nuestro enfoque se basa en la biomecánica pura y la evidencia clínica de vanguardia." 
              },
              { 
                icon: ShieldCheck, 
                title: "Seguridad Clínica", 
                text: "Aplicamos técnicas manuales seguras y no invasivas, adaptadas estrictamente a la edad y condición física de cada persona. La integridad del paciente es nuestra prioridad absoluta en cada sesión." 
              },
              { 
                icon: Heart, 
                title: "Enfoque Holístico", 
                text: "Entendemos la conexión entre mente, órgano y estructura. Tratamos a la persona entera, analizando cómo el estilo de vida y el entorno influyen en la patología física recurrente." 
              }
            ].map((v, i) => (
              <Card key={i} className="group hover:-translate-y-2 transition-all duration-700 hover:shadow-2xl bg-white border-none shadow-sm">
                <div className="w-16 h-16 bg-teal-600/10 rounded-2xl flex items-center justify-center text-teal-600 mb-8 mx-auto md:mx-0 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-500">
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
            <div className="text-center mb-16 md:mb-32">
              <Badge className="bg-white/10 text-white border-white/20">Cronología Profesional</Badge>
              <h2 className="text-4xl md:text-7xl font-bold mb-8 md:mb-12 tracking-tighter">Un compromiso con la excelencia.</h2>
              <p className="text-slate-400 text-lg md:text-2xl font-light avenir-minimal">Formación continua para ofrecer el mejor estándar de cuidado osteopático en la Región de Murcia. Evolucionamos con la ciencia para cuidarte mejor.</p>
            </div>
            
            <div className="space-y-16 md:space-y-24 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-[1px] before:bg-white/10 before:-translate-x-1/2 hidden md:block">
              {[
                { 
                  year: "2010", 
                  title: "Grado Universitario", 
                  school: "Graduación en Fisioterapia por la Universidad de Murcia. Inicio de la carrera clínica enfocada en rehabilitación deportiva y traumatología avanzada.",
                  align: "left"
                },
                { 
                  year: "2015", 
                  title: "Osteopatía Integral", 
                  school: "Comienzo del Máster de 5 años en la Escuela de Osteopatía de Madrid (EOM). Especialización profunda en biomecánica, sistemas viscerales y regulación craneal.",
                  align: "right"
                },
                { 
                  year: "2020", 
                  title: "Fundación Centro Velázquez", 
                  school: "Inauguración de nuestro espacio propio en el centro de Cartagena, consolidando un proyecto de salud de alta precisión y trato humano personalizado.",
                  align: "left"
                },
                { 
                  year: "2024", 
                  title: "Especialización Continua", 
                  school: "Actualizaciones permanentes en Neuro-Osteopatía y abordaje clínico del dolor crónico persistente, integrando las últimas investigaciones en neurociencia del dolor.",
                  align: "right"
                }
              ].map((c, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center justify-between w-full mb-8 relative ${c.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-5/12"></div>
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-brand-950 -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(20,184,166,0.5)]"></div>
                  <div className={`w-full md:w-5/12 ${c.align === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="text-teal-400 font-black text-2xl mb-2 tracking-tighter">{c.year}</div>
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
                <div key={i} className="border-l-2 border-teal-500 pl-6 pb-4">
                  <div className="text-teal-400 font-black text-xl mb-1">{item.year}</div>
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
                <Badge>Filosofía Clínica</Badge>
                <H2>El equilibrio como meta.</H2>
                <div className="space-y-6">
                  <Text className="!text-slate-800 font-medium">
                    En mi práctica profesional, entiendo que no existen dos dolores iguales porque no existen dos personas iguales. Cada organismo es un ecosistema complejo que ha sido moldeado por su genética, sus traumatismos, sus emociones y su estilo de vida.
                  </Text>
                  <Text className="text-lg md:text-xl">
                    Integramos tres vertientes clave para una recuperación real: la <span className="text-brand-950 font-bold">osteopatía estructural</span> para devolver la libertad a las articulaciones; la <span className="text-brand-950 font-bold">visceral</span> para asegurar el correcto funcionamiento de los órganos y su impacto en el sistema nervioso; y la <span className="text-brand-950 font-bold">craneal</span> para regular el eje central de salud del paciente.
                  </Text>
                  <Text className="text-lg md:text-xl">
                    Este abordaje multidimensional es lo que permite que una persona que lleva años sufriendo molestias crónicas empiece a experimentar alivio desde las primeras sesiones. No buscamos parches temporales, sino una reestructuración funcional que perdure en el tiempo. Mi compromiso en Cartagena es ofrecerte un diagnóstico honesto y un tratamiento de la más alta calidad técnica.
                  </Text>
                  <Text className="text-lg md:text-xl">
                    Al final del día, mi mayor satisfacción es ver cómo un paciente recupera la confianza en su propio cuerpo. La salud es nuestra posesión más valiosa, y cuidarla requiere un equilibrio entre la tecnología moderna y la sabiduría milenaria de la medicina manual.
                  </Text>
                </div>
             </div>
             <div className="bg-brand-50 rounded-[4rem] p-12 md:p-20 relative overflow-hidden group border border-brand-100">
                <Target className="absolute -top-12 -right-12 w-64 h-64 text-brand-950/5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                <QuoteIcon className="mb-8" />
                <blockquote className="text-2xl md:text-4xl font-semibold text-brand-950 leading-tight tracking-tight mb-10 italic">
                  "El tratamiento osteopático eficaz no es aquel que fuerza al cuerpo a cambiar, sino aquel que le proporciona la libertad necesaria para que se cure a sí mismo de forma natural."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="h-[2px] w-12 bg-teal-600"></div>
                  <cite className="font-black uppercase tracking-luxury text-[10px] md:text-[11px] text-brand-950 not-italic">Ramón Velázquez Izquierdo, Director Clínico</cite>
                </div>
             </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-brand-50 py-20 md:py-32 border-t border-brand-100">
        <Container className="text-center">
          <div className="max-w-4xl mx-auto">
            <GraduationCap className="mx-auto text-teal-600 mb-8 w-12 h-12 md:w-20 md:h-20" />
            <h2 className="text-4xl md:text-7xl font-bold mb-8 md:mb-12 tracking-tighter leading-[1.1] text-brand-950">
              ¿Estás listo para volver a <span className="text-teal-600">disfrutar</span> de tu cuerpo?
            </h2>
            <Text className="text-slate-600 mb-12 md:mb-20 max-w-2xl mx-auto text-lg md:text-2xl leading-relaxed">
              Permíteme ayudarte a recuperar tu bienestar. Mi compromiso es ofrecerte el mejor tratamiento manual posible en el corazón de Cartagena, con un plan adaptado 100% a tus necesidades reales.
            </Text>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button href={SITE_DATA.contact.whatsapp} variant="primary" className="h-20 md:h-28 text-base px-16 shadow-2xl">
                Reservar Mi Primera Sesión
              </Button>
              <Button href="/servicios" variant="outline" className="h-20 md:h-28 text-base px-16 border-2 bg-white hover:bg-brand-950">
                Explorar Tratamientos
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
    <path d="M11.6667 0C5.22667 0 0 5.22667 0 11.6667V28.3333H15V13.3333H6.66667C6.66667 8.91333 10.2467 5.33333 14.6667 5.33333L11.6667 0ZM36.6667 0C30.2267 0 25 5.22667 25 11.6667V28.3333H40V13.3333H31.6667C31.6667 8.91333 35.2467 5.33333 39.6667 5.33333L36.6667 0Z" fill="#0D9488" fillOpacity="0.2"/>
  </svg>
);

export default About;
