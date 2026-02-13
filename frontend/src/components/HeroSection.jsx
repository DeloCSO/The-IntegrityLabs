import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteData } from '../data/mock';

export const HeroSection = ({ onCtaClick }) => {
  const { hero } = siteData;
  
  return (
    <section 
      className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-8 lg:px-12 flex items-center"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-display mb-4">
          <span style={{ color: 'var(--text-primary)' }}>{hero.headline}</span>
        </h1>
        
        {/* Supporting Line */}
        <p 
          className="text-body-lg mb-8"
          style={{ color: 'var(--accent-primary)' }}
        >
          {hero.supportingLine}
        </p>
        
        {/* Description */}
        <div 
          className="text-body mb-10 max-w-3xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          {hero.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'mt-4' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Primary CTA - Opens Decision Modal */}
        <button 
          onClick={onCtaClick}
          className="btn-primary inline-flex"
        >
          {hero.primaryCta.text}
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};
