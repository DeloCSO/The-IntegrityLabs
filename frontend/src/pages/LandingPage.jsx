import React, { useState } from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { Footer } from '../components/Footer';
import { DecisionModal } from '../components/DecisionModal';
import { StudentCommunityModal } from '../components/StudentCommunityModal';
import { MakerspaceModal } from '../components/MakerspaceModal';
import { ApplyModal } from '../components/ApplyModal';

const LandingPage = () => {
  // Modal states
  const [activeModal, setActiveModal] = useState(null); // null | 'decision' | 'student' | 'makerspace'
  const [applyModal, setApplyModal] = useState({ isOpen: false, type: null }); // type: 'student' | 'makerspace'
  
  // Close all modals and reset to hero
  const handleHomeClick = () => {
    setActiveModal(null);
    setApplyModal({ isOpen: false, type: null });
  };
  
  // Open decision modal
  const handleOpenDecisionModal = () => {
    setActiveModal('decision');
  };
  
  // Open student modal directly (from nav)
  const handleOpenStudentModal = () => {
    setActiveModal('student');
  };
  
  // Open makerspace modal directly (from nav)
  const handleOpenMakerspaceModal = () => {
    setActiveModal('makerspace');
  };
  
  // Navigate from decision to student
  const handleSelectStudent = () => {
    setActiveModal('student');
  };
  
  // Navigate from decision to makerspace
  const handleSelectMakerspace = () => {
    setActiveModal('makerspace');
  };
  
  // Back from student/makerspace to decision
  const handleBackToDecision = () => {
    setActiveModal('decision');
  };
  
  // Open apply modal for student
  const handleApplyStudent = () => {
    setApplyModal({ isOpen: true, type: 'student' });
  };
  
  // Open apply modal for makerspace
  const handleApplyMakerspace = () => {
    setApplyModal({ isOpen: true, type: 'makerspace' });
  };
  
  // Close apply modal
  const handleCloseApplyModal = () => {
    setApplyModal({ isOpen: false, type: null });
  };
  
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <Header 
        onHomeClick={handleHomeClick}
        onStudentClick={handleOpenStudentModal}
        onFounderClick={handleOpenMakerspaceModal}
      />
      <main className="flex-grow">
        <HeroSection onCtaClick={handleOpenDecisionModal} />
      </main>
      <Footer />
      
      {/* Decision Modal */}
      <DecisionModal 
        isOpen={activeModal === 'decision'}
        onClose={handleHomeClick}
        onSelectStudent={handleSelectStudent}
        onSelectMakerspace={handleSelectMakerspace}
      />
      
      {/* Student Community Modal */}
      <StudentCommunityModal 
        isOpen={activeModal === 'student'}
        onClose={handleHomeClick}
        onBack={handleBackToDecision}
        onApply={handleApplyStudent}
      />
      
      {/* Makerspace Modal */}
      <MakerspaceModal 
        isOpen={activeModal === 'makerspace'}
        onClose={handleHomeClick}
        onBack={handleBackToDecision}
        onApply={handleApplyMakerspace}
      />
      
      {/* Apply Modal */}
      <ApplyModal 
        isOpen={applyModal.isOpen}
        onClose={handleCloseApplyModal}
        type={applyModal.type}
      />
    </div>
  );
};

export default LandingPage;
