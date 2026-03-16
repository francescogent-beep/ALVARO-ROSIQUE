
import React from 'react';
import SEO from '../components/SEO';
import { Section, Container, H1, Text, Grid, Card, Breadcrumbs } from '../components/UI';
import { SITE_DATA } from '../data';
import { Calendar, Tag, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <>
      <SEO title="Blog de Salud y Bienestar" />
      
      <Breadcrumbs items={[{ name: 'Blog' }]} />

      <Section className="pt-12 md:pt-20 lg:pt-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <H1 className="mb-6 md:mb-8 tracking-tighter leading-tight">Artículos y <span className="text-emerald-600 italic">Consejos</span></H1>
            <Text className="text-lg md:text-xl lg:text-xl">Aprende más sobre cómo cuidar tu cuerpo y mejorar tus hábitos diarios.</Text>
          </div>

          <Grid cols={2} className="gap-10 md:gap-12 lg:gap-16">
            {SITE_DATA.blog.map(post => (
              <Card key={post.id} className="p-0 overflow-hidden flex flex-col group cursor-pointer border-none shadow-sm hover:shadow-2xl transition-all duration-1000 bg-white rounded-[2.5rem] md:rounded-[3.5rem]">
                <div className="h-64 md:h-80 bg-slate-200 overflow-hidden">
                  <img src={`https://picsum.photos/seed/post-${post.id}/800/600`} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0" />
                </div>
                <div className="p-8 md:p-10 lg:p-12">
                  <div className="flex items-center space-x-6 text-[10px] md:text-[11px] font-black text-emerald-600 uppercase tracking-luxury mb-6">
                    <span className="flex items-center"><Calendar size={14} className="mr-2" /> {post.date}</span>
                    <span className="flex items-center"><Tag size={14} className="mr-2" /> {post.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-950 mb-4 tracking-tighter leading-tight group-hover:text-emerald-600 transition-colors">{post.title}</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-light text-base md:text-lg lg:text-lg avenir-minimal">{post.excerpt}</p>
                  <span className="text-emerald-600 font-black uppercase tracking-luxury text-[10px] md:text-[11px] hover:gap-3 transition-all group/link inline-flex items-center">
                    Seguir leyendo <ChevronRight size={14} className="ml-1" />
                  </span>
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
