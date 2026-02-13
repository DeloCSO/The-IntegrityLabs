import React from 'react';

export const BaselineFlowDiagram = () => {
  return (
    <div className="py-2">
      {/* Section Title */}
      <h3 
        className="text-lg font-semibold mb-2"
        style={{ color: 'var(--text-primary)' }}
      >
        How Clarity Forms
      </h3>
      <p 
        className="text-sm mb-8"
        style={{ color: 'var(--text-muted)' }}
      >
        Not through courses. Not through calls. Through informed conversation.
      </p>
      
      {/* Steps */}
      <div className="space-y-8">
        {/* Step 01 */}
        <div 
          className="pt-6"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <p 
            className="text-xs uppercase tracking-wider mb-3"
            style={{ color: 'var(--text-muted)' }}
          >
            01
          </p>
          <p 
            className="text-base font-medium mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Conversation, not consumption
          </p>
          <p 
            className="text-sm mb-3"
            style={{ color: 'var(--text-secondary)' }}
          >
            Most platforms sell answers.<br />
            Baseline starts earlier, by helping you talk to people who have done the work, before you decide what is worth learning at all.
          </p>
          <p 
            className="text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            No scripts. No pitches. No selling.
          </p>
        </div>
        
        {/* Step 02 */}
        <div 
          className="pt-6"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <p 
            className="text-xs uppercase tracking-wider mb-3"
            style={{ color: 'var(--text-muted)' }}
          >
            02
          </p>
          <p 
            className="text-base font-medium mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Direction before skill acquisition
          </p>
          <p 
            className="text-sm mb-3"
            style={{ color: 'var(--text-secondary)' }}
          >
            Courses assume you already know what you need.<br />
            Baseline exists for the stage before that, when the problem is deciding what matters and what can be safely ignored.
          </p>
          <p 
            className="text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            Fewer skills. Better judgment.
          </p>
        </div>
        
        {/* Step 03 */}
        <div 
          className="pt-6"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <p 
            className="text-xs uppercase tracking-wider mb-3"
            style={{ color: 'var(--text-muted)' }}
          >
            03
          </p>
          <p 
            className="text-base font-medium mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Informed commitment, or no commitment
          </p>
          <p 
            className="text-sm mb-3"
            style={{ color: 'var(--text-secondary)' }}
          >
            Sometimes the outcome is going deeper.<br />
            Sometimes it's realizing you shouldn't — yet.<br />
            Baseline is designed to make both conclusions acceptable.
          </p>
          <p 
            className="text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            Clarity is the outcome. Action is optional.
          </p>
        </div>
      </div>
    </div>
  );
};
