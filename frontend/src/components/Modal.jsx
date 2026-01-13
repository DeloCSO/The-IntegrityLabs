import React from 'react';
import { X, ArrowLeft } from 'lucide-react';

export const Modal = ({ isOpen, onClose, onBack, title, children, showBack = false }) => {
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(5, 11, 16, 0.95)' }}
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] mx-4 overflow-hidden flex flex-col"
        style={{ 
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)'
        }}
      >
        {/* Modal Header */}
        <div 
          className="flex items-center justify-between px-6 py-4 flex-shrink-0"
          style={{ borderBottom: '1px solid var(--border-color)' }}
        >
          <div className="flex items-center gap-4">
            {showBack && (
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                <ArrowLeft size={18} />
                Back
              </button>
            )}
            <h2 
              className="text-lg font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 transition-colors duration-300"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Modal Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {children}
        </div>
      </div>
    </div>
  );
};
