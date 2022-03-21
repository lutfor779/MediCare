import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeBanner = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-img4 h-60 lg:h-80 xl:h-96">
            <div className=" w-full h-full flex justify-start items-center">
                <div className="pl-4 sm:pl-20 md:pl-24 lg:pl-28 xl:pl-36 w-4/5 md:w-2/3">
                    <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left font-extrabold w-4/5 text-green-500">
                        MediCare
                    </p>
                    <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-left font-bold w-4/5">
                        Your Most Trusted Health Partner
                    </p>

                    <div className="text-left mt-5">
                        <Button
                            type="primary"
                            danger
                            onClick={() => navigate('/appointment')}
                        >
                            Bool an Appointment
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
