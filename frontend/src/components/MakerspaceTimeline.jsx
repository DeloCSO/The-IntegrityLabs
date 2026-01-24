import React from 'react';

export const MakerspaceTimeline = () => {
  const steps = [
    {
      label: '01',
      title: 'Application',
      description: 'Founders apply with a real idea or product. Selection is based on clarity and readiness — not polish.'
    },
    {
      label: '02',
      title: 'Preparation',
      description: 'Sharpen your narrative. Stress-test assumptions. Get honest before the room.'
    },
    {
      label: '03',
      title: 'Live Sessions',
      description: 'Present to operators, investors, and builders. Receive direct, unfiltered feedback.',
      emphasis: true
    },
    {
      label: '04',
      title: 'Working Conversations',
      description: 'Real discussions about product, market, and judgment. Interest continues or it doesn't.'
    },
    {
      label: '05',
      title: 'Outcomes',
      description: 'Leave with clarity, refined materials, and honest signal. Follow-ups are earned, not promised.'
    }
  ];

  return (
    <div className="py-2">
      <p 
        className="text-xs uppercase tracking-wider mb-6"
        style={{ color: 'var(--text-muted)' }}
      >
        How the event works
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
                style={{ 
                  color: step.emphasis ? 'var(--accent-primary)' : 'var(--text-muted)', 
                  minWidth: '24px' 
                }}
              >
                {step.label}
              </span>
              <div>
                <p 
                  className="text-base font-medium mb-1"
                  style={{ 
                    color: step.emphasis ? 'var(--accent-primary)' : 'var(--text-primary)' 
                  }}
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
      
      {/* Event nature statement */}
      <p 
        className="text-xs mt-6 pt-4"
        style={{ 
          color: 'var(--text-muted)',
          borderTop: '1px solid var(--border-color)'
        }}
      >
        This is an event, not a program. Funding is possible, not guaranteed.
      </p>
    </div>
  );
};
