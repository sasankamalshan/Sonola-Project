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

          {/* Increase Card */}
          <div className="hero-card stats-card">
            <h3 className="card-title">Increase Customer Retention by 85%</h3>
            <p className="card-subtitle">AI Summarised Reports</p>
            <div className="stats-graph">
              {/* Blue gradient graph with dots */}
              <svg viewBox="0 0 240 120" className="graph-svg" preserveAspectRatio="none">
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#007AFF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#007AFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Gradient fill area */}
                <path 
                  d="M 0 120 L 0 80 Q 60 60, 120 65 T 240 40 L 240 120 Z" 
                  fill="url(#graphGradient)"
                />
                
                {/* Main graph line */}
                <path 
                  d="M 0 80 Q 60 60, 120 65 T 240 40" 
                  className="graph-line"
                  strokeWidth="2"
                />
                
                {/* Data point circles */}
                        <circle cx="0" cy="80" r="2.5" fill="#007AFF" />
                        <circle cx="40" cy="70" r="2" fill="#007AFF" />
                        <circle cx="80" cy="65" r="2.5" fill="#007AFF" />
                        <circle cx="120" cy="65" r="3" fill="#007AFF" />
                        <circle cx="160" cy="55" r="2.5" fill="#007AFF" />
                        <circle cx="200" cy="45" r="2.5" fill="#007AFF" />
                        <circle cx="240" cy="40" r="3" fill="#007AFF" />
                        </svg>
                      </div>
                      </div>

                      {/* Video Card */}
                      <div className="hero-card video-card card-top-right">
                      <div className="video-thumbnail">
                        {/* Background image - teamlead.jpg */}
                        <img 
                        src="/teamlead.png" 
                        alt="Emma Owens" 
                        className="video-bg"
                        />
                        <div className="video-overlay">
                        <div className="name">
                          <h4 className="video-title">Emma Owens</h4>
                          <p className="video-subtitle">Lead Project Director</p>
                        </div>
                        <button className="play-button">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                          </svg>
                        </button>
                        </div>
                      </div>
                      
                     
                      </div>

                      {/* Bottom Left Card - Collaborate Card */}
                            <div className="hero-card collaborate-card card-bottom-left">
                            <h3 className="card-title-small">Collaborate</h3>
                            <p className="card-subtitle-small">Invite people</p>
                            <div className="avatar-group">
                              <div className="avatar avatar1">
                              <img src="/team-member1.jpg" alt="Team member 1" />
                              </div>
                              <div className="avatar avatar2">
                              <img src="/team-member2.jpg" alt="Team member 2" />
                              </div>
                              <div className="avatar avatar3">
                              <img src="/team-member3.jpg" alt="Team member 3" />
                              </div>
                              <div className="avatar avatar4">
                              <img src="/team-member4.jpg" alt="Team member 4" />
                              </div>
                            </div>
                            </div>

                            {/* Bottom Right Card (1/4 visible) - Integrations Card */}
          <div className="hero-card integrations-card card-bottom-right">
            <h3 className="card-title-large">Integrations</h3>
            <p className="card-subtitle-small">Connect with your favourite app</p>
            <div className="integration-logos">
              <img src="/public/Logos.png" alt="Integration apps" className="logos-image" />
            </div>
            
          </div>

          {/* card 5 - Schedule  */}
          <div className="hero-card schedule-card card-top-corner">
            <h3 className="card-title-small">Schedule Posts</h3>
            <p className="card-subtitle-small">Advanced Content Calendar</p>
            <div className="schedule-preview">
              {/* Calendar/Schedule preview placeholder */}
              <img src="/public/Schedule Posts.jpg" alt="Integration apps" className="logos-image" />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Herosection;
