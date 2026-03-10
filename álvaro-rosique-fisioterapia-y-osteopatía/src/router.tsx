import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import About from './pages/About';
import Faqs from './pages/Faqs';

const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
    <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
    <p className="text-xl text-slate-600 mb-8">¡Vaya! Página no encontrada.</p>
    <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
      Volver al Inicio
    </Link>
  </div>
);

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre-mi" element={<About />} />
          <Route path="servicios" element={<Services />} />
          <Route path="servicios/:slug" element={<ServiceDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="resenas" element={<Reviews />} />
          <Route path="preguntas-frecuentes" element={<Faqs />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};