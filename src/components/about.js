import { Button, Col, Image, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutContent = () => {
    const navigate = useNavigate();

    return (
        <Row
            gutter={[{ xs: 16, md: 24, xl: 32 }, 16]}
            justify="center"
            align="middle"
        >
            <Col xs={24} sm={20} md={12} lg={10} xl={6}>
                <Image
                    preview={false}
                    src={
                        'http://www.valluvanadhospital.com/uploads/up_image/whoweare_bg.jpg'
                    }
                />
            </Col>
            <Col xs={24} sm={20} md={10} xl={6}>
                <div className="text-center md:text-left">
                    <Title level={2}>
                        We Are <span className="text-green-500">MediCare</span>{' '}
                        A Healthcare Provider
                    </Title>
                    <Text>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth. It is a paradisematic
                        country, in which roasted parts of sentences fly into
                        your mouth.
                    </Text>
                    <div className="mt-5" />
                    <Button
                        type="primary"
                        danger
                        onClick={() => navigate('/appointment')}
                    >
                        Make an Appointment
                    </Button>
                    <Button
                        type="primary"
                        ghost
                        onClick={() => navigate('/contact')}
                    >
                        Contact US
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

export default AboutContent;
