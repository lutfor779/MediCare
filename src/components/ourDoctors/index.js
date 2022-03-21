import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Doctor from './doctor';

const OurDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then((res) => res.json())
            .then((data) => setDoctors(data))
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
                        {doctors.map((doctor) => (
                            <Doctor key={doctor._id} doctor={doctor} />
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default OurDoctors;
