import React from 'react';
import ExpItem from './ExpItem';

const data = [
    {
        year: 'JAN 2024 - MAY 2024',
        title: 'Front End Engineer',
        company: 'Ameri-Cleaners',
        details:
            "Freelance styling contract for a dry-cleaning business in Renton, WA. The major improvements to the existing site were accomplished via Tailwind CSS for utility-based class systems and incorporating React's Polygon component together with Google Maps API to create a geofence around the perimeter of the business.\n\nThe latter was accomplished to increase CTA and goal conversion.",
    },
    {
        year: 'OCT 2023 - Present',
        title: 'Full Stack Engineer',
        company: 'OS Labs',
        details:
            'Open-source contribution for PreVue, a prototyping tool for Vue engineers to reduce the overhead commonly found within CI/CD pipelines between designers and developers. Created with Vue.js, PreVue is a fullstack application that allows for designers to harness their creative potential and immediately deliver the overall structure to developers who can begin two-steps ahead of the ideation process. I collaborated with a team for the third iterative version of PreVue and we received over 100 stars on our GitHub repository following the second week post-launch.',
    },
];

const Experience = () => {
    return (
        <div
            id="experience"
            className="m-auto max-w-[1040px] p-4 py-16 md:pl-20"
        >
            <h1 className="mb-14 text-center text-5xl font-bold text-[#203467]">
                Experience
            </h1>
            {data.map((item, idx) => (
                <ExpItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    company={item.company}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Experience;
