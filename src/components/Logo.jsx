import React from 'react';
import logo from '../assets/logo-1.svg';

const Logo = () => {
    return (
        <a href="#home">
            <div className="top-15 absolute -right-10 hidden md:block">
                <img src={logo} alt="logo" className="h-[18rem] w-[18rem]" />
            </div>
        </a>
    );
};

export default Logo;
