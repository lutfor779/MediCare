import { Space } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import AboutContent from '../../components/about';
import HomeBanner from '../../components/banners/homeBanner';
import ServiceBanner from '../../components/banners/serviceBanner';
import AppLayout from '../../components/layout/app/appLayout';
import OurDepartments from '../../components/ourDepartments';
import OurServices from '../../components/ourServices';
import Reviews from '../../components/reviews/reviews';
import Statistics from '../../components/statistics';

const HomePage = () => {
    return (
        <AppLayout>
            <Space direction="vertical" size={45} className="w-full">
                <HomeBanner />
                <AboutContent />
                <Title level={2}>Our Services</Title>
                <OurServices />
                <Statistics />
                <Title level={2}>Our Departments</Title>
                <OurDepartments />
                <ServiceBanner />
                <Title level={2}>Our Client Says</Title>
                <Reviews />
            </Space>
        </AppLayout>
    );
};

export default HomePage;
