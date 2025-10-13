import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();

    const goToWelcomePage = () => {
        navigate('/welcomepage');
    };

    return (
        <div>
            <h1>Homepage</h1>
            <button onClick={goToWelcomePage}>
                Go to Welcome Page
            </button>
        </div>
    );
};

export default Homepage;