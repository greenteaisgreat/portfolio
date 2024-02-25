import React from 'react';
import smLogo from '../assets/sm-logo.svg';

const SmLogo = () => {
    return (
        <a href="#home">
            <div className="absolute left-4 top-4 md:hidden">
                <img
                    src={smLogo}
                    alt="small logo"
                    className="h-[5rem] w-[5rem]"
                />
            </div>
        </a>
    );
};

export default SmLogo;
