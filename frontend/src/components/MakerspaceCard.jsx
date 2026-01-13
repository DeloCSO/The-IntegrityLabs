import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteData } from '../data/mock';

export const MakerspaceCard = () => {
  const { makerspace } = siteData;
  
  return (
    <div className="flex flex-col h-full">
      {/* Mobile Audience Label */}
      <div 
        className="md:hidden text-label mb-4"
        style={{ color: 'var(--accent-muted)' }}
      >
        {makerspace.audienceLabel}
      </div>
      
      {/* Card */}
      <div 
        className="card-surface p-6 md:p-8 flex flex-col h-full"
        style={{ borderColor: 'rgba(19, 33, 46, 0.8)' }}
        id="makerspace"
      >
        {/* Header */}
        <div className="mb-6">
          <h2 
            className="text-heading mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {makerspace.titleFull}
          </h2>
          <p 
            className="text-body-lg font-medium"
            style={{ color: 'var(--accent-muted)' }}
          >
            {makerspace.subtitle}
          </p>
        </div>
        
        {/* Description */}
        <p 
          className="text-body mb-4"
          style={{ color: 'var(--text-secondary)' }}
        >
          {makerspace.description}
        </p>
        
        {/* Supporting Line */}
        <p 
          className="text-body mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          {makerspace.supportingLine}
        </p>
        
        {/* Features */}
        <div className="mb-6">
          <p 
            className="text-label mb-3"
            style={{ color: 'var(--text-muted)' }}
          >
            What You Get
          </p>
          <div className="grid grid-cols-2 gap-2">
            {makerspace.features.map((feature, index) => (
              <span 
                key={index}
                className="px-3 py-1.5 text-sm font-medium text-center"
                style={{ 
                  backgroundColor: 'rgba(24, 198, 232, 0.05)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-color)'
                }}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        {/* Highlights */}
        <ul className="space-y-3 mb-8 flex-grow">
          {makerspace.highlights.map((highlight, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 text-body"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span 
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: 'var(--accent-muted)' }}
              />
              {highlight}
            </li>
          ))}
        </ul>
        
        {/* CTA */}
        <div className="mt-auto">
          <a href={makerspace.primaryCta.href} className="btn-muted w-full sm:w-auto">
            {makerspace.primaryCta.text}
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};
