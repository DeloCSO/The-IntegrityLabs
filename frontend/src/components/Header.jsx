import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AuthModal } from './AuthModal';

export const Header = () => {
  const location = useLocation();
  const { user, loading, signOut } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
  };
  
  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-40"
        style={{ 
          backgroundColor: 'var(--bg-primary)', 
          borderBottom: '1px solid var(--border-color)' 
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Routes to Home */}
            <Link 
              to="/"
              className="flex items-center gap-1"
            >
              <span className="text-xl md:text-2xl font-bold">
                <span style={{ color: 'var(--text-primary)' }}>The </span>
                <span 
                  style={{ 
                    color: 'var(--accent-primary)',
                    textShadow: '0 0 20px rgba(24, 198, 232, 0.4)'
                  }}
                >
                  Integrity
                </span>
                <span style={{ color: 'var(--text-primary)' }}>Labs</span>
              </span>
            </Link>
            
            {/* Navigation */}
            <nav className="flex items-center gap-6 md:gap-8">
              <Link 
                to="/baseline"
                className="hidden md:block text-sm font-medium transition-colors duration-300"
                style={{ 
                  color: location.pathname === '/baseline'
                    ? 'var(--text-primary)' 
                    : 'var(--text-secondary)' 
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => {
                  if (location.pathname !== '/baseline') {
                    e.target.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                Baseline
              </Link>
              <Link 
                to="/makerspace"
                className="hidden md:block text-sm font-medium transition-colors duration-300"
                style={{ 
                  color: location.pathname === '/makerspace' 
                    ? 'var(--text-primary)' 
                    : 'var(--text-secondary)' 
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => {
                  if (location.pathname !== '/makerspace') {
                    e.target.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                Makerspace
              </Link>

              {/* Auth Button */}
              {!loading && (
                user ? (
                  <button
                    onClick={handleLogout}
                    className="text-sm font-medium px-4 py-2 transition-colors duration-300"
                    style={{ 
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-color)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.borderColor = 'var(--text-muted)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                    }}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => setAuthModalOpen(true)}
                    className="text-sm font-medium px-4 py-2 transition-colors duration-300"
                    style={{ 
                      backgroundColor: 'var(--accent-primary)',
                      color: 'var(--bg-primary)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#20d4f5'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
                  >
                    Login
                  </button>
                )
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />
    </>
  );
};
