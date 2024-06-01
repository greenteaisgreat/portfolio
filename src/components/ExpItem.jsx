import React from 'react';

const ExpItem = ({ year, title, company, details }) => {
    return (
        <ol className="relative flex flex-col border-l border-stone-300 pt-8 md:flex-row">
            <li className="mb-10 ml-4 ">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-white bg-stone-300" />
                <p className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm">
                    <span className="inline-block rounded-md bg-[#001b5e] px-2 py-1 font-semibold text-white">
                        {year}
                    </span>
                    <span className="text-lg font-semibold text-[#001b5e]">
                        {title}
                    </span>
                    <span className="my-1 text-sm font-normal leading-none text-stone-400">
                        {company.toUpperCase()}
                    </span>
                </p>
                <p className="my-2 text-base font-normal text-stone-800">
                    {details}
                </p>
            </li>
        </ol>
    );
};

export default ExpItem;
