import React from 'react';

export const BaselineFlowDiagram = () => {
  const steps = [
    {
      label: '01',
      title: 'Conversation',
      description: 'Talk to people who have done the work.'
    },
    {
      label: '02',
      title: 'Direction',
      description: 'Understand what matters and what doesn't.'
    },
    {
      label: '03',
      title: 'Decision',
      description: 'Choose if and when to go deeper.'
    }
  ];

  return (
    <div className="py-2">
      <p 
        className="text-xs uppercase tracking-wider mb-6"
        style={{ color: 'var(--text-muted)' }}
      >
        How clarity is built
      </p>
      
      <div className="space-y-0">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="py-5"
            style={{ 
              borderTop: index === 0 ? '1px solid var(--border-color)' : 'none',
              borderBottom: '1px solid var(--border-color)'
            }}
          >
            <div className="flex items-baseline gap-4">
              <span 
                className="text-xs font-medium"
                style={{ color: 'var(--text-muted)', minWidth: '24px' }}
              >
                {step.label}
              </span>
              <div>
                <p 
                  className="text-base font-medium mb-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {step.title}
                </p>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
