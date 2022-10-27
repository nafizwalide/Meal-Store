import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <h1 className='header-name'>GOODFOOD</h1>
            <div className="link-site">
                <a href="/home">Home</a>
                <a href="/food">Food</a>
                <a href="/login">Log-in</a>
                <a href="/about">About</a>
            </div>
        
        </nav>
    );
};

export default Header;