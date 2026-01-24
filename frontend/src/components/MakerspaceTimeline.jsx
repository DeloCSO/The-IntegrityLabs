import React from 'react';

export const MakerspaceTimeline = () => {
  const steps = [
    {
      number: 1,
      title: 'Application & Selection',
      description: 'Founders apply with a real idea, product, or early traction. Selections are based on clarity of thinking, execution intent, and readiness to engage — not pitch polish.',
      note: 'This is not open admission. It is a curated room.'
    },
    {
      number: 2,
      title: 'Pre-Event Preparation',
      description: 'Selected founders go through a focused preparation phase. This includes sharpening the problem and solution narrative, stress-testing assumptions with operators, and refining what actually matters.',
      note: 'The goal is not perfection. It is honesty and preparedness.'
    },
    {
      number: 3,
      title: 'Live Makerspace Sessions',
      description: 'Founders present and discuss their product with experienced operators, active investors, and builders who have scaled or shut down companies. Feedback is direct, specific, and unfiltered.',
      note: 'Expect questions, pushback, and real-world perspectives — not applause.',
      isCore: true
    },
    {
      number: 4,
      title: 'Investor & Operator Interactions',
      description: 'Some sessions include investors who are actively evaluating ideas. These are working conversations around product clarity, market reality, and founder judgment.',
      note: 'If interest exists, conversations continue. If not, founders still leave with concrete insight.'
    },
    {
      number: 5,
      title: 'Outcomes & Follow-Ups',
      description: 'Founders leave with clear next steps, refined positioning and materials, and honest signal on where they stand. In some cases, this may lead to follow-up investor discussions or funding conversations.',
      note: 'Nothing is promised. Everything is earned.'
    }
  ];

  return (
    <div className="py-4">
      <h3 
        className="text-base font-semibold mb-8 text-center"
        style={{ color: 'var(--text-primary)' }}
      >
        How the Makerspace Event Actually Works
      </h3>
      
      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div 
          className="absolute left-5 md:left-6 top-0 bottom-0 w-px"
          style={{ backgroundColor: 'var(--border-color)' }}
        />
        
        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative flex items-start gap-4 md:gap-6"
            >
              {/* Number Badge */}
              <div 
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0 z-10"
                style={{ 
                  backgroundColor: step.isCore ? 'var(--accent-primary)' : 'var(--bg-surface)',
                  border: step.isCore ? 'none' : '1px solid var(--accent-primary)',
                  color: step.isCore ? 'var(--bg-primary)' : 'var(--accent-primary)'
                }}
              >
                <span className="text-sm font-bold">{step.number}</span>
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-2">
                <p 
                  className="text-sm font-semibold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {step.title}
                </p>
                <p 
                  className="text-xs mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {step.description}
                </p>
                {step.note && (
                  <p 
                    className="text-xs italic"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {step.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
