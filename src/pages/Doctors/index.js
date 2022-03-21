import { Space } from 'antd';
import React from 'react';
import Banner from '../../components/banners/banner';
import ServiceBanner from '../../components/banners/serviceBanner';
import AppLayout from '../../components/layout/app/appLayout';
import OurDoctors from '../../components/ourDoctors';

const Doctors = () => {
    return (
        <AppLayout>
            <Space direction="vertical" size={45} className="w-full">
                <Banner
                    name={'Our some Doctors'}
                    detail={'Qualified Doctors'}
                />
                <OurDoctors />
                <ServiceBanner />
            </Space>
        </AppLayout>
    );
};

export default Doctors;
