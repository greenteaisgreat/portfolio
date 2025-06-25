import ProjectItem from './ProjectItem';
import prevueImg from '../assets/prevue.png';
import ticketingImg from '../assets/ticketing.png';
import wurdleImg from '../assets/wurdle.png';
import aplImg from '../assets/apl.png';

const Projects = () => {
    return (
        <div className="h-full w-full bg-portage-400">
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
                        img={aplImg}
                        title="Austin Public Library"
                        description="Revamped APL's Room Booking Process"
                        language="Crafted with React Router, Tailwind-USWDS and MapBox"
                        link="https://library.austintexas.gov/meeting-rooms/"
                    />
                    <ProjectItem
                        img={prevueImg}
                        title="PreVue3"
                        description="All-in-One Prototyping Tool for Vue Engineers"
                        language="Crafted with Vue.js, Express.js & MongoDB"
                        link="https://prevue3.vercel.app/"
                    />
                    <ProjectItem
                        img={wurdleImg}
                        title="Würdle"
                        description="Like Wordle, But Way Better"
                        language="Crafted with React.js, Express.js & PostgreSQL"
                        link="https://wvvrdle.vercel.app/"
                    />
                    <ProjectItem
                        img={ticketingImg}
                        title="I.T. (Intuitive Ticketing)"
                        description="Ticketing Application with Style & Poise"
                        language="Crafted with Next.js, Next Router & MongoDB"
                        link="https://intuitive-ticketing.vercel.app/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
