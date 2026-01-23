import React, { useState } from 'react';
import { X, Mail, Loader2, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const { signInWithEmail } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const { error } = await signInWithEmail(email);

    if (error) {
      setStatus('error');
      setErrorMessage(error.message);
    } else {
      setStatus('success');
    }
  };

  const handleClose = () => {
    setEmail('');
    setStatus('idle');
    setErrorMessage('');
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(5, 11, 16, 0.95)' }}
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-md"
        style={{ 
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)'
        }}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: '1px solid var(--border-color)' }}
        >
          <h2 
            className="text-lg font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            Log in
          </h2>
          <button
            onClick={handleClose}
            className="p-2 transition-colors duration-300"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {status === 'success' ? (
            <div className="text-center py-4">
              <CheckCircle 
                size={48} 
                className="mx-auto mb-4"
                style={{ color: 'var(--accent-primary)' }}
              />
              <p 
                className="text-body mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Check your email
              </p>
              <p 
                className="text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                We sent a magic link to {email}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="login-email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Email
                </label>
                <div className="relative">
                  <Mail 
                    size={18} 
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: 'var(--text-muted)' }}
                  />
                  <input
                    type="email"
                    id="login-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3 text-base outline-none transition-colors duration-300"
                    style={{ 
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              {status === 'error' && errorMessage && (
                <p 
                  className="text-sm"
                  style={{ color: '#ef4444' }}
                >
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-3 text-base font-semibold flex items-center justify-center gap-2 transition-colors duration-300 disabled:opacity-50"
                style={{ 
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--bg-primary)'
                }}
                onMouseEnter={(e) => {
                  if (status !== 'loading') e.currentTarget.style.backgroundColor = '#20d4f5';
                }}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send magic link'
                )}
              </button>

              <p 
                className="text-xs text-center"
                style={{ color: 'var(--text-muted)' }}
              >
                We&apos;ll send you a link to log in — no password needed.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
