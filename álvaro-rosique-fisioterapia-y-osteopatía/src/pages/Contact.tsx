
import React from 'react';
import SEO from '../components/SEO';
import { Section, Container, H1, H2, Text, Button, Card, Grid, Breadcrumbs, Badge } from '../components/UI';
import { SITE_DATA } from '../data';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <SEO title="Contacto y Ubicación" description="Reserva tu cita en nuestro centro de Cartagena. Estamos en Calle Campos, 3A." />
      
      <Breadcrumbs items={[{ name: 'Contacto' }]} />

      <Section className="bg-white pt-16 md:pt-24 lg:pt-32">
        <Container>
          <div className="max-w-4xl mb-16 md:mb-24">
            <Badge>Contacto</Badge>
            <H1 className="mb-6 md:mb-8 tracking-tighter leading-tight">Estamos aquí para <span className="text-blue-600 italic">ayudarte</span>.</H1>
            <Text className="text-lg md:text-xl lg:text-2xl">Pide tu cita o pregúntanos cualquier duda que tengas. Te atenderemos encantados en nuestra clínica de Cartagena.</Text>
          </div>

          <Grid cols={2} className="gap-16 lg:gap-32 items-start">
            <div className="space-y-12 md:space-y-20">
              <div className="flex items-start space-x-8 group">
                <div className="bg-blue-600/10 p-6 rounded-[2rem] text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <MapPin size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-950 mb-3 tracking-tight">Dónde estamos</h3>
                  <p className="text-slate-500 text-lg leading-relaxed avenir-minimal">{SITE_DATA.contact.address}<br />{SITE_DATA.contact.postalCode} {SITE_DATA.contact.city}</p>
                </div>
              </div>

              <div className="flex items-start space-x-8 group">
                <div className="bg-blue-600/10 p-6 rounded-[2rem] text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Phone size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-950 mb-3 tracking-tight">Llámanos o escríbenos</h3>
                  <p className="text-slate-500 text-lg leading-relaxed avenir-minimal">Teléfono: <a href={`tel:${SITE_DATA.contact.phone}`} className="hover:text-blue-600 font-bold transition-colors">{SITE_DATA.contact.phone}</a></p>
                  <p className="text-slate-500 text-lg leading-relaxed avenir-minimal">WhatsApp: <a href={SITE_DATA.contact.whatsapp} className="text-blue-600 font-black uppercase tracking-luxury text-[11px] hover:underline">Hablar por WhatsApp</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-8 group">
                <div className="bg-blue-600/10 p-6 rounded-[2rem] text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Mail size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-950 mb-3 tracking-tight">Correo electrónico</h3>
                  <p className="text-slate-500 text-lg leading-relaxed avenir-minimal">{SITE_DATA.contact.email}</p>
                </div>
              </div>

              <Card className="bg-brand-950 text-white p-10 md:p-16 border-none shadow-2xl">
                <h3 className="text-xs font-black uppercase tracking-luxury text-blue-400 mb-8">Horario de Consulta</h3>
                <div className="space-y-4">
                  {SITE_DATA.openingHours.map(o => (
                    <div key={o.day} className="flex justify-between border-b border-white/5 pb-4 text-sm md:text-base font-bold tracking-tight">
                      <span className="opacity-50 uppercase text-[10px] tracking-widest">{o.day}</span>
                      <span>{o.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="bg-slate-50 p-10 md:p-16 lg:p-20 rounded-[3rem] md:rounded-[5rem] border border-slate-100 shadow-sm sticky top-32">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-950 mb-10 tracking-tighter">Cuéntanos qué te pasa.</h2>
              <form className="space-y-6 md:space-y-8" onSubmit={e => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-luxury text-slate-400 ml-4">Tu nombre</label>
                  <input type="text" className="w-full p-6 bg-white border border-slate-100 rounded-3xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-brand-950 font-medium" placeholder="Escribe tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-luxury text-slate-400 ml-4">Tu teléfono</label>
                  <input type="tel" className="w-full p-6 bg-white border border-slate-100 rounded-3xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-brand-950 font-medium" placeholder="Escribe tu teléfono" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-luxury text-slate-400 ml-4">¿En qué podemos ayudarte?</label>
                  <textarea rows={4} className="w-full p-6 bg-white border border-slate-100 rounded-3xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-brand-950 font-medium resize-none" placeholder="Cuéntanos brevemente qué necesitas"></textarea>
                </div>
                <Button variant="primary" className="w-full h-20 md:h-24 text-sm shadow-xl">Enviar mensaje</Button>
                <p className="text-[10px] text-center text-slate-400 mt-6 uppercase tracking-luxury font-black opacity-60">
                  Tus datos están seguros con nosotros.
                </p>
              </form>
            </div>
          </Grid>
        </Container>
      </Section>

      <div className="w-full h-[600px] md:h-[800px] bg-slate-100 mt-24 md:mt-40 relative overflow-hidden group">
        <iframe 
          title="Ubicación Clínica"
          src={SITE_DATA.contact.googleMapsEmbed}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105"
        >
        </iframe>
      </div>
    </>
  );
};

export default Contact;
