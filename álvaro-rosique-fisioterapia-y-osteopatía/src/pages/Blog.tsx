
import React from 'react';
import SEO from '../components/SEO';
import { Section, Container, H1, Text, Grid, Card, Breadcrumbs } from '../components/UI';
import { SITE_DATA } from '../data';
import { Calendar, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <>
      <SEO title="Blog de Salud y Bienestar" />
      
      <Breadcrumbs items={[{ name: 'Blog' }]} />

      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <H1 className="mb-4 text-4xl">Artículos y Consejos</H1>
            <Text>Aprende más sobre cómo cuidar tu cuerpo y mejorar tus hábitos diarios.</Text>
          </div>

          <Grid cols={2}>
            {SITE_DATA.blog.map(post => (
              <Card key={post.id} className="p-0 overflow-hidden flex flex-col group cursor-pointer">
                <div className="h-64 bg-slate-200">
                  <img src={`https://picsum.photos/seed/post-${post.id}/800/600`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                    <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
                    <span className="flex items-center"><Tag size={14} className="mr-1" /> {post.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition">{post.title}</h3>
                  <p className="text-slate-600 mb-6">{post.excerpt}</p>
                  <span className="text-blue-600 font-bold underline decoration-blue-200 underline-offset-4">Seguir leyendo</span>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default Blog;
