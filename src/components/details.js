import { Col, Image, Row, Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Banner from './banners/banner';
import ServiceBanner from './banners/serviceBanner';
import AppLayout from './layout/app/appLayout';
import AddReview from './reviews/addReview';

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    const location = useLocation();

    const pathName = location.pathname.split('/');
    pathName.shift();

    useEffect(() => {
        fetch(`http://localhost:5000/${pathName[0]}/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [id, pathName]);

    return (
        <AppLayout>
            <Space direction="vertical" size={45} className="w-full">
                <Banner
                    name={'Detail'}
                    detail={`${
                        pathName[0].charAt(0).toUpperCase() +
                        pathName[0].slice(1)
                    } details`}
                />

                <Row
                    gutter={[{ xs: 16, md: 24, xl: 32 }, 16]}
                    justify="center"
                    align="middle"
                >
                    <Col xs={24} sm={20} md={12} lg={10} xl={6}>
                        <Image preview={false} src={data.img} />
                    </Col>
                    <Col xs={24} sm={20} md={10} xl={6}>
                        <div className="text-center md:text-left">
                            <Title level={2}>{data.name}</Title>
                            {data.department ? (
                                <Text>{data.department}</Text>
                            ) : (
                                <Text type="secondary">
                                    Lorem ipsum dolor. Necessitatibus rem velit.
                                    Natus veritatis nisi cumque quos dolores
                                    atque eveniet!
                                </Text>
                            )}
                        </div>
                    </Col>
                </Row>
                <AddReview />
                <ServiceBanner />
            </Space>
        </AppLayout>
    );
};

export default Details;
