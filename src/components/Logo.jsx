import React from 'react';
import logo from '../assets/new-logo.svg';

const Logo = () => {
    return (
        <div className="top-15 absolute right-0">
            <img src={logo} alt="logo" className="h-[18rem] w-[18rem]" />
        </div>
    );
};

export default Logo;
