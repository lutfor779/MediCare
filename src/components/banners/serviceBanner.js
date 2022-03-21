import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceBanner = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-img3 h-52 lg:h-60 xl:h-80">
            <div className=" w-full h-full flex justify-start items-center">
                <div className="pl-4 sm:pl-20 md:pl-24 lg:pl-28 xl:pl-36 w-4/5 md:w-2/3">
                    <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-left font-bold w-4/5">
                        We are pleased to offer you the chance to have the
                        healthy
                    </p>

                    <div className="text-left mt-5">
                        <Button
                            type="primary"
                            danger
                            onClick={() => navigate('/appointment')}
                        >
                            Book an Appointment
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;
