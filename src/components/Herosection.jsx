import React from 'react';

const Herosection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Left Side - Text Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Getting started
            <br />
            in Sonola
          </h1>
          <p className="hero-subtitle">
            Create intriguing marketing
            <br />
            contents with ease!
          </p>
          <button className="hero-cta-button">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="plus-icon"
            >
              <path 
                d="M12 5V19M5 12H19" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Start creating now
          </button>
        </div>

        {/* Right Side - Cards Grid */}
        <div className="hero-cards">
          
          {/* grpah card  */}
          <div className="hero-card stats-card">
            <h3 className="card-title">Increase Customer Retention by 85%</h3>
            <p className="card-subtitle">AI Summarised Reports</p>
            <div className="stats-graph">
                
              {/* Graph visualization placeholder */}
              <svg viewBox="0 0 200 80" className="graph-svg">
                <path 
                  d="M 0 60 Q 50 40, 100 45 T 200 20" 
                  fill="none" 
                  stroke="#3B82F6" 
                  strokeWidth="3"
                  className="graph-line"
                />
                <circle cx="0" cy="60" r="4" fill="#3B82F6" />
                <circle cx="100" cy="45" r="4" fill="#3B82F6" />
                <circle cx="200" cy="20" r="4" fill="#3B82F6" />
              </svg>
            </div>
          </div>

          {/* Top Right Card (3/4 visible) - Video/Team Lead Card */}
          <div className="hero-card video-card card-top-right">
            <div className="video-thumbnail">
              {/* Background image - teamlead.jpg */}
              <img 
                src="/teamlead.jpg" 
                alt="Emma Owens" 
                className="video-bg"
              />
              <div className="video-overlay">
                <button className="play-button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="video-info">
              <h4 className="video-title">Emma Owens</h4>
              <p className="video-subtitle">Lead Project Director</p>
            </div>
          </div>

          {/* Bottom Left Card - Collaborate Card */}
          <div className="hero-card collaborate-card">
            <h3 className="card-title-small">Collaborate</h3>
            <p className="card-subtitle-small">Invite people</p>
            <div className="avatar-group">
              {/* Avatar placeholders - Add team member images here */}
              <div className="avatar avatar-placeholder">
                {/* Replace with actual image: <img src="/team-member-1.jpg" alt="Team member" /> */}
              </div>
              <div className="avatar avatar-placeholder">
                {/* Replace with actual image: <img src="/team-member-2.jpg" alt="Team member" /> */}
              </div>
              <div className="avatar avatar-placeholder">
                {/* Replace with actual image: <img src="/team-member-3.jpg" alt="Team member" /> */}
              </div>
              <div className="avatar avatar-add">
                <span>+</span>
              </div>
            </div>
          </div>

          {/* Bottom Right Card (1/4 visible) - Integrations Card */}
          <div className="hero-card integrations-card card-bottom-right">
            <h3 className="card-title-small">Integrations</h3>
            <p className="card-subtitle-small">Connect with your favourite app</p>
            <div className="integration-icons">
              {/* Integration app icons */}
              <div className="integration-icon">
                {/* Figma icon placeholder */}
                <div className="icon-placeholder figma-icon"></div>
              </div>
              <div className="integration-icon">
                {/* Dropbox icon placeholder */}
                <div className="icon-placeholder dropbox-icon"></div>
              </div>
              <div className="integration-icon">
                {/* Google Drive icon placeholder */}
                <div className="icon-placeholder drive-icon"></div>
              </div>
              <div className="integration-icon">
                {/* More icons... */}
                <div className="icon-placeholder notion-icon"></div>
              </div>
            </div>
          </div>

          {/* Top Right Corner - Schedule Posts Card (partial view) */}
          <div className="hero-card schedule-card card-top-corner">
            <h3 className="card-title-small">Schedule Posts</h3>
            <p className="card-subtitle-small">Advanced Content Calendar</p>
            <div className="schedule-preview">
              {/* Calendar/Schedule preview placeholder */}
              <div className="schedule-thumbnail">
                {/* Add preview image here */}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Herosection;
