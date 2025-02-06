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
            <div className="h-screen w-full bg-white/20 pl-10 text-center">
                <div className="m-auto flex h-full w-full max-w-[700px] flex-col items-center justify-center sm:items-center md:items-start lg:items-start">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Howdy! My name is Nathan
                    </h1>
                    <h2 className="mt-4 text-sm xs:text-lg sm:items-start">
                        <div style={{ color: textColor }}>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    `I'm a Full Stack Engineer`,
                                    1000,
                                    `I'm a`,
                                    () => setTextColor('#3A3698'),
                                    `I'm a Back End Engineer`,
                                    1000,
                                    `I'm a`,
                                    50,
                                    () => setTextColor('#06D001'),
                                    `I'm a Front End Engineer`,
                                    1000,
                                    `I'm a`,
                                    50,
                                    () => setTextColor('#FDFFC2'),
                                    `I'm a Programmer`,
                                    1000,
                                    `I'm a`,
                                    50,
                                    () => setTextColor('#FF0060'),
                                    `I'm a Solderer`,
                                    1000,
                                    `I'm a`,
                                    50,
                                    () => setTextColor('#7C00FE'),
                                    `I'm a Musician`,
                                    1000,
                                    `I'm a`,
                                    50,
                                    () => setTextColor('#0079FF'),
                                ]}
                                speed={50}
                                style={{
                                    fontSize: '2em',
                                    textAlign: 'left',
                                    fontWeight: 'bold',
                                }}
                                repeat={Infinity}
                            />
                        </div>
                    </h2>
                    <div className="flex w-full max-w-[200px] justify-between pt-6">
                        <a
                            href="https://github.com/greenteaisgreat"
                            target="_blank"
                        >
                            <TfiGithub className="cursor-pointer" size={25} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nathangbornstein/"
                            target="_blank"
                        >
                            <RxLinkedinLogo
                                className="cursor-pointer"
                                size={25}
                            />
                        </a>
                        <a
                            href="https://dev.to/greenteaisgreat"
                            target="_blank"
                        >
                            <FaDev className="cursor-pointer" size={25} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
