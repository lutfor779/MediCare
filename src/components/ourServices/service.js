import { Card, Col, Image } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, img } = service;
    const navigate = useNavigate();

    return (
        <Col
            xs={24}
            sm={20}
            md={12}
            xl={8}
            onClick={() => navigate(`/services/${_id}`)}
        >
            <Card
                hoverable
                cover={<Image src={img} height="200px" preview={false} />}
            >
                <Meta
                    title={name}
                    description="Lorem ipsum dolor. Necessitatibus rem velit. Natus veritatis nisi cumque quos dolores atque eveniet!"
                />
            </Card>
        </Col>
    );
};

export default Service;
