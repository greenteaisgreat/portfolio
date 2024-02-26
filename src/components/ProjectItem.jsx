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
                <h3 className="text-center text-5xl font-bold tracking-wider text-gray-800 drop-shadow-xl">
                    {title}
                </h3>
                <p className="pt-8 text-center text-xl font-bold text-black drop-shadow-xl">
                    {description}
                </p>
                <p className="pb-12 pt-8 text-center text-sm font-bold text-black drop-shadow-xl">
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
