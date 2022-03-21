import { Card, Col } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';

const Department = ({ department }) => {
    const { name } = department;
    return (
        <Col xs={24} sm={20} md={12} xl={8}>
            <Card hoverable>
                <Meta
                    title={name}
                    description={
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, voluptatibus?'
                    }
                />
            </Card>
        </Col>
    );
};

export default Department;
