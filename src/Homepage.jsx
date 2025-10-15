import React from 'react';  
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();

    const goToWelcomePage = () => {
        navigate('/');
        
    };

    return (
        <div className='min-h-screen bg-[var(--background)] p-6'>
            <h1 className='text-3xl font-bold mb-4 text-[var(--text-primary)]'>Homepage</h1>
            <p className='text-[var(--text-secondary)] mb-6'>This is the homepage of the Sonola application.</p>
            <button 
                onClick={goToWelcomePage} 
                className='px-4 py-2 bg-[var(--button-bg)] text-[var(--button-text)] rounded hover:bg-[var(--button-hover-bg)]'
            >
                Go to Welcome Page
            </button>
        </div>
    );
};

export default Homepage;