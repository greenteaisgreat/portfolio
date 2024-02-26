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
                id="projects"
                className="m-auto max-w-[1040px] p-4 py-12 md:pl-20"
            >
                <h1 className="text-center text-4xl font-bold text-[#001b5e]">
                    Open-Source Contributions
                </h1>
                <p className="py-8 text-center">
                    I'm of the firm belief that the web we've all come to know
                    and love (and heavily rely upon) has its backbone built upon
                    open-source technologies. As a proponent of this ideology, I
                    strive to collaborate on open-source projects, be it from
                    friends I know in person or friends from across the globe.
                    Here's a sample of some of my works:
                </p>
                <div className="grid gap-12 sm:grid-cols-2">
                    <ProjectItem img={prevueImg} title="PreVue" />
                    <ProjectItem img={pomonotoImg} title="Pomonoto!" />
                    <ProjectItem img={weatherImg} title="Weather.io" />
                    <ProjectItem
                        img={stopSmokingImg}
                        title="Stop Smoking Tracker"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
