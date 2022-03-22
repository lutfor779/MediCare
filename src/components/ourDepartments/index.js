import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Department from './department';

const OurDepartments = () => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetch('https://protected-tor-44006.herokuapp.com/departments')
            .then((res) => res.json())
            .then((data) => setDepartments(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="mx-auto py-12">
            <Row
                gutter={[{ xs: 16, md: 24, xl: 32 }, 16]}
                justify="center"
                align="middle"
            >
                <Col xs={24} sm={20} md={18}>
                    <Row gutter={[16, 16]} justify="center">
                        {departments.map((department) => (
                            <Department
                                key={department._id}
                                department={department}
                            />
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default OurDepartments;
