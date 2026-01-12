import React from 'react';
import { siteData } from '../data/mock';

export const Header = () => {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50"
      style={{ 
        backgroundColor: 'var(--bg-primary)', 
        borderBottom: '1px solid var(--border-color)' 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span 
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--accent-primary)' }}
            >
              {siteData.brand.name}
            </span>
          </div>
          
          {/* Navigation - Hidden on mobile for minimalism */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#integritylabs" 
              className="text-sm font-medium transition-colors duration-300"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              For Students
            </a>
            <a 
              href="#makerspace" 
              className="text-sm font-medium transition-colors duration-300"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              For Founders
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
