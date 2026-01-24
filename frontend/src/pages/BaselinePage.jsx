import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BaselineFlowDiagram } from '../components/BaselineFlowDiagram';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfiMV_Fh8Anijt0xWD8e-InD9RfCBcdMJ-RhJoUP4OMg-6BeA/viewform?usp=header';

const BaselinePage = () => {
  const handleStartConversation = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <Header />
      <main className="flex-grow pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
          {/* Back to Home */}
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors duration-300"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Title */}
              <section>
                <h1 className="text-display mb-2">
                  <span style={{ color: 'var(--text-primary)' }}>Baseline</span>
                </h1>
                <p 
                  className="text-body-lg"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  The Student Conversation Space
                </p>
              </section>
              
              {/* Core Philosophy */}
              <section 
                className="p-5"
                style={{ 
                  backgroundColor: 'var(--bg-surface)',
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
              
              {/* What Happens Here */}
              <section>
                <h2 
                  className="text-base font-semibold mb-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  What Happens Here
                </h2>
                <p 
                  className="text-body mb-4"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Inside the community, you can:
                </p>
                <ul className="space-y-3">
                  {[
                    "Talk to mentors and professionals who've worked in the field",
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
              
              {/* Monetization Boundary */}
              <section 
                className="p-5"
                style={{ 
                  backgroundColor: 'var(--bg-surface)',
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
              
              {/* Who This Is For */}
              <section>
                <h2 
                  className="text-base font-semibold mb-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Who This Is For
                </h2>
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
              
              {/* CTA */}
              <div className="pt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
                <button
                  onClick={handleStartConversation}
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
            
            {/* Right Column - Visual */}
            <div 
              className="p-6 lg:p-8 h-fit lg:sticky lg:top-28"
              style={{ 
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-color)'
              }}
            >
              <BaselineFlowDiagram />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BaselinePage;
