import React from 'react';
import { siteData } from '../data/mock';

export const TheIntegrityLabsSection = () => {
  const { theIntegrityLabs } = siteData;
  
  return (
    <section 
      id="the-integritylabs"
      className="py-16 md:py-24 px-6 md:px-8 lg:px-12"
      style={{ 
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)'
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-heading mb-6">
          <span style={{ color: 'var(--text-primary)' }}>The </span>
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
        
        {/* Content */}
        <p 
          className="text-body-lg mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          {theIntegrityLabs.content}
        </p>
        
        {/* Bullet Points */}
        <ul className="space-y-3">
          {theIntegrityLabs.bullets.map((bullet, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 text-body"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span 
                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
