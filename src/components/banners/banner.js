import React from 'react';

const Banner = ({ name, detail }) => {
    return (
        <div className="bg-img h-52 lg:h-60 xl:h-80">
            <div className=" w-full h-full flex justify-center items-center bg-color">
                <div>
                    <p className="text-white lg:text-base xl:text-xl">{name}</p>
                    <p className="text-white text-3xl lg:text-3xl xl:text-5xl font-bold">
                        {detail}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
