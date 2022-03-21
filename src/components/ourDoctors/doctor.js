import { Card, Col, Image } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { _id, name, department, img } = doctor;
    const navigate = useNavigate();

    return (
        <Col
            xs={24}
            sm={20}
            md={12}
            xl={8}
            onClick={() => navigate(`/doctors/${_id}`)}
        >
            <Card hoverable cover={<Image src={img} preview={false} />}>
                <Meta title={name} description={department.toUpperCase()} />
            </Card>
        </Col>
    );
};

export default Doctor;
