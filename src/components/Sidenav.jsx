import React, { useState } from 'react';
import { CgMenuMotion } from 'react-icons/cg';
import { BiSolidHomeHeart } from 'react-icons/bi';
import { PiCodeBlockBold } from 'react-icons/pi';
import { RiOpenSourceLine } from 'react-icons/ri';
import { TfiWrite } from 'react-icons/tfi';
import { LuHeartHandshake } from 'react-icons/lu';
import logo from '../assets/new-logo.svg';

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
                size={50}
            />
            {nav ? (
                <div className="fixed z-20 flex h-screen w-full flex-col items-center justify-center bg-white/50">
                    <a
                        href="#home"
                        className="delay-40 m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-2xl bg-gray-100 p-4 shadow-lg shadow-gray-400 transition duration-300 ease-in-out hover:hover:-translate-y-1 hover:scale-110 hover:bg-persimmon-300 "
                    >
                        <BiSolidHomeHeart size={22} color="crimson" />
                        <span className="pl-1">Home</span>
                    </a>
                    <a
                        href="#experience"
                        className="delay-40 m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-2xl bg-gray-100 p-4 shadow-lg shadow-gray-400 transition duration-300 ease-in-out hover:hover:-translate-y-1 hover:scale-110 hover:bg-sea-buckthorn-200 "
                    >
                        <PiCodeBlockBold size={24} color="cornflowerblue" />
                        <span className="pl-1">Experience</span>
                    </a>
                    <a
                        href="#opensource"
                        className="delay-40 m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-2xl bg-gray-100 p-4 shadow-lg shadow-gray-400 transition duration-300 ease-in-out hover:hover:-translate-y-1 hover:scale-110 hover:bg-portafino-100 "
                    >
                        <RiOpenSourceLine size={24} color="mediumseagreen" />
                        <span className="pl-1">Open-Source Contributions</span>
                    </a>
                    <a
                        href="#home"
                        className="delay-40 m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-2xl bg-gray-100 p-4 shadow-lg shadow-gray-400 transition duration-300 ease-in-out hover:hover:-translate-y-1 hover:scale-110 hover:bg-reef-200 "
                    >
                        <TfiWrite size={22} color="sandybrown" />
                        <span className="pl-1">Resumé</span>
                    </a>
                    <a
                        href="#contact"
                        className="delay-40 m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-2xl bg-gray-100 p-4 shadow-lg shadow-gray-400 transition duration-300 ease-in-out hover:hover:-translate-y-1 hover:scale-110 hover:bg-portage-300"
                    >
                        <LuHeartHandshake size={22} color="brown" />
                        <span className="pl-1">Let's Chat!</span>
                    </a>
                </div>
            ) : null}

            <div className="fixed top-[25%] z-10 hidden md:block">
                <div className="flex flex-col">
                    <a
                        href="#home"
                        className="m-2 cursor-pointer rounded-2xl bg-gray-100 p-4 shadow-lg shadow-gray-400 transition duration-300 ease-in-out hover:hover:-translate-y-1 hover:scale-110 hover:bg-persimmon-300"
                    >
                        <BiSolidHomeHeart size={22} color="crimson" />
                        <span></span>
                    </a>
                    <a
                        href="#experience"
                        className="m-2 cursor-pointer rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 transition duration-300 ease-in-out hover:hover:-translate-y-1 hover:scale-110 hover:bg-sea-buckthorn-200"
                    >
                        <PiCodeBlockBold size={24} color="cornflowerblue" />
                    </a>
                    <a
                        href="#opensource"
                        className="m-2 cursor-pointer rounded-2xl bg-gray-100 p-4 shadow-lg shadow-gray-400 transition duration-300 ease-in-out hover:hover:-translate-y-1 hover:scale-110 hover:bg-portafino-100"
                    >
                        <RiOpenSourceLine size={24} color="mediumseagreen" />
                    </a>
                    <a
                        href="#home"
                        className="m-2 cursor-pointer rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 transition duration-300 ease-in-out hover:hover:-translate-y-1 hover:scale-110 hover:bg-reef-200"
                    >
                        <TfiWrite size={22} color="sandybrown" />
                    </a>
                    <a
                        href="#contact"
                        className="m-2 cursor-pointer rounded-2xl bg-gray-100 p-4 shadow-lg shadow-gray-400 transition duration-300 ease-in-out hover:hover:-translate-y-1 hover:scale-110 hover:bg-portage-300"
                    >
                        <LuHeartHandshake size={22} color="brown" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Sidenav;
