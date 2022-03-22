import { DeleteOutlined } from '@ant-design/icons';
import {
    Button,
    List,
    message,
    PageHeader,
    Popconfirm,
    Space,
    Tooltip,
} from 'antd';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../components/layout/admin/adminLayout';

const HandleReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.log(err));
    }, [changed]);

    const handleApproved = (id, current = 'Pending') => {
        const status = current === 'Pending' ? 'Approved' : 'Pending';
        fetch(`http://localhost:5000/reviews`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ id, status }),
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

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    const remaining = reviews.filter((data) => data._id !== id);
                    setReviews(remaining);
                    message.success('Review deleted successfully');
                }
            })
            .catch(() => message.error('Some problem occurred!'));
    };

    return (
        <AdminLayout>
            <Space direction="vertical" size={45} className="w-full">
                <PageHeader title="Manage Reviews" />
                <List
                    className="text-left px-1 sm:px-3 md:px-5"
                    itemLayout="horizontal"
                    dataSource={reviews}
                    renderItem={(item) => (
                        <List.Item
                            actions={[
                                <Button
                                    type="text"
                                    onClick={() =>
                                        handleApproved(item._id, item.status)
                                    }
                                >
                                    {item.status || 'Pending'}
                                </Button>,
                                <Popconfirm
                                    title="Are you sure you want to delete this review?"
                                    onConfirm={() => handleDelete(item._id)}
                                    okText="Yes"
                                    cancelText="No"
                                    placement="topRight"
                                >
                                    <Tooltip title="Delete">
                                        <Button
                                            type="text"
                                            danger
                                            icon={<DeleteOutlined />}
                                        />
                                    </Tooltip>
                                </Popconfirm>,
                            ]}
                        >
                            <List.Item.Meta
                                title={item.name}
                                description={
                                    <div className="hidden md:block">
                                        {item.comment}
                                    </div>
                                }
                            />
                            <div className="hidden sm:block">
                                Rating: {item.rating}
                            </div>
                        </List.Item>
                    )}
                />
            </Space>
        </AdminLayout>
    );
};

export default HandleReviews;
