
import React from 'react';
import SEO from '../components/SEO';
import { Section, Container, H1, H2, Text, Button, Card, Grid, Breadcrumbs } from '../components/UI';
import { SITE_DATA } from '../data';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <SEO title="Contacto y Ubicación" description="Reserva tu cita en nuestro centro de Cartagena. Estamos en Calle Campos, 3A." />
      
      <Breadcrumbs items={[{ name: 'Contacto' }]} />

      <Section>
        <Container>
          <div className="mb-16">
            <H1 className="mb-4">Contacto</H1>
            <Text>Estamos a tu disposición para cualquier consulta. Reserva tu cita por teléfono o WhatsApp.</Text>
          </div>

          <Grid cols={2} className="gap-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-teal-100 p-4 rounded-2xl text-teal-600">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Nuestra Clínica</h3>
                  <p className="text-slate-600">{SITE_DATA.contact.address}<br />{SITE_DATA.contact.postalCode} {SITE_DATA.contact.city} ({SITE_DATA.contact.region})</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-teal-100 p-4 rounded-2xl text-teal-600">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Llámanos</h3>
                  <p className="text-slate-600">Teléfono: <a href={`tel:${SITE_DATA.contact.phone}`} className="hover:text-teal-600 font-medium">{SITE_DATA.contact.phone}</a></p>
                  <p className="text-slate-600">WhatsApp: <a href={SITE_DATA.contact.whatsapp} className="text-green-600 font-bold underline">Chat directo</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-teal-100 p-4 rounded-2xl text-teal-600">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-slate-600">{SITE_DATA.contact.email}</p>
                </div>
              </div>

              <Card className="bg-slate-900 text-white">
                <h3 className="text-lg font-bold mb-4">Horario de Atención</h3>
                <div className="space-y-2 text-sm">
                  {SITE_DATA.openingHours.map(o => (
                    <div key={o.day} className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="opacity-70">{o.day}</span>
                      <span>{o.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border">
              <H2 className="text-2xl mb-6">Envíanos un mensaje</H2>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold mb-1 text-slate-700">Nombre</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1 text-slate-700">Teléfono</label>
                  <input type="tel" className="w-full p-4 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Tu teléfono" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1 text-slate-700">Consulta</label>
                  <textarea rows={4} className="w-full p-4 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>
                <Button variant="primary" className="w-full py-4">Enviar Formulario</Button>
                <p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-widest">
                  Atención 100% confidencial.
                </p>
              </form>
            </div>
          </Grid>
        </Container>
      </Section>

      <div className="w-full h-[500px] bg-slate-200 mt-16">
        <iframe 
          title="Ubicación Clínica"
          src={SITE_DATA.contact.googleMapsEmbed}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </>
  );
};

export default Contact;
