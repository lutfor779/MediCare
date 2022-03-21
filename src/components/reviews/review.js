import { Col, Rate, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import React from 'react';

const Review = ({ review }) => {
    const { name, email, rating, comment } = review;

    return (
        <Row justify="center">
            <Col xs={24} md={15} lg={12}>
                <Title level={3}>
                    <span className="text-white">{name}</span>
                </Title>
                <Text type="warning">{email}</Text>
                <p className="text-white my-5">{comment}</p>
                <Rate disabled defaultValue={rating} />
            </Col>
        </Row>
    );
};

export default Review;
