import React from 'react';

const ProjectItem = ({ img, title, language, description, link }) => {
    return (
        <div className="group relative flex h-auto w-full items-center justify-center rounded-xl from-portafino-100  to-portage-300 hover:bg-gradient-to-r">
            <img
                src={img}
                alt={title}
                className="rounded-xl group-hover:opacity-30"
            />
            <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block">
                <h3 className="text-center text-5xl font-bold tracking-wider text-gray-800">
                    {title}
                </h3>
                <p className="text-md pt-5 text-center font-bold text-black">
                    {description}
                </p>
                <p className="text-md pb-12 pt-4 text-center font-bold text-black">
                    {language}
                </p>
                <a href={link}>
                    <p className="cursor-pointer rounded-lg bg-portage-300 p-3 text-center text-lg font-bold text-gray-700 hover:bg-portafino-100 active:bg-portage-600">
                        Check It Out!
                    </p>
                </a>
            </div>
        </div>
    );
};

export default ProjectItem;
