import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { TfiGithub } from 'react-icons/tfi';
import { FaDev } from 'react-icons/fa';
import { RxLinkedinLogo } from 'react-icons/rx';

const Home = () => {
    const [textColor, setTextColor] = useState('#3A3698');
    return (
        <div
            id="home"
            className="to 90% h-screen w-full bg-gradient-to-r from-portafino-600 from-70% via-portage-500 via-70% to-portage-500"
        >
            <div className="sm: absolute left-0 top-0 h-screen w-full bg-white/20 pl-20 text-center">
                <div className="m-auto flex h-full w-full max-w-[700px] flex-col items-center justify-center sm:items-center md:items-start lg:items-start">
                    <h1 className=" text-4xl">Howdy! My name is Nathan</h1>
                    <h2 className="sm:items-start">
                        <div style={{ color: textColor }}>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    `I'm a Full Stack Engineer`,
                                    1000,
                                    `I'm a`,
                                    () => setTextColor('#781C99'),
                                    `I'm a Back End Engineer`,
                                    1000,
                                    `I'm a`,
                                    50,
                                    () => setTextColor('#278199'),
                                    `I'm a Front End Engineer`,
                                    1000,
                                    `I'm a`,
                                    50,
                                    () => setTextColor('#039917'),
                                    `I'm a Programmer`,
                                    1000,
                                    `I'm a`,
                                    50,
                                    () => setTextColor('#995172'),
                                    `I'm a Solderer`,
                                    1000,
                                    `I'm a`,
                                    50,
                                    () => setTextColor('#218C9E'),
                                    `I'm a Musician`,
                                    1000,
                                    `I'm a`,
                                    50,
                                    () => setTextColor('#42409E'),
                                    `I'm a Skate-Boarder`,
                                    1000,
                                    `I'm a`,
                                    50,
                                    () => setTextColor('#0F9E7E'),
                                    `I'm a Surfer`,
                                    1000,
                                    `I'm a`,
                                    50,
                                    () => setTextColor('#3A3698'),
                                ]}
                                speed={50}
                                style={{
                                    fontSize: '2em',
                                    textAlign: 'left',
                                }}
                                repeat={Infinity}
                            />
                        </div>
                    </h2>
                    <div>
                        <TfiGithub className="cursor-pointer" size={25} />
                        <RxLinkedinLogo className="cursor-pointer" size={25} />
                        <FaDev className="cursor-pointer" size={25} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
