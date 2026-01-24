import React from 'react';

export const MakerspaceTimeline = () => {
  const steps = [
    {
      number: 1,
      title: 'Application & Selection',
      description: 'Founders apply with their idea or product. We review for fit, commitment, and readiness.'
    },
    {
      number: 2,
      title: 'Preparation Phase',
      description: 'Selected founders receive structured guidance to refine their pitch, product narrative, and positioning.'
    },
    {
      number: 3,
      title: 'Feedback & Validation',
      description: 'Present to peers, operators, and mentors. Receive structured feedback on product and pitch.'
    },
    {
      number: 4,
      title: 'Investor Sessions',
      description: 'Participate in sessions with potential investors. Practice pitching in realistic conditions.'
    },
    {
      number: 5,
      title: 'Outcome & Next Steps',
      description: 'Leave with clarity, refined materials, and potential follow-up conversations — not promises.'
    }
  ];

  return (
    <div className="py-8">
      <h3 
        className="text-base font-semibold mb-8 text-center"
        style={{ color: 'var(--text-primary)' }}
      >
        How the Makerspace Event Works
      </h3>
      
      {/* Timeline Container */}
      <div className="relative max-w-2xl mx-auto">
        {/* Vertical Line - Desktop */}
        <div 
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ backgroundColor: 'var(--border-color)' }}
        />
        
        {/* Vertical Line - Mobile */}
        <div 
          className="md:hidden absolute left-5 top-0 bottom-0 w-px"
          style={{ backgroundColor: 'var(--border-color)' }}
        />
        
        {/* Steps */}
        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative flex items-start gap-4 md:gap-8 ${
                index % 2 === 0 
                  ? 'md:flex-row' 
                  : 'md:flex-row-reverse'
              }`}
            >
              {/* Number Badge - Mobile */}
              <div 
                className="md:hidden w-10 h-10 flex items-center justify-center flex-shrink-0 z-10"
                style={{ 
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--accent-primary)',
                  color: 'var(--accent-primary)'
                }}
              >
                <span className="text-sm font-bold">{step.number}</span>
              </div>
              
              {/* Content - Mobile */}
              <div className="md:hidden flex-1">
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
              
              {/* Desktop Layout */}
              <div className={`hidden md:flex items-start gap-6 w-full ${
                index % 2 === 0 ? 'justify-end' : 'justify-start'
              }`}>
                {/* Left Content (even steps) */}
                {index % 2 === 0 && (
                  <div className="w-5/12 text-right pr-4">
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
                )}
                
                {/* Number Badge - Desktop */}
                <div 
                  className="absolute left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center z-10"
                  style={{ 
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--accent-primary)',
                    color: 'var(--accent-primary)'
                  }}
                >
                  <span className="text-sm font-bold">{step.number}</span>
                </div>
                
                {/* Right Content (odd steps) */}
                {index % 2 !== 0 && (
                  <div className="w-5/12 text-left pl-4">
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
