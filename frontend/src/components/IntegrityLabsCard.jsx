import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { siteData } from '../data/mock';

export const IntegrityLabsCard = () => {
  const { integrityLabs } = siteData;
  
  return (
    <div className="flex flex-col h-full">
      {/* Mobile Audience Label */}
      <div 
        className="md:hidden text-label mb-4"
        style={{ color: 'var(--accent-primary)' }}
      >
        {integrityLabs.audienceLabel}
      </div>
      
      {/* Card */}
      <div 
        className="card-surface p-6 md:p-8 flex flex-col h-full"
        id="integritylabs"
      >
        {/* Header */}
        <div className="mb-6">
          <h2 
            className="text-heading mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {integrityLabs.title}
          </h2>
          <p 
            className="text-body-lg font-medium"
            style={{ color: 'var(--accent-primary)' }}
          >
            {integrityLabs.subtitle}
          </p>
        </div>
        
        {/* Description */}
        <p 
          className="text-body mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          {integrityLabs.description}
        </p>
        
        {/* Domains */}
        <div className="mb-6">
          <p 
            className="text-label mb-3"
            style={{ color: 'var(--text-muted)' }}
          >
            Focus Domains
          </p>
          <div className="flex flex-wrap gap-2">
            {integrityLabs.domains.map((domain, index) => (
              <span 
                key={index}
                className="px-3 py-1.5 text-sm font-medium"
                style={{ 
                  backgroundColor: 'rgba(24, 198, 232, 0.1)',
                  color: 'var(--accent-primary)',
                  border: '1px solid var(--border-color)'
                }}
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
        
        {/* Highlights */}
        <ul className="space-y-3 mb-8 flex-grow">
          {integrityLabs.highlights.map((highlight, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 text-body"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span 
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              />
              {highlight}
            </li>
          ))}
        </ul>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <a href={integrityLabs.primaryCta.href} className="btn-primary">
            {integrityLabs.primaryCta.text}
            <ArrowRight size={18} />
          </a>
          <a href={integrityLabs.secondaryCta.href} className="btn-secondary">
            <BookOpen size={18} />
            {integrityLabs.secondaryCta.text}
          </a>
        </div>
      </div>
    </div>
  );
};
