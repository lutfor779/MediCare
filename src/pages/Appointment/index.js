import {
    Button,
    Col,
    DatePicker,
    Form,
    Input,
    message,
    Row,
    Select,
    Space,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/banners/banner';
import AppLayout from '../../components/layout/app/appLayout';
import Reviews from '../../components/reviews/reviews';
import useAuth from '../../hooks/useAuth';

const Appointment = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [departments, setDepartments] = useState([]);
    const time = [
        '8.00am - 10.30am',
        '9.30am - 11.30am',
        '10.30am - 1.00pm',
        '11.30am - 1.00pm',
        '2.00pm - 4.30pm',
        '3.00pm -5.00pm',
        '4.30pm -6.30pm',
        '5.00pm - 8.30pm',
        '6.30pm -10.30pm',
        '8.30pm - 11.30pm',
    ];
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://protected-tor-44006.herokuapp.com/departments')
            .then((res) => res.json())
            .then((data) => setDepartments(data))
            .catch((err) => console.log(err));
    }, []);

    const handleSubmit = (values) => {
        setLoading(true);

        fetch('https://protected-tor-44006.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    message.success('Appointment Successfully Booked');
                    navigate('/');
                } else {
                    message.error('Failed to book appointment');
                }
                setLoading(false);
            })
            .catch(() =>
                message
                    .error('Failed to book appointment')
                    .then(() => setLoading(false))
            );
    };

    return (
        <AppLayout>
            <Space direction="vertical" size={45} className="w-full">
                <Banner name={'Book Your Seat'} detail={'Appointment'} />

                <Row justify="center">
                    <Col xs={24} sm={20} md={18} lg={16} xl={14} xxl={12}>
                        <Form
                            name="Book Appointment"
                            layout="vertical"
                            requiredMark={false}
                            initialValues={{
                                name: user.displayName,
                                email: user.email,
                                department: '',
                                date: '',
                                time: '',
                                phone: '',
                                message: '',
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
                                label="Department"
                                name="department"
                                hasFeedback
                                validateFirst
                                rules={[
                                    {
                                        required: true,
                                        message: `Please select any department`,
                                    },
                                ]}
                            >
                                <Select placeholder="Select an option">
                                    {departments.map((data) => (
                                        <Select.Option
                                            value={data.name}
                                            key={data._id}
                                        >
                                            {data.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="Date"
                                name="date"
                                hasFeedback
                                validateFirst
                                rules={[
                                    {
                                        required: true,
                                        message: `Please select any date`,
                                    },
                                ]}
                            >
                                <DatePicker className="w-full" />
                            </Form.Item>

                            <Form.Item
                                label="Time"
                                name="time"
                                hasFeedback
                                validateFirst
                                rules={[
                                    {
                                        required: true,
                                        message: `Please select any time`,
                                    },
                                ]}
                            >
                                <Select placeholder="Select an option">
                                    {time.map((data, index) => (
                                        <Select.Option value={data} key={index}>
                                            {data}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="Phone Number"
                                name="phone"
                                hasFeedback
                                validateFirst
                                rules={[
                                    {
                                        required: true,
                                        message: `Please enter contact number`,
                                    },
                                    {
                                        min: 10,
                                        message:
                                            'Phone number should be at least 10 characters long',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="eg: 1323586332"
                                    allowClear
                                    className="w-full"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Message"
                                name="message"
                                hasFeedback
                                validateFirst
                                rules={[
                                    {
                                        required: false,
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
                                    Appointment
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>

                <Reviews />
            </Space>
        </AppLayout>
    );
};

export default Appointment;
