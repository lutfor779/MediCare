import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row, Spin } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { resisterUser, signInWithGoogle, isLoading } = useAuth();
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleRegistrationSubmit = (values) => {
        if (values.password !== values.confirmPassword) {
            alert('Password did not match');
            return;
        }
        resisterUser(
            values.email,
            values.confirmPassword,
            values.name,
            location,
            navigate,
            setLoading
        );
    };
    return (
        <div>
            {isLoading && <Spin />}
            <Row
                justify="space-around"
                align="middle"
                style={{ height: '100vh' }}
            >
                <Col xs={22} sm={18} md={12} lg={10} xl={10} xxl={8}>
                    <Card>
                        <Form
                            name="login"
                            initialValues={{ remember: true }}
                            onFinish={handleRegistrationSubmit}
                        >
                            <Form.Item className="text-center">
                                <Title level={3}>Resister</Title>
                            </Form.Item>

                            <Form.Item
                                name="name"
                                hasFeedback
                                validateFirst
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please input your first name!',
                                    },
                                    {
                                        min: 3,
                                        message:
                                            'Name should be at least 3 characters long',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <UserOutlined className="site-form-item-icon" />
                                    }
                                    placeholder="Full Name"
                                    allowClear
                                />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                hasFeedback
                                validateFirst
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                    {
                                        type: 'email',
                                        message: 'It is not the correct format',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <MailOutlined className="site-form-item-icon" />
                                    }
                                    placeholder="Email"
                                    allowClear
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                hasFeedback
                                validateFirst
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                    {
                                        min: 6,
                                        message:
                                            'Password should be at least 6 charecters long',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <LockOutlined className="site-form-item-icon" />
                                    }
                                    type="password"
                                    placeholder="Password"
                                    allowClear
                                />
                            </Form.Item>

                            <Form.Item
                                name="confirmPassword"
                                hasFeedback
                                validateFirst
                                dependencies={['password']}
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please confirm your Password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (
                                                !value ||
                                                getFieldValue('password') ===
                                                    value
                                            ) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(
                                                new Error(
                                                    'The two passwords that you entered do not match!'
                                                )
                                            );
                                        },
                                    }),
                                ]}
                            >
                                <Input
                                    prefix={
                                        <LockOutlined className="site-form-item-icon" />
                                    }
                                    type="password"
                                    placeholder="Confirm Password"
                                    allowClear
                                />
                            </Form.Item>

                            <Form.Item className="text-center">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    danger
                                    block
                                    loading={loading}
                                    disabled={loading}
                                >
                                    Sign up
                                </Button>
                            </Form.Item>

                            <Row justify="space-between" align="middle">
                                <Col>
                                    <Text>Already have an account?</Text>
                                </Col>

                                <Col>
                                    <Link to="/auth/login">Login now!</Link>
                                </Col>
                            </Row>
                        </Form>
                        <Button
                            type="primary"
                            ghost
                            block
                            onClick={() => signInWithGoogle(location, navigate)}
                        >
                            Google Login
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Register;
