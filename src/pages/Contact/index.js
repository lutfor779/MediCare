import { Card, Col, Row, Space } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import Banner from '../../components/banners/banner';
import ServiceBanner from '../../components/banners/serviceBanner';
import AppLayout from '../../components/layout/app/appLayout';

const Contact = () => {
    return (
        <AppLayout>
            <Space direction="vertical" size={45} className="w-full">
                <Banner name={'Contact Us'} detail={'Get In Touch'} />
                <div className="container mx-auto">
                    <Row gutter={[16, 16]} justify="center" align="middle">
                        <Col
                            xs={24}
                            sm={20}
                            md={8}
                            className="h-36 md:h-52 lg:h-60 grid content-center"
                        >
                            <Card hoverable>
                                <Meta
                                    title="Call Us"
                                    description="+880-1235-134567"
                                />
                            </Card>
                        </Col>
                        <Col
                            xs={24}
                            sm={20}
                            md={8}
                            className="h-36 md:h-52 lg:h-60 grid content-center"
                        >
                            <Card hoverable>
                                <Meta
                                    title="Email Us"
                                    description="mdlrrahman779@gmail.com"
                                />
                            </Card>
                        </Col>
                        <Col
                            xs={24}
                            sm={20}
                            md={8}
                            className="h-36 md:h-52 lg:h-60 grid content-center"
                        >
                            <Card hoverable>
                                <Meta
                                    title="Location"
                                    description="Uttara, Dhaka, Bangladesh"
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
                <ServiceBanner />
            </Space>
        </AppLayout>
    );
};

export default Contact;
