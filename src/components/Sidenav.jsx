import React, { useState } from 'react';
import { CgMenuMotion } from 'react-icons/cg';
import { BiSolidHomeHeart } from 'react-icons/bi';

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <CgMenuMotion
                onClick={handleNav}
                className="absolute right-4 top-4 z-[99] md:hidden"
                size={35}
            />
            {nav ? (
                <div className="fixed z-20 flex h-screen w-full flex-col items-center justify-center bg-white/90">
                    <a
                        href="#main"
                        className="hover:bg-portafino-500 delay-50 m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 transition duration-300 ease-in-out hover:hover:-translate-y-1 hover:scale-110 "
                    >
                        <BiSolidHomeHeart size={22} />
                        <span className="pl-1">Home</span>
                    </a>
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
};

export default Sidenav;
