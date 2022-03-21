import { Space } from 'antd';
import React from 'react';
import Banner from '../../components/banners/banner';
import ServiceBanner from '../../components/banners/serviceBanner';
import AppLayout from '../../components/layout/app/appLayout';
import OurDepartments from '../../components/ourDepartments';

const Departments = () => {
    return (
        <AppLayout>
            <Space direction="vertical" size={45} className="w-full">
                <Banner
                    name={'All Departments'}
                    detail={'MediCare Departments'}
                />
                <OurDepartments />
                <ServiceBanner />
            </Space>
        </AppLayout>
    );
};

export default Departments;
