
import React from 'react';
import SEO from '../components/SEO';
import { Section, Container, H1, Text, Grid, Card, Breadcrumbs, Badge } from '../components/UI';
import { SITE_DATA } from '../data';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <>
      <SEO title="Opiniones de nuestros pacientes" />
      
      <Breadcrumbs items={[{ name: 'Reseñas' }]} />

      <Section className="bg-slate-50 pt-12 md:pt-20 lg:pt-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <Badge>Opiniones</Badge>
            <H1 className="mb-6 md:mb-8 tracking-tighter leading-tight">Lo que dicen <span className="text-emerald-600 italic">nuestros pacientes</span>.</H1>
            <Text className="mb-10 text-lg md:text-xl lg:text-xl">No hay nada que nos haga más felices que ver cómo nuestros pacientes de Cartagena recuperan su bienestar. Aquí puedes leer algunas de sus historias.</Text>
            
            <div className="inline-flex flex-col items-center bg-white p-6 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="flex items-center space-x-4 mb-3">
                <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-3xl md:text-5xl font-black text-brand-950">4.5</span>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill={i <= 4 ? "currentColor" : "none"} stroke="currentColor" />)}
              </div>
              <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-luxury">18 personas ya han opinado en Google</p>
            </div>
          </div>

          <Grid cols={3} className="gap-10 md:gap-12 lg:gap-16">
            {SITE_DATA.reviews.map((r, i) => (
              <Card key={i} className="relative p-8 md:p-12 border-none shadow-sm hover:shadow-2xl transition-all duration-1000 bg-white rounded-[2.5rem] md:rounded-[3.5rem] group">
                <Quote className="absolute top-8 right-8 text-slate-50 group-hover:text-emerald-50 transition-colors" size={60} />
                <div className="relative z-10">
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(r.rating)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-brand-950 italic mb-10 text-base md:text-lg lg:text-lg leading-relaxed font-medium">"{r.text}"</p>
                  <div className="flex items-center space-x-6 pt-8 border-t border-slate-50">
                    <div className="w-12 h-12 bg-brand-950 text-white rounded-full flex items-center justify-center font-black text-lg">
                      {r.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-950 text-base md:text-lg">{r.name}</h4>
                      <span className="text-[9px] text-slate-400 font-black uppercase tracking-luxury">{r.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default Reviews;
