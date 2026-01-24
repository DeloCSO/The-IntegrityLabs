import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const DecisionModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  if (!isOpen) return null;

  const handleSelect = (path) => {
    onClose();
    navigate(path);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(5, 11, 16, 0.95)' }}
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-2xl"
        style={{ 
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)'
        }}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: '1px solid var(--border-color)' }}
        >
          <h2 
            className="text-lg font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            What brings you here?
          </h2>
          <button
            onClick={onClose}
            className="p-2 transition-colors duration-300"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <X size={20} />
          </button>
        </div>

        {/* Options */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Baseline Option */}
          <button
            onClick={() => handleSelect('/baseline')}
            className="p-6 text-left transition-colors duration-300"
            style={{ 
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-color)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
          >
            <p 
              className="text-base font-semibold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Baseline
            </p>
            <p 
              className="text-sm mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              For students seeking clarity on real-world skills through conversation and guidance.
            </p>
            <span 
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: 'var(--accent-primary)' }}
            >
              Explore <ArrowRight size={16} />
            </span>
          </button>

          {/* Makerspace Option */}
          <button
            onClick={() => handleSelect('/makerspace')}
            className="p-6 text-left transition-colors duration-300"
            style={{ 
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-color)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
          >
            <p 
              className="text-base font-semibold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Makerspace
            </p>
            <p 
              className="text-sm mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              For founders seeking honest feedback, validation, and access to operators and investors.
            </p>
            <span 
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: 'var(--accent-primary)' }}
            >
              Explore <ArrowRight size={16} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
