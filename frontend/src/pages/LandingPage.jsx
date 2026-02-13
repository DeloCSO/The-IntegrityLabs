import React, { useState } from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { Footer } from '../components/Footer';
import { DecisionModal } from '../components/DecisionModal';

const LandingPage = () => {
  const [decisionModalOpen, setDecisionModalOpen] = useState(false);

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <Header />
      <main className="flex-grow">
        <HeroSection onCtaClick={() => setDecisionModalOpen(true)} />
      </main>
      <Footer />
      
      {/* Decision Modal */}
      <DecisionModal 
        isOpen={decisionModalOpen}
        onClose={() => setDecisionModalOpen(false)}
      />
    </div>
  );
};

export default LandingPage;
