import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Modal } from './Modal';

export const MakerspaceModal = ({ isOpen, onClose, onBack }) => {
  // Open Google Form in new tab
  const handleApply = () => {
    window.open('https://forms.google.com/makerspace-apply', '_blank', 'noopener,noreferrer');
  };
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onBack={onBack}
      title="Makerspace — A Curated Founder Event"
      showBack={true}
    >
      <div className="space-y-8">
        {/* 1. Title & Qualifier */}
        <section>
          <h3 className="text-heading mb-2">
            <span style={{ color: 'var(--text-primary)' }}>Makerspace</span>
          </h3>
          <p 
            className="text-body-lg mb-3"
            style={{ color: 'var(--accent-primary)' }}
          >
            A Curated Founder Event by The IntegrityLabs
          </p>
          <p 
            className="text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            Limited capacity · Application-based · Built for serious builders
          </p>
        </section>
        
        {/* 2. Immediate Clarity Statement */}
        <section 
          className="p-5"
          style={{ 
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--border-color)'
          }}
        >
          <p 
            className="text-body"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              This is not a course, cohort, or accelerator.
            </span>
            <br />
            Makerspace is a focused event designed to help founders validate, refine, and stress-test what they're building.
          </p>
        </section>
        
        {/* 3. Who This Event Is For */}
        <section>
          <h4 
            className="text-base font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Who This Event Is For
          </h4>
          <p 
            className="text-body mb-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            Makerspace is for founders who are:
          </p>
          <ul className="space-y-3">
            {[
              'Exploring an idea or early concept',
              'Building an MVP or early product',
              'Running a revenue-generating startup seeking clarity, validation, or next-stage direction',
              'Based in tier-2 or tier-3 cities or outside traditional startup ecosystems',
              'Looking for honest feedback and access — not surface-level networking'
            ].map((item, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 text-body"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span 
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                />
                {item}
              </li>
            ))}
          </ul>
        </section>
        
        {/* 4. What You'll Experience */}
        <section>
          <h4 
            className="text-base font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            What You'll Experience
          </h4>
          <ul className="space-y-3">
            {[
              'Product and idea validation sessions',
              'Structured peer and operator feedback',
              'Pitch and narrative refinement conversations',
              'Exposure to founders, operators, and potential investors',
              'A safe environment to test ideas without public failure'
            ].map((item, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 text-body"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span 
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: 'var(--accent-muted)' }}
                />
                {item}
              </li>
            ))}
          </ul>
        </section>
        
        {/* 5. Capital Honesty */}
        <section 
          className="p-5"
          style={{ 
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--border-color)'
          }}
        >
          <p 
            className="text-body mb-3"
            style={{ color: 'var(--text-primary)', fontWeight: 500 }}
          >
            Funding is not guaranteed.
          </p>
          <p 
            className="text-body"
            style={{ color: 'var(--text-muted)' }}
          >
            Makerspace focuses on preparation, clarity, and access.
            <br />
            Investment opportunities emerge from conversations — not promises or certificates.
          </p>
        </section>
        
        {/* 6. Primary CTA */}
        <div className="pt-6 mt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
          <button
            onClick={handleApply}
            className="w-full px-6 py-4 text-base font-semibold flex items-center justify-center gap-2 transition-colors duration-300"
            style={{ 
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--bg-primary)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#20d4f5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
          >
            Apply for the Makerspace Event
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </Modal>
  );
};
