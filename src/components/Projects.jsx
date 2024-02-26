import React from 'react';
import ProjectItem from './ProjectItem';
import prevueImg from '../assets/prevue.png';
import pomonotoImg from '../assets/pomonoto.png';
import weatherImg from '../assets/weatherIO.png';
import stopSmokingImg from '../assets/stop-smoking.png';

const Projects = () => {
    return (
        <div className="h-full w-full bg-portage-400 ">
            <div
                id="opensource"
                className="m-auto max-w-[1040px] p-4 py-16 md:pl-20"
            >
                <h1 className="text-center text-5xl font-bold text-black">
                    Open-Source Contributions
                </h1>
                <p className="py-8 pb-12 text-center text-xl font-medium">
                    I'm of the firm belief that the web we've all come to know
                    and love (and heavily rely upon) has its backbone built upon
                    open-source technologies. As a proponent of this ideology, I
                    strive to collaborate on open-source projects as often as I
                    can, be it from friends I know in person or friends from
                    across the globe. <br />
                    <br />
                    Here's a sample of some of my recent works:
                </p>
                <div className="-sm:grid-cols-2 grid gap-12 md:grid-cols-2">
                    <ProjectItem
                        img={prevueImg}
                        title="PreVue3"
                        description="All-in-One Prototyping Tool for Vue Engineers"
                        language="Crafted with Vue.js, Express.js & MongoDB"
                        link="https://github.com/oslabs-beta/PreVue3.0"
                    />
                    <ProjectItem
                        img={pomonotoImg}
                        title="Pomonoto!"
                        description="Combination Pomodoro Timer & Note Taking App"
                        language="Crafted with React.js, Express.js & MongoDB"
                        link="https://github.com/greenteaisgreat/Pomonoto"
                    />
                    <ProjectItem
                        img={weatherImg}
                        title="Weather.io"
                        description="Check the Weather Instantly! Powered by OpenWeatherMap"
                        language="Crafted with React.js, Express.js & PostgreSQL"
                        link="https://github.com/Weather-io/Weather.io"
                    />
                    <ProjectItem
                        img={stopSmokingImg}
                        title="Cessation Tracker"
                        description="Increase Your Chances of Quitting a Bad Habit via Cognizance"
                        language="Crafted with Vanilla JavaScript"
                        link="https://github.com/greenteaisgreat/stop-smoking-tracker"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
