import React from 'react';
import { siteData } from '../data/mock';

export const Footer = () => {
  return (
    <footer 
      className="py-8 px-6 md:px-8 lg:px-12"
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">
              <span style={{ color: 'var(--text-primary)' }}>The </span>
              <span 
                style={{ 
                  color: 'var(--accent-primary)',
                  textShadow: '0 0 15px rgba(24, 198, 232, 0.3)'
                }}
              >
                Integrity
              </span>
              <span style={{ color: 'var(--text-primary)' }}>Labs</span>
            </span>
            <span 
              className="text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              — {siteData.footer.tagline}
            </span>
          </div>
          
          {/* Copyright */}
          <p 
            className="text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            {siteData.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
