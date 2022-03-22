import {
    Button,
    Col,
    Collapse,
    Form,
    Input,
    InputNumber,
    message,
    Row,
} from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const { Panel } = Collapse;

const AddReview = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        setLoading(true);

        fetch('https://protected-tor-44006.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    message.success('Review added successfully');
                    navigate('/');
                } else {
                    message.error('Failed to book appointment');
                }
                setLoading(false);
            })
            .catch(() =>
                message
                    .error('Some error occurred')
                    .then(() => setLoading(false))
            );
    };

    return (
        <Row justify="center">
            <Col xs={24} sm={20} md={18} lg={16} xl={14} xxl={12}>
                <Collapse>
                    <Panel header="Give Feedback" key="1">
                        <Form
                            name="Give Review"
                            layout="vertical"
                            requiredMark={false}
                            initialValues={{
                                name: user.displayName,
                                email: user.email,
                                rating: '',
                                comment: '',
                            }}
                            onFinish={handleSubmit}
                        >
                            <Form.Item
                                label="Name"
                                name="name"
                                hasFeedback
                                validateFirst
                                rules={[
                                    {
                                        required: true,
                                        message: `Please enter patient's name`,
                                    },
                                    {
                                        min: 3,
                                        message:
                                            'Name should be at least 3 characters long',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Md. Lutfor Rahman"
                                    allowClear
                                />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="email"
                                hasFeedback
                                validateFirst
                                rules={[
                                    {
                                        required: true,
                                        message: `Please enter your email`,
                                    },
                                    {
                                        type: 'email',
                                        message: 'It is not the correct format',
                                    },
                                ]}
                            >
                                <Input disabled />
                            </Form.Item>

                            <Form.Item
                                label="Rate"
                                name="rating"
                                hasFeedback
                                validateFirst
                                rules={[
                                    {
                                        required: true,
                                        message: `Please provide rating`,
                                    },
                                    { type: 'number', min: 0, max: 5 },
                                ]}
                            >
                                <InputNumber
                                    placeholder="eg: 0 - 5"
                                    allowClear
                                    className="w-full"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Message"
                                name="comment"
                                hasFeedback
                                validateFirst
                                rules={[
                                    {
                                        required: true,
                                        message: `Please provide message`,
                                    },
                                ]}
                            >
                                <Input.TextArea placeholder="Write something..." />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    danger
                                    block
                                    disabled={loading}
                                    loading={loading}
                                >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Panel>
                </Collapse>
            </Col>
        </Row>
    );
};

export default AddReview;
