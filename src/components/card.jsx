import React, { useState } from 'react';

const Card = () => {
  const [cards, setCards] = useState([
    // Row 1
    {
      id: 1,
      title: 'Web Page',
      description: 'Good products deserves good websites.',
      image: './public/visual.png',
    },
    {
      id: 2,
      title: 'Presentations',
      description: 'Easily edit our animated templates.',
      image: './public/Visual1.png',
    },
    {
      id: 3,
      title: 'Social Media',
      description: 'Everything you need for socials.',
      image: './public/Visual2.png',
    },
    {
      id: 4,
      title: 'Sales Pitch',
      description: 'Turn your dreams into reality',
      image: './public/visual3.png',
    },
    // Row 2
    {
      id: 5,
      title: 'Document',
      description: 'Mark · May 14, 2025',
      image: './public/Visual7.png',
    },
    {
      id: 6,
      title: 'Digital Marketing',
      description: 'Mark · May 14, 2025',
      image: './public/Visual4.png',
    },
    {
      id: 7,
      title: 'Web pages',
      description: 'Mark · May 14, 2025',
      image: './public/Visual6.png',
    },
    {
      id: 8,
      title: '60 Second Cut',
      description: 'Caroline · May 14, 2025',
      image: './public/Visual5.png',
    }
  ]);



  const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.88855 1.90849C7.07195 1.53687 7.60188 1.53687 7.78528 1.90849L9.13088 4.63497C9.20371 4.78255 9.34449 4.88483 9.50735 4.90849L12.5162 5.34571C12.9263 5.4053 13.0901 5.90928 12.7933 6.19855L10.6161 8.32082C10.4982 8.43569 10.4445 8.60119 10.4723 8.76339L10.9863 11.7601C11.0563 12.1685 10.6276 12.48 10.2608 12.2872L7.56958 10.8723C7.42392 10.7957 7.24991 10.7957 7.10424 10.8723L4.41305 12.2872C4.04623 12.48 3.61752 12.1685 3.68757 11.7601L4.20154 8.76339C4.22936 8.60119 4.17559 8.43569 4.05775 8.32082L1.88052 6.19855C1.58376 5.90928 1.74752 5.4053 2.15763 5.34571L5.16648 4.90849C5.32933 4.88483 5.47012 4.78255 5.54295 4.63497L6.88855 1.90849Z" stroke="#5F6367" strokeWidth="1.5" />
    </svg>
  );

  const RecentsIcon = () => (
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.8369 8C13.8369 11.5899 10.9268 14.5 7.33691 14.5C3.74706 14.5 0.836914 11.5899 0.836914 8C0.836914 4.41015 3.74706 1.5 7.33691 1.5C10.9268 1.5 13.8369 4.41015 13.8369 8Z" stroke="#5F6367" strokeWidth="1.5"/>
      <path d="M7.33691 4V8.50002L9.83691 11" stroke="#5F6367" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );



  return (
    <div className="cards-wrapper">
      {/* For You Header */}
      <div className="for-you-header">
        <StarIcon />
        <h2 className="for-you-text">For you</h2>
      </div>

      {/* Cards Grid - Row 1 */}
      <div className="cards-grid">
        {cards.slice(0, 4).map((card) => (
          <div key={card.id} className="project-card">
            <div className="project-card-inner">
              {/* Card Image/Background */}
              <div 
                className="project-card-image"
                style={{
                  backgroundImage: card.image ? `url(${card.image})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}
              />

              {/* Card Content */}
              <div className="project-card-content">
                <h3 className="project-card-title">{card.title}</h3>
                <p className="project-card-description">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recents Header */}
      <div className="recents-header">
        <RecentsIcon />
        <h2 className="recents-text">Recents</h2>
      </div>

      {/* Cards Grid - Row 2 */}
      <div className="cards-grid">
        {cards.slice(4, 8).map((card) => (
          <div key={card.id} className="project-card">
            <div className="project-card-inner">
              {/* Card Image/Background */}
              <div 
                className="project-card-image"
                style={{
                  backgroundImage: card.image ? `url(${card.image})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}
              />

              {/* Card Content */}
              <div className="project-card-content">
                <h3 className="project-card-title">{card.title}</h3>
                <p className="project-card-description">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
