import React from 'react';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
    const history = useHistory();

    const handleLogin = () => {
        // Mock login function
        history.push('/tasks');
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
                Login
            </button>
        </div>
    );
};

export default LandingPage;
