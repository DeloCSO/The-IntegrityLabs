import React from 'react';

export const Header = ({ onHomeClick, onStudentClick, onFounderClick }) => {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-40"
      style={{ 
        backgroundColor: 'var(--bg-primary)', 
        borderBottom: '1px solid var(--border-color)' 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Acts as HOME button */}
          <button 
            onClick={onHomeClick}
            className="flex items-center gap-1 cursor-pointer bg-transparent border-none"
          >
            <span className="text-xl md:text-2xl font-bold">
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
            </span>
          </button>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={onStudentClick}
              className="text-sm font-medium transition-colors duration-300 bg-transparent border-none cursor-pointer"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              For Students
            </button>
            <button 
              onClick={onFounderClick}
              className="text-sm font-medium transition-colors duration-300 bg-transparent border-none cursor-pointer"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              For Founders
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
