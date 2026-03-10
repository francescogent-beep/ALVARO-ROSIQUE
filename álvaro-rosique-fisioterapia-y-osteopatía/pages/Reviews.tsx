
import React from 'react';
import SEO from '../components/SEO';
import { Section, Container, H1, Text, Grid, Card, Breadcrumbs } from '../components/UI';
import { SITE_DATA } from '../data';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <>
      <SEO title="Opiniones de nuestros pacientes" />
      
      <Breadcrumbs items={[{ name: 'Reseñas' }]} />

      <Section className="bg-teal-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <H1 className="mb-4 text-4xl">Lo que dicen de nosotros</H1>
            <Text className="mb-8">La satisfacción de nuestros pacientes es nuestro mayor aval. Descubre su experiencia en el Centro Velázquez.</Text>
            <div className="flex justify-center items-center space-x-2 text-yellow-500 mb-12">
              <span className="text-4xl font-bold text-slate-900 mr-2">4.6</span>
              {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
              <span className="text-slate-500 ml-2">(9 Reseñas en Google)</span>
            </div>
          </div>

          <Grid cols={3}>
            {SITE_DATA.reviews.map((r, i) => (
              <Card key={i} className="relative">
                <Quote className="absolute top-4 right-4 text-teal-100" size={48} />
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(r.rating)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-6">"{r.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    {r.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{r.name}</h4>
                    <span className="text-xs text-slate-500">{r.date}</span>
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
