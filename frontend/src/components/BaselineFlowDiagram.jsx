import React from 'react';
import { MessageSquare, Compass, Target, ArrowRight } from 'lucide-react';

export const BaselineFlowDiagram = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Enter the Conversation',
      description: 'Join discussions with mentors and peers who understand real-world work.'
    },
    {
      icon: Compass,
      title: 'Gain Direction',
      description: 'Ask questions, explore paths, and understand what actually matters.'
    },
    {
      icon: Target,
      title: 'Find Clarity',
      description: 'Decide if and when deeper project work makes sense for you.'
    }
  ];

  return (
    <div className="py-8">
      <h3 
        className="text-base font-semibold mb-8 text-center"
        style={{ color: 'var(--text-primary)' }}
      >
        How Clarity Is Built
      </h3>
      
      {/* Desktop: Horizontal Flow */}
      <div className="hidden md:flex items-center justify-center gap-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div 
              className="flex flex-col items-center text-center p-6 w-56"
              style={{ 
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div 
                className="w-12 h-12 flex items-center justify-center mb-4"
                style={{ 
                  backgroundColor: 'rgba(24, 198, 232, 0.1)',
                  border: '1px solid rgba(24, 198, 232, 0.3)'
                }}
              >
                <step.icon 
                  size={24} 
                  style={{ color: 'var(--accent-primary)' }} 
                />
              </div>
              <p 
                className="text-sm font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {step.title}
              </p>
              <p 
                className="text-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                {step.description}
              </p>
            </div>
            
            {index < steps.length - 1 && (
              <ArrowRight 
                size={20} 
                style={{ color: 'var(--border-color)' }} 
              />
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Mobile: Vertical Flow */}
      <div className="md:hidden space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div 
                className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                style={{ 
                  backgroundColor: 'rgba(24, 198, 232, 0.1)',
                  border: '1px solid rgba(24, 198, 232, 0.3)'
                }}
              >
                <step.icon 
                  size={20} 
                  style={{ color: 'var(--accent-primary)' }} 
                />
              </div>
              {index < steps.length - 1 && (
                <div 
                  className="w-px h-8 mt-2"
                  style={{ backgroundColor: 'var(--border-color)' }}
                />
              )}
            </div>
            <div className="pt-1">
              <p 
                className="text-sm font-semibold mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {step.title}
              </p>
              <p 
                className="text-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
