import React from 'react';

const ProjectItem = ({ img, title }) => {
    return (
        <div className="rounded-xl bg-stone-200">
            <img src={img} alt={title} className="rounded-t-xl" />
            <div className="group relative flex h-auto w-full items-center justify-center rounded-b-xl from-portafino-500 to-portage-500  hover:bg-gradient-to-r">
                <h3 className="rounded-b-xl">{title}</h3>
            </div>
        </div>
    );
};

export default ProjectItem;
