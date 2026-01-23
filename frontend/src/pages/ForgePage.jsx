import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ApplyModal } from '../components/ApplyModal';

const ForgePage = () => {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <Header />
      <main className="flex-grow pt-20 md:pt-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
          {/* Back to Baseline */}
          <Link 
            to="/baseline"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors duration-300"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <ArrowLeft size={16} />
            Back to Baseline
          </Link>
          
          <div className="space-y-8">
            {/* 1. Title */}
            <section>
              <h1 className="text-display mb-2">
                <span style={{ color: 'var(--text-primary)' }}>Forge</span>
              </h1>
              <p 
                className="text-body-lg"
                style={{ color: 'var(--accent-primary)' }}
              >
                Mentor-Led Project Execution at The IntegrityLabs
              </p>
            </section>
            
            {/* 2. What Forge Is */}
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
                  Forge is where conversation turns into execution.
                </span>
                <br /><br />
                After exploring Baseline and gaining clarity on what matters, students who want to go deeper can work directly with mentors on focused, real-world projects.
              </p>
            </section>
            
            {/* 3. What Happens in Forge */}
            <section>
              <h2 
                className="text-base font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                What Happens in Forge
              </h2>
              <ul className="space-y-3">
                {[
                  'Work on real projects with experienced mentors',
                  'Build portfolio-ready outcomes you can talk about',
                  'Get structured feedback throughout the process',
                  'Develop skills through doing, not just learning'
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
            
            {/* 4. How It Works */}
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
                This is a paid, structured engagement.
              </p>
              <p 
                className="text-body"
                style={{ color: 'var(--text-muted)' }}
              >
                Forge projects are scoped and priced individually based on the work involved. You only enter Forge when both you and the mentor agree it makes sense.
              </p>
            </section>
            
            {/* 5. Who Forge Is For */}
            <section>
              <h2 
                className="text-base font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Who Forge Is For
              </h2>
              <p 
                className="text-body mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                Forge is for students who:
              </p>
              <ul className="space-y-3">
                {[
                  'Have already explored Baseline and gained clarity',
                  'Are ready to commit time and effort to a focused project',
                  'Want tangible outcomes, not just knowledge',
                  'Understand the value of working with experienced mentors'
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
            
            {/* 6. CTA */}
            <div className="pt-6 mt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
              <button
                onClick={() => setApplyModalOpen(true)}
                className="w-full px-6 py-4 text-base font-semibold flex items-center justify-center gap-2 transition-colors duration-300"
                style={{ 
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--bg-primary)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#20d4f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
              >
                Express interest in Forge
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Apply Modal */}
      <ApplyModal 
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        type="student"
      />
    </div>
  );
};

export default ForgePage;
