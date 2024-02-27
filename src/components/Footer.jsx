import React from 'react';
import heart from '../assets/heart.svg';

const Footer = () => {
    return (
        <footer
            id="footer"
            className=" m-auto grid h-48 grid-rows-2 bg-portafino-600 bg-opacity-70 p-4 py-24 md:pl-20"
        >
            <div className="-mt-20 text-5xl font-thin italic md:-ml-12">
                Thanks for Stopping By!
            </div>
            <div className="flex h-12 items-end justify-end">
                Made with
                <span className="p-1 pr-2">
                    <img src={heart} alt="heart" className="h-4 w-4" />
                </span>
                <div className="">by Nathan Bornstein © 2024</div>
            </div>
        </footer>
    );
};

export default Footer;
