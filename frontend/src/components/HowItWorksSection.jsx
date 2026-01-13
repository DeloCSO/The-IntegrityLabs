import React from 'react';
import { siteData } from '../data/mock';

export const HowItWorksSection = () => {
  const { howItWorks } = siteData;
  
  return (
    <section 
      id="how-it-works"
      className="py-16 md:py-24 px-6 md:px-8 lg:px-12"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-heading mb-12 text-center">
          <span style={{ color: 'var(--text-primary)' }}>How The </span>
          <span 
            style={{ 
              color: 'var(--accent-primary)',
              textShadow: '0 0 20px rgba(24, 198, 232, 0.4)'
            }}
          >
            Integrity
          </span>
          <span style={{ color: 'var(--text-primary)' }}>Labs Community Works</span>
        </h2>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {howItWorks.steps.map((step, index) => (
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
                style={{ color: 'var(--accent-primary)' }}
              >
                {step.step}
              </p>
              <h3 
                className="text-lg font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {step.title}
              </h3>
              <p 
                className="text-body"
                style={{ color: 'var(--text-secondary)' }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Trust Line */}
        <p 
          className="text-body text-center"
          style={{ color: 'var(--text-muted)' }}
        >
          {howItWorks.trustLine}
        </p>
      </div>
    </section>
  );
};
