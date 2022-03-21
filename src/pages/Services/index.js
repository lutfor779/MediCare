import { Space } from 'antd';
import React from 'react';
import Banner from '../../components/banners/banner';
import ServiceBanner from '../../components/banners/serviceBanner';
import AppLayout from '../../components/layout/app/appLayout';
import OurServices from '../../components/ourServices';

const Services = () => {
    return (
        <AppLayout>
            <Space direction="vertical" size={45} className="w-full">
                <Banner name={'Our Services'} detail={'What We Do'} />
                <OurServices />
                <ServiceBanner />
            </Space>
        </AppLayout>
    );
};

export default Services;
