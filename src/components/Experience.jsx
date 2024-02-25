import React from 'react';
import ExpItem from './ExpItem';

const data = [
    {
        year: '2024 - Present',
        title: 'Front End Engineer',
        company: 'Ameri-Cleaners',
        details:
            "Freelance styling contract for a dry-cleaning business in Renton, WA. The major improvements to the existing site were accomplished via Tailwind CSS for utility-based class systems and incorporating React's Polygon component together with Google's Maps API to create a geofence around with the perimeter of the business. The latter was accomplished to increase CTA and goal conversion.",
    },
    {
        year: '2023 - Present',
        title: 'Full Stack Engineer',
        company: 'OS Labs',
        details:
            'Open-source contribution for PreVue, a prototyping tool to streamline the CI/CD pipeline between developers and designers. Created with Vue.js, PreVue is a fullstack application that allows for designers to harness their creative potential and immediately deliver the overall structure to developers who can begin two-steps ahead of the ideation process. My team is the third group to iterate on this project and the version we delivered is PreVue 3.0, which has garnered over 100 stars on our GitHub repository.',
    },
];

const Experience = () => {
    return (
        <div className="m-auto max-w-[1040px] p-4 py-14 md:pl-20">
            <h1
                id="experience"
                className="mb-10 text-center text-4xl font-bold text-gray-800"
            >
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
