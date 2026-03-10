
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Container: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <div className={`max-w-8xl mx-auto px-6 lg:px-16 2xl:px-24 transition-all duration-500 ${className}`}>
    {children}
  </div>
);

export const Section: React.FC<{ children: React.ReactNode, className?: string, id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-8 md:py-16 lg:py-24 xl:py-32 overflow-hidden ${className}`}>
    {children}
  </section>
);

export const Breadcrumbs: React.FC<{ items: { name: string, path?: string }[] }> = ({ items }) => (
  <div className="bg-white py-3 md:py-4 border-b border-slate-50">
    <Container>
      <nav className="flex items-center space-x-3 text-[9px] md:text-[10px] font-black uppercase tracking-luxury text-slate-400">
        <Link to="/" className="hover:text-brand-950 transition-colors text-slate-500">Inicio</Link>
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <ChevronRight size={8} className="text-slate-300" />
            {item.path ? (
              <Link to={item.path} className="hover:text-brand-950 transition-colors text-slate-500">{item.name}</Link>
            ) : (
              <span className="text-teal-600 font-bold">{item.name}</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </Container>
  </div>
);

export const H1: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <h1 className={`text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold tracking-tighter leading-[0.95] text-brand-950 ${className}`}>
    {children}
  </h1>
);

export const H2: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <h2 className={`text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-semibold tracking-tighter leading-[1.1] text-brand-950 mb-8 md:mb-12 ${className}`}>
    {children}
  </h2>
);

export const Text: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <p className={`text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-slate-500 leading-relaxed font-light avenir-minimal ${className}`}>
    {children}
  </p>
);

export const Button: React.FC<{ 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost',
  href?: string,
  onClick?: () => void,
  className?: string
}> = ({ children, variant = 'primary', href, onClick, className = "" }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-6 rounded-full font-extrabold transition-all duration-700 transform active:scale-95 text-[10px] md:text-[11px] uppercase tracking-luxury relative z-10";
  const variants = {
    primary: "bg-brand-950 text-white hover:bg-brand-800 shadow-[0_15px_30px_rgba(4,47,46,0.15)]",
    secondary: "bg-white text-brand-950 hover:bg-brand-50 border border-brand-100 shadow-sm",
    outline: "border-2 border-brand-950 text-brand-950 hover:bg-brand-950 hover:text-white",
    ghost: "text-brand-950 hover:bg-brand-50 px-6 md:px-8"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    // Handle Scroll links
    if (href.startsWith('#')) {
      return (
        <button 
          onClick={() => {
            const el = document.getElementById(href.substring(1));
            el?.scrollIntoView({ behavior: 'smooth' });
            if (onClick) onClick();
          }} 
          className={combinedStyles}
        >
          {children}
        </button>
      );
    }

    // Handle Internal Routing (Internal paths start with / and don't include protocol)
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    if (!isExternal) {
      return (
        <Link to={href} className={combinedStyles} onClick={onClick}>
          {children}
        </Link>
      );
    }

    // Handle External links
    return (
      <a 
        href={href} 
        className={combinedStyles} 
        target={href.startsWith('http') ? "_blank" : undefined} 
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return <button onClick={onClick} className={combinedStyles}>{children}</button>;
};

export const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white p-8 md:p-12 lg:p-20 rounded-[2.5rem] md:rounded-[4rem] border border-slate-100 hover:border-brand-200 transition-all duration-1000 ${className}`}>
    {children}
  </div>
);

export const Grid: React.FC<{ children: React.ReactNode, cols?: number, className?: string }> = ({ children, cols = 3, className = "" }) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 lg:grid-cols-3",
    4: "grid-cols-1 lg:grid-cols-2 xl:grid-cols-4"
  };
  return (
    <div className={`grid ${gridCols[cols as keyof typeof gridCols]} gap-8 md:gap-12 lg:gap-20 ${className}`}>
      {children}
    </div>
  );
};

export const Badge: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <span className={`inline-block px-6 py-2.5 md:px-8 md:py-3 bg-brand-50 text-brand-900 text-[9px] md:text-[10px] font-extrabold uppercase tracking-luxury rounded-full mb-6 md:mb-12 border border-brand-100 ${className}`}>
    {children}
  </span>
);
