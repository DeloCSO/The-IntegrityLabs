import React from 'react';
import { siteData } from '../data/mock';

export const CommunityTracksSection = () => {
  const { communityTracks } = siteData;
  
  return (
    <section 
      id="community-tracks"
      className="py-16 md:py-24 px-6 md:px-8 lg:px-12"
      style={{ 
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)'
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 
          className="text-heading mb-12 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {communityTracks.title}
        </h2>
        
        {/* Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityTracks.tracks.map((track, index) => (
            <div 
              key={index}
              className="p-6"
              style={{ 
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-color)'
              }}
            >
              <h3 
                className="text-lg font-semibold mb-3"
                style={{ color: 'var(--accent-primary)' }}
              >
                {track.name}
              </h3>
              <p 
                className="text-body"
                style={{ color: 'var(--text-secondary)' }}
              >
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
