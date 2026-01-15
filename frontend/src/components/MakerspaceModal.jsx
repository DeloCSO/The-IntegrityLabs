import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Modal } from './Modal';
import { siteData } from '../data/mock';

export const MakerspaceModal = ({ isOpen, onClose, onBack, onApply }) => {
  const { makerspace } = siteData;
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onBack={onBack}
      title="Makerspace — by The IntegrityLabs"
      showBack={true}
    >
      <div className="space-y-8">
        {/* Description */}
        <section>
          <h3 className="text-heading mb-4">
            <span style={{ color: 'var(--text-primary)' }}>Makerspace — by The </span>
            <span 
              style={{ 
                color: 'var(--accent-primary)',
                textShadow: '0 0 20px rgba(24, 198, 232, 0.4)'
              }}
            >
              Integrity
            </span>
            <span style={{ color: 'var(--text-primary)' }}>Labs</span>
          </h3>
          <p 
            className="text-body-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            {makerspace.description}
          </p>
        </section>
        
        {/* Pillars */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {makerspace.pillars.map((pillar, index) => (
              <div 
                key={index}
                className="p-5"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <p 
                  className="text-label mb-2"
                  style={{ color: 'var(--accent-muted)' }}
                >
                  Pillar {index + 1}
                </p>
                <h4 
                  className="text-base font-semibold mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {pillar.title}
                </h4>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Clarity Line */}
        <section 
          className="p-4 text-center"
          style={{ 
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--border-color)'
          }}
        >
          <p 
            className="text-body"
            style={{ color: 'var(--text-muted)' }}
          >
            {makerspace.clarityLine}
          </p>
        </section>
        
        {/* Apply CTA */}
        <div className="pt-6 mt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
          <button
            onClick={onApply}
            className="w-full px-6 py-4 text-base font-semibold flex items-center justify-center gap-2 transition-colors duration-300"
            style={{ 
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--bg-primary)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#20d4f5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
          >
            Apply to Makerspace
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </Modal>
  );
};
