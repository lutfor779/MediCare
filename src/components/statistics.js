import { Card, Col, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import Counter from './counter';

const Statistics = () => {
    return (
        <div className="bg-img">
            <div className="bg-color">
                <div className="py-12 px-3">
                    <Row gutter={[16, 16]}>
                        <Col sx={24} sm={20} md={12} lg={6} className="w-full">
                            <Card.Grid className="w-full">
                                <Title level={3}>
                                    <Counter num={30} />
                                </Title>
                                <Text>
                                    <span className="text-white">
                                        Years of Experience
                                    </span>
                                </Text>
                            </Card.Grid>
                        </Col>

                        <Col sx={24} sm={20} md={12} lg={6} className="w-full">
                            <Card.Grid className="w-full">
                                <Title level={3}>
                                    <Counter num={45239} />
                                </Title>
                                <Text>
                                    <span className="text-white">
                                        Happy Patients
                                    </span>
                                </Text>
                            </Card.Grid>
                        </Col>

                        <Col sx={24} sm={20} md={12} lg={6} className="w-full">
                            <Card.Grid className="w-full">
                                <Title level={3}>
                                    <Counter num={105} />
                                </Title>
                                <Text>
                                    <span className="text-white">
                                        Number of Doctors
                                    </span>
                                </Text>
                            </Card.Grid>
                        </Col>

                        <Col sx={24} sm={20} md={12} lg={6} className="w-full">
                            <Card.Grid className="w-full">
                                <Title level={3}>
                                    <Counter num={500} />
                                </Title>
                                <Text>
                                    <span className="text-white">
                                        {'Number of Staffs'.toUpperCase()}
                                    </span>
                                </Text>
                            </Card.Grid>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
