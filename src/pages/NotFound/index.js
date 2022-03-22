import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container px-3 mt-8 mx-auto">
            <div
                style={{
                    marginTop: '25px',
                    minWidth: '300px',
                    maxWidth: '800px',
                    margin: 'auto',
                    paddingTop: '3rem',
                }}
            >
                <img
                    src="https://cdn.dribbble.com/users/605899/screenshots/4144886/pikabu.gif"
                    alt="not found"
                    style={{ borderRadius: '1rem' }}
                />
            </div>
            <div className="p-3">
                <Link to="/">Go to home</Link>
            </div>
        </div>
    );
};

export default NotFound;
