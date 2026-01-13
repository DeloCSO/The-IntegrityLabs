import React from 'react';
import { IntegrityLabsCard } from './IntegrityLabsCard';
import { MakerspaceCard } from './MakerspaceCard';
import { siteData } from '../data/mock';

export const HeroSection = () => {
  return (
    <section 
      className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-8 lg:px-12"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-display mb-4">
            <span style={{ color: 'var(--text-primary)' }}>The </span>
            <span 
              style={{ 
                color: 'var(--accent-primary)',
                textShadow: '0 0 30px rgba(24, 198, 232, 0.5)'
              }}
            >
              Integrity
            </span>
            <span style={{ color: 'var(--text-primary)' }}>Labs</span>
          </h1>
          <p 
            className="text-body-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {siteData.brand.tagline}
          </p>
        </div>
        
        {/* Two Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* IntegrityLabs Card - For Students */}
          <IntegrityLabsCard />
          
          {/* Makerspace Card - For Founders */}
          <MakerspaceCard />
        </div>
      </div>
    </section>
  );
};
