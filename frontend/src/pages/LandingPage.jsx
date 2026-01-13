import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { TheIntegrityLabsSection } from '../components/TheIntegrityLabsSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { CommunityTracksSection } from '../components/CommunityTracksSection';
import { MakerspaceSection } from '../components/MakerspaceSection';
import { Footer } from '../components/Footer';

const LandingPage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TheIntegrityLabsSection />
        <HowItWorksSection />
        <CommunityTracksSection />
        <MakerspaceSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
