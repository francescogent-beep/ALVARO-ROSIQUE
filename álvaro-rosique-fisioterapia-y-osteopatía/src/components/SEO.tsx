
import React, { useEffect } from 'react';
import { SITE_DATA } from '../data';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
  jsonLd?: any[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  noindex,
  ogImage,
  jsonLd = []
}) => {
  const fullTitle = title ? `${title} | ${SITE_DATA.clinicName}` : `${SITE_DATA.clinicName} | Osteópata en ${SITE_DATA.contact.city}`;
  const metaDescription = description || SITE_DATA.description;
  const canonicalUrl = canonical || SITE_DATA.baseUrl;

  useEffect(() => {
    // Update basic tags
    document.title = fullTitle;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', metaDescription);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = metaDescription;
      document.head.appendChild(m);
    }

    if (noindex) {
      const robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'noindex, nofollow';
      document.head.appendChild(robots);
    }

    // Default JSON-LD for LocalBusiness
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "medicalSpecialty": "Osteopathic",
      "name": SITE_DATA.clinicName,
      "description": SITE_DATA.description,
      "url": SITE_DATA.baseUrl,
      "telephone": SITE_DATA.contact.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE_DATA.contact.address,
        "addressLocality": SITE_DATA.contact.city,
        "postalCode": SITE_DATA.contact.postalCode,
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": SITE_DATA.contact.coords.lat,
        "longitude": SITE_DATA.contact.coords.lng
      },
      "openingHoursSpecification": SITE_DATA.openingHours.map(o => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": o.day.includes("Lunes") ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] : o.day === "Sábados" ? ["Saturday"] : [],
        "opens": o.hours.split(" - ")[0],
        "closes": o.hours.split(" - ")[1]
      }))
    };

    const schemas = [localBusinessSchema, ...jsonLd];

    // Clean up existing scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(s => s.remove());

    // Inject new schemas
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    });

  }, [fullTitle, metaDescription, noindex, jsonLd]);

  return null;
};

export default SEO;
