import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Modal } from './Modal';

export const DecisionModal = ({ isOpen, onClose, onSelectStudent, onSelectMakerspace }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onBack={onClose}
      title="What We're Building at The IntegrityLabs"
      showBack={true}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Community Card */}
        <div 
          className="p-6 flex flex-col"
          style={{ 
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--border-color)'
          }}
        >
          <h3 
            className="text-lg font-semibold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Student Community
          </h3>
          <p 
            className="text-body mb-6 flex-grow"
            style={{ color: 'var(--text-secondary)' }}
          >
            A focused community for students who want to bridge academic learning with industry reality through conversation, guided projects, and shared learning.
          </p>
          <button 
            onClick={onSelectStudent}
            className="w-full px-6 py-4 text-base font-semibold flex items-center justify-center gap-2 transition-all duration-300"
            style={{ 
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--accent-primary)',
              border: '1px solid rgba(24, 198, 232, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(24, 198, 232, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(24, 198, 232, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(24, 198, 232, 0.3)';
            }}
          >
            Explore Student Community
            <ArrowRight size={18} />
          </button>
        </div>
        
        {/* Makerspace Card */}
        <div 
          className="p-6 flex flex-col"
          style={{ 
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--border-color)'
          }}
        >
          <h3 
            className="text-lg font-semibold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Makerspace — by The IntegrityLabs
          </h3>
          <p 
            className="text-body mb-6 flex-grow"
            style={{ color: 'var(--text-secondary)' }}
          >
            A focused initiative for founders and builders who want to validate ideas, refine products, and receive honest, structured feedback.
          </p>
          <button 
            onClick={onSelectMakerspace}
            className="w-full px-6 py-4 text-base font-semibold flex items-center justify-center gap-2 transition-all duration-300"
            style={{ 
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--accent-primary)',
              border: '1px solid rgba(24, 198, 232, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(24, 198, 232, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(24, 198, 232, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(24, 198, 232, 0.3)';
            }}
          >
            Explore Makerspace
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </Modal>
  );
};
