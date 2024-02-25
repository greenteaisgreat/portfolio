import React from 'react';
import logo from '../assets/new-logo.svg';

const Logo = () => {
    return (
        <div className="top-15 sm:[780px]:hidden absolute right-0">
            <img src={logo} alt="logo" className="h-[16rem] w-[16rem]" />
        </div>
    );
};

export default Logo;
