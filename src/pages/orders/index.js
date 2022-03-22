import { Button, Card, Col, message, Row, Space } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/banners/banner';
import ServiceBanner from '../../components/banners/serviceBanner';
import AppLayout from '../../components/layout/app/appLayout';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    let [bill, setBill] = useState(0);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(
            `https://protected-tor-44006.herokuapp.com/orders?email=${user.email}`
        )
            .then((res) => res.json())
            .then((data) => {
                for (let item of data) {
                    setBill((bill += item.price));
                }
            });
    }, []);

    const handleRequest = () => {
        const data = {
            email: user.email,
            displayName: user.displayName,
            specialUser: false,
            request: true,
        };

        fetch('https://protected-tor-44006.herokuapp.com/special-users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.upsertedCount || data.matchedCount) {
                    message.success('Request Successfully');
                    navigate('/');
                }
            })
            .catch(() => message.error('Some problem occurred'));
    };

    return (
        <AppLayout>
            <Space direction="vertical" size={45} className="w-full">
                <Banner name={'Orders'} detail={'My Bills'} />
                <Row
                    gutter={[{ xs: 16, md: 24, xl: 32 }, 16]}
                    justify="center"
                    align="middle"
                >
                    <Col xs={24} sm={20} md={12} xl={8}>
                        <Card hoverable>
                            <Meta
                                title={user.displayName}
                                description={user.email}
                            />
                            <div className="my-5">
                                <p>Bill: {bill}</p>
                            </div>
                            <Button
                                type="primary"
                                danger
                                ghost
                                onClick={handleRequest}
                            >
                                Request for 25% Discount
                            </Button>
                        </Card>
                    </Col>
                </Row>
                <ServiceBanner />
            </Space>
        </AppLayout>
    );
};

export default MyOrders;
