import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteData } from '../data/mock';

export const MakerspaceSection = () => {
  const { makerspace } = siteData;
  
  return (
    <section 
      id="makerspace"
      className="py-16 md:py-24 px-6 md:px-8 lg:px-12"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-heading mb-6 text-center">
          <span style={{ color: 'var(--text-primary)' }}>Makerspace — by The </span>
          <span 
            style={{ 
              color: 'var(--accent-primary)',
              textShadow: '0 0 20px rgba(24, 198, 232, 0.4)'
            }}
          >
            Integrity
          </span>
          <span style={{ color: 'var(--text-primary)' }}>Labs</span>
        </h2>
        
        {/* Description */}
        <p 
          className="text-body-lg mb-12 text-center max-w-3xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          {makerspace.description}
        </p>
        
        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {makerspace.pillars.map((pillar, index) => (
            <div 
              key={index}
              className="p-6"
              style={{ 
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-color)'
              }}
            >
              <p 
                className="text-label mb-2"
                style={{ color: 'var(--accent-muted)' }}
              >
                Pillar {index + 1}
              </p>
              <h3 
                className="text-lg font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {pillar.title}
              </h3>
              <p 
                className="text-body"
                style={{ color: 'var(--text-secondary)' }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Clarity Line */}
        <p 
          className="text-body text-center mb-10"
          style={{ color: 'var(--text-muted)' }}
        >
          {makerspace.clarityLine}
        </p>
        
        {/* CTA */}
        <div className="text-center">
          <a href={makerspace.cta.href} className="btn-muted inline-flex">
            {makerspace.cta.text}
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
