import { Space } from 'antd';
import React from 'react';
import AboutContent from '../../components/about';
import Banner from '../../components/banners/banner';
import AppLayout from '../../components/layout/app/appLayout';
import Statistics from '../../components/statistics';

const About = () => {
    return (
        <AppLayout>
            <Space direction="vertical" size={45} className="w-full">
                <Banner name={'About'} detail={'About Us'} />
                <AboutContent />
                <Statistics />
            </Space>
        </AppLayout>
    );
};

export default About;
