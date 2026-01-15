import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Modal } from './Modal';
import { siteData } from '../data/mock';

export const StudentCommunityModal = ({ isOpen, onClose, onBack, onApply }) => {
  const { theIntegrityLabs, howItWorks, communityTracks } = siteData;
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onBack={onBack}
      title="Student Community at The IntegrityLabs"
      showBack={true}
    >
      <div className="space-y-10">
        {/* The IntegrityLabs Section */}
        <section>
          <h3 className="text-heading mb-4">
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
          </h3>
          <p 
            className="text-body mb-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            {theIntegrityLabs.content}
          </p>
          <ul className="space-y-2">
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
        </section>
        
        {/* How It Works Section */}
        <section>
          <h3 className="text-heading mb-6">
            <span style={{ color: 'var(--text-primary)' }}>How The </span>
            <span 
              style={{ 
                color: 'var(--accent-primary)',
                textShadow: '0 0 20px rgba(24, 198, 232, 0.4)'
              }}
            >
              Integrity
            </span>
            <span style={{ color: 'var(--text-primary)' }}>Labs Community Works</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {howItWorks.steps.map((step, index) => (
              <div 
                key={index}
                className="p-4"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <p 
                  className="text-label mb-1"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {step.step}
                </p>
                <h4 
                  className="text-base font-semibold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {step.title}
                </h4>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <p 
            className="text-body text-center"
            style={{ color: 'var(--text-muted)' }}
          >
            {howItWorks.trustLine}
          </p>
        </section>
        
        {/* Community Tracks Section */}
        <section>
          <h3 
            className="text-heading mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            {communityTracks.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {communityTracks.tracks.map((track, index) => (
              <div 
                key={index}
                className="p-4"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <h4 
                  className="text-base font-semibold mb-2"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {track.name}
                </h4>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {track.description}
                </p>
              </div>
            ))}
          </div>
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
            Apply to Student Community
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </Modal>
  );
};
