import { PageHeader, Space } from 'antd';
import React from 'react';
import AdminLayout from '../../../components/layout/admin/adminLayout';
import UsersContainer from '../../../components/makeAdmin';

const HandleAdmin = () => {
    return (
        <AdminLayout>
            <Space direction="vertical" size={45} className="w-full">
                <PageHeader title="Manage Admins" />
                <UsersContainer />
            </Space>
        </AdminLayout>
    );
};

export default HandleAdmin;
