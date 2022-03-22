import { Button, Card, Col, message, Row, Space } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import Banner from '../../components/banners/banner';
import AppLayout from '../../components/layout/app/appLayout';
import Statistics from '../../components/statistics';
import useAuth from '../../hooks/useAuth';

const Packages = () => {
    const { user } = useAuth();

    const handleOrder = (price) => {
        const orderDetails = {
            name: user.displayName,
            email: user.email,
            status: 'Pending',
            price: price,
        };

        fetch(`https://protected-tor-44006.herokuapp.com/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(orderDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    message.success('Package added successfully');
                }
            })
            .catch(() => message.error('Some problem occurred'));
    };

    return (
        <AppLayout>
            <Space direction="vertical" size={45} className="w-full">
                <Banner name={'Packages'} detail={'Special Packages'} />
                <div className="mx-auto py-12">
                    <Row
                        gutter={[{ xs: 16, md: 24, xl: 32 }, 16]}
                        justify="center"
                        align="middle"
                    >
                        <Col xs={24} sm={20} md={18}>
                            <Row gutter={[16, 16]} justify="center">
                                <Col xs={24} sm={20} md={12} xl={8}>
                                    <Card hoverable>
                                        <Meta
                                            title="Cardiac Screening"
                                            description={
                                                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, voluptatibus?'
                                            }
                                        />
                                        <div className="my-3">Price: 9,999</div>
                                        <Button
                                            type="primary"
                                            danger
                                            ghost
                                            onClick={() => handleOrder(9999)}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Card>
                                </Col>

                                <Col xs={24} sm={20} md={12} xl={8}>
                                    <Card hoverable>
                                        <Meta
                                            title="Home Health Check"
                                            description={
                                                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, voluptatibus?'
                                            }
                                        />
                                        <div className="my-3">
                                            Price: 15,499
                                        </div>
                                        <Button
                                            type="primary"
                                            danger
                                            ghost
                                            onClick={() => handleOrder(15499)}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Card>
                                </Col>

                                <Col xs={24} sm={20} md={12} xl={8}>
                                    <Card hoverable>
                                        <Meta
                                            title="Whole Body Check"
                                            description={
                                                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, voluptatibus?'
                                            }
                                        />
                                        <div className="my-3">
                                            Price: 25,000
                                        </div>
                                        <Button
                                            type="primary"
                                            danger
                                            ghost
                                            onClick={() => handleOrder(25000)}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Card>
                                </Col>

                                <Col xs={24} sm={20} md={12} xl={8}>
                                    <Card hoverable>
                                        <Meta
                                            title="Child Checkup"
                                            description={
                                                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, voluptatibus?'
                                            }
                                        />
                                        <div className="my-3">Price: 9,000</div>
                                        <Button
                                            type="primary"
                                            danger
                                            ghost
                                            onClick={() => handleOrder(9000)}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Card>
                                </Col>

                                <Col xs={24} sm={20} md={12} xl={8}>
                                    <Card hoverable>
                                        <Meta
                                            title="Cancer Checkup"
                                            description={
                                                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, voluptatibus?'
                                            }
                                        />
                                        <div className="my-3">
                                            Price: 15,500
                                        </div>
                                        <Button
                                            type="primary"
                                            danger
                                            ghost
                                            onClick={() => handleOrder(15500)}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Card>
                                </Col>

                                <Col xs={24} sm={20} md={12} xl={8}>
                                    <Card hoverable>
                                        <Meta
                                            title="Advanced Cardiac Checkup"
                                            description={
                                                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, voluptatibus?'
                                            }
                                        />
                                        <div className="my-3">
                                            Price: 19,900
                                        </div>
                                        <Button
                                            type="primary"
                                            danger
                                            ghost
                                            onClick={() => handleOrder(19900)}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Statistics />
            </Space>
        </AppLayout>
    );
};

export default Packages;
