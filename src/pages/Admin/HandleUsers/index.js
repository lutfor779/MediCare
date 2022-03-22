import { Button, List, message, PageHeader, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../components/layout/admin/adminLayout';

const HandleUsers = () => {
    const [users, setUsers] = useState([]);
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        fetch('https://protected-tor-44006.herokuapp.com/special-users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.log(err));
    }, [changed]);

    const handleApproved = (email, current = false) => {
        const specialUser = current === false ? true : false;

        fetch(`https://protected-tor-44006.herokuapp.com/special-users`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ email, specialUser }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    message.success('Review Status changed');
                    setChanged(!changed);
                }
            })
            .catch((e) => message.error('Some problem occurred'));
    };

    return (
        <AdminLayout>
            <Space direction="vertical" size={45} className="w-full">
                <PageHeader title="Manage Special Users" />
                <List
                    className="text-left px-1 sm:px-3 md:px-5"
                    itemLayout="horizontal"
                    dataSource={users}
                    renderItem={(item) => (
                        <List.Item
                            actions={[
                                <Button
                                    type="text"
                                    onClick={() =>
                                        handleApproved(
                                            item.email,
                                            item.specialUser
                                        )
                                    }
                                >
                                    {item.specialUser ? 'Special' : 'Regular'}
                                </Button>,
                            ]}
                        >
                            <List.Item.Meta
                                title={item.displayName}
                                description={item.email}
                            />
                            <div className="hidden sm:block">
                                {item.request ? 'Requested' : 'Not Interest'}
                            </div>
                        </List.Item>
                    )}
                />
            </Space>
        </AdminLayout>
    );
};

export default HandleUsers;
