import React, { useState } from 'react';
import { X } from 'lucide-react';

export const ApplyModal = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });
  
  if (!isOpen) return null;
  
  const isStudent = type === 'student';
  
  const heading = isStudent 
    ? 'Apply to The IntegrityLabs Student Community'
    : 'Apply to Makerspace — by The IntegrityLabs';
  
  const messagePlaceholder = isStudent
    ? 'Tell us what you\'re trying to learn or explore'
    : 'Tell us briefly about what you\'re building';
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { type, ...formData });
  };
  
  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(5, 11, 16, 0.95)' }}
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col"
        style={{ 
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)'
        }}
      >
        {/* Modal Header */}
        <div 
          className="flex items-center justify-between px-6 py-4 flex-shrink-0"
          style={{ borderBottom: '1px solid var(--border-color)' }}
        >
          <h2 
            className="text-lg font-semibold pr-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {heading}
          </h2>
          <button
            onClick={onClose}
            className="p-2 transition-colors duration-300 flex-shrink-0"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Form Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label 
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 text-base outline-none transition-colors duration-300"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>
            
            {/* Email Field */}
            <div>
              <label 
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-base outline-none transition-colors duration-300"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>
            
            {/* WhatsApp Number Field */}
            <div>
              <label 
                htmlFor="whatsapp"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                WhatsApp Number
              </label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full px-4 py-3 text-base outline-none transition-colors duration-300"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>
            
            {/* Message Field */}
            <div>
              <label 
                htmlFor="message"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder={messagePlaceholder}
                className="w-full px-4 py-3 text-base outline-none transition-colors duration-300 resize-none"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-4 text-base font-semibold transition-colors duration-300"
              style={{ 
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--bg-primary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#20d4f5'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
