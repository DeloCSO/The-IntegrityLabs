import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Modal } from './Modal';

export const StudentCommunityModal = ({ isOpen, onClose, onBack, onApply }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onBack={onBack}
      title="The IntegrityLabs Student Community"
      showBack={true}
    >
      <div className="space-y-8">
        {/* 1. Title */}
        <section>
          <h3 className="text-heading mb-2">
            <span style={{ color: 'var(--text-primary)' }}>The </span>
            <span 
              style={{ 
                color: 'var(--accent-primary)',
                textShadow: '0 0 20px rgba(24, 198, 232, 0.4)'
              }}
            >
              Integrity
            </span>
            <span style={{ color: 'var(--text-primary)' }}>Labs Student Community</span>
          </h3>
        </section>
        
        {/* 2. Core Philosophy */}
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
              This is not a course or a cohort.
            </span>
            <br /><br />
            The Student Community exists to help you talk to the right people, ask better questions, and understand what skills actually matter before committing time or money.
          </p>
        </section>
        
        {/* 3. What Happens Here */}
        <section>
          <h4 
            className="text-base font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            What Happens Here
          </h4>
          <p 
            className="text-body mb-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            Inside the community, you can:
          </p>
          <ul className="space-y-3">
            {[
              'Talk to mentors and professionals who've worked in the field',
              'Get direction on what to learn and what to ignore',
              'Access curated resources and real-world perspectives',
              'Explore whether working on a project together even makes sense'
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
        
        {/* 4. Clear Boundary on Monetization */}
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
            Conversations and guidance at this stage are free.
          </p>
          <p 
            className="text-body"
            style={{ color: 'var(--text-muted)' }}
          >
            If you later decide to work on a focused project with a mentor, that engagement is optional and structured separately.
          </p>
        </section>
        
        {/* 5. Who This Is For */}
        <section>
          <h4 
            className="text-base font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Who This Is For
          </h4>
          <p 
            className="text-body mb-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            This community is for students who:
          </p>
          <ul className="space-y-3">
            {[
              'Want clarity before committing to paid programs',
              'Care more about real skills than certificates',
              'Are willing to learn through conversation and exploration',
              'May choose to build projects later — but only if it feels right'
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
        
        {/* 6. Primary CTA */}
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
            Start a conversation
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </Modal>
  );
};
