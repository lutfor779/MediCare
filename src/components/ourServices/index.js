import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Service from './service';

const OurServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://protected-tor-44006.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="mx-auto">
            <Row
                gutter={[{ xs: 16, md: 24, xl: 32 }, 16]}
                justify="center"
                align="middle"
            >
                <Col xs={24} sm={20} md={18}>
                    <Row gutter={[16, 16]} justify="center">
                        {services.map((service) => (
                            <Service key={service._id} service={service} />
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default OurServices;
