import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { SITE_DATA } from '../data';
import { Menu, X, Phone, MessageCircle, MapPin, ChevronRight, HelpCircle, ArrowRight } from 'lucide-react';
import { Container, Section, H2, Text, Grid, Card, Button } from './UI';

export const FaqPreviewSection = () => {
  const location = useLocation();
  // Don't show preview on the actual FAQ page
  if (location.pathname === '/preguntas-frecuentes') return null;

  const previewFaqs = SITE_DATA.generalFaqs.slice(0, 3);

  return (
    <Section className="bg-slate-50 border-t border-slate-100">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 text-teal-600 font-black uppercase tracking-luxury text-[10px] mb-4">
              <HelpCircle size={16} />
              <span>Dudas comunes</span>
            </div>
            <H2 className="mb-0">Preguntas Frecuentes.</H2>
          </div>
          <Link 
            to="/preguntas-frecuentes" 
            className="group flex items-center space-x-3 text-[11px] font-black uppercase tracking-luxury text-brand-950 hover:text-teal-600 transition-colors"
          >
            <span>Ver todas las dudas</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <Grid cols={3}>
          {previewFaqs.map((f, i) => (
            <Card key={i} className="p-8 md:p-10 border-none shadow-sm hover:shadow-md bg-white">
              <h4 className="text-lg font-bold text-brand-950 mb-4 tracking-tight leading-snug">{f.q}</h4>
              <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed avenir-minimal line-clamp-3">{f.a}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Mí', path: '/sobre-mi' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/preguntas-frecuentes' },
    { name: 'Contacto', path: '/contacto' },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-3xl border-b border-slate-100 sticky top-0 z-50">
        <Container>
          <div className="flex justify-between items-center h-20 lg:h-28">
            <Link to="/" className="flex flex-col group py-4">
              <span className="text-base md:text-lg lg:text-xl font-black text-brand-950 leading-tight brand-logo group-hover:text-brand-600 transition-colors">
                {SITE_DATA.clinicName}
              </span>
              <span className="text-[7px] md:text-[8px] lg:text-[9px] text-teal-600/60 font-black uppercase tracking-luxury mt-1.5">
                {SITE_DATA.tagline}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex lg:space-x-8 xl:space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[9px] xl:text-[10px] font-extrabold uppercase tracking-luxury transition-all hover:text-brand-900 relative group ${
                    location.pathname === link.path ? 'text-brand-950' : 'text-slate-400'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 w-full h-[1.5px] bg-brand-900 transition-all duration-700 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-6">
              <a href={`tel:${SITE_DATA.contact.phone}`} className="text-[10px] xl:text-[11px] font-bold text-brand-950 tracking-widest">
                {SITE_DATA.contact.phone}
              </a>
              <Link
                to="/contacto"
                className="px-6 py-3.5 bg-brand-950 text-white rounded-full text-[9px] font-bold uppercase tracking-luxury hover:bg-teal-800 transition-all"
              >
                Cita
              </Link>
            </div>

            <button 
              className="lg:hidden p-2.5 bg-slate-50 rounded-full text-brand-950 z-50" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-all duration-700 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div className="flex flex-col h-full pt-32 pb-12 px-8">
          <nav className="flex flex-col space-y-8 flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-4xl font-bold tracking-tighter transition-all flex justify-between items-center ${
                  location.pathname === link.path ? 'text-brand-900' : 'text-slate-300'
                }`}
              >
                {link.name}
                {location.pathname === link.path && <ChevronRight className="text-teal-500" size={32} />}
              </Link>
            ))}
          </nav>
          
          <div className="pt-12 border-t border-slate-100">
            <p className="text-[10px] font-black uppercase tracking-luxury text-slate-400 mb-6">Contacto Directo</p>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href={`tel:${SITE_DATA.contact.phone}`}
                className="flex items-center justify-center space-x-3 bg-brand-50 text-brand-950 h-16 rounded-2xl font-bold text-[10px] uppercase tracking-luxury border border-brand-100"
              >
                <Phone size={14} />
                <span>Llamar</span>
              </a>
              <a 
                href={SITE_DATA.contact.whatsapp}
                className="flex items-center justify-center space-x-3 bg-brand-950 text-white h-16 rounded-2xl font-bold text-[10px] uppercase tracking-luxury"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow overflow-x-hidden">
        <Outlet />
      </main>

      {/* FAQ Preview added globally before Footer, but hidden on Home page to allow custom placement */}
      {location.pathname !== '/' && <FaqPreviewSection />}

      {/* Footer */}
      <footer className="bg-brand-950 border-t border-white/5 pt-16 md:pt-32 pb-40 md:pb-20 lg:pb-24 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-24 mb-16 md:mb-24">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-6 brand-logo uppercase">{SITE_DATA.clinicName}</h3>
              <p className="text-slate-400 font-light leading-relaxed mb-8 text-base md:text-lg xl:text-xl avenir-minimal">{SITE_DATA.description}</p>
              <div className="flex space-x-8 text-[9px] md:text-[10px] font-extrabold uppercase tracking-luxury">
                {SITE_DATA.socials.map((s) => (
                  <a key={s.platform} href={s.url} className="text-teal-400 hover:text-white transition-colors">
                    {s.platform}
                  </a>
                ))}
              </div>
            </div>

            <div className="xl:pl-16">
              <h4 className="text-[9px] md:text-[10px] font-extrabold uppercase tracking-luxury text-teal-400 mb-8">Navegación</h4>
              <ul className="space-y-4 md:space-y-6 text-[10px] md:text-[11px] font-bold uppercase tracking-luxury">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-slate-400 hover:text-white transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[9px] md:text-[10px] font-extrabold uppercase tracking-luxury text-teal-400 mb-8">El Centro</h4>
              <ul className="space-y-6 md:space-y-8 text-sm">
                <li className="flex items-start space-x-4 md:space-x-6">
                  <MapPin className="text-teal-400 shrink-0 w-4 h-4 md:w-[18px] md:h-[18px]" />
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-[11px]">{SITE_DATA.contact.address}, {SITE_DATA.contact.city}</span>
                </li>
                <li className="flex items-center space-x-4 md:space-x-6">
                  <Phone className="text-teal-400 shrink-0 w-4 h-4 md:w-[18px] md:h-[18px]" />
                  <a href={`tel:${SITE_DATA.contact.phone}`} className="text-white font-bold text-sm md:text-base tracking-widest hover:text-teal-400 transition-colors">{SITE_DATA.contact.phone}</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[9px] md:text-[10px] font-extrabold uppercase tracking-luxury text-teal-400 mb-8">Horarios</h4>
              <div className="space-y-3 md:space-y-4">
                {SITE_DATA.openingHours.map(o => (
                   <div key={o.day} className="flex justify-between text-[10px] md:text-[11px] font-bold uppercase tracking-widest border-b border-white/5 pb-2 md:pb-3">
                      <span className="text-slate-400">{o.day}</span>
                      <span className="text-white">{o.hours}</span>
                   </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] text-white/20 font-extrabold uppercase tracking-luxury">
            <p>&copy; {new Date().getFullYear()} {SITE_DATA.legalName}.</p>
            <p className="mt-4 md:mt-0 opacity-50">Osteopatía Cartagena · Wellness Design</p>
          </div>
        </Container>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className={`lg:hidden fixed bottom-6 left-6 right-6 z-50 flex space-x-4 transition-all duration-500 ${isMenuOpen ? 'translate-y-40 opacity-0' : 'translate-y-0 opacity-100'}`}>
        <a
          href={`tel:${SITE_DATA.contact.phone}`}
          className="flex-1 flex items-center justify-center space-x-3 bg-white/90 backdrop-blur-3xl text-brand-950 h-16 md:h-20 rounded-full font-bold text-[9px] uppercase tracking-luxury shadow-xl border border-brand-100"
        >
          <Phone size={14} />
          <span>Llamar</span>
        </a>
        <a
          href={SITE_DATA.contact.whatsapp}
          className="flex-1 flex items-center justify-center space-x-3 bg-brand-950 text-white h-16 md:h-20 rounded-full font-bold text-[9px] uppercase tracking-luxury shadow-xl"
        >
          <MessageCircle size={14} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default Layout;