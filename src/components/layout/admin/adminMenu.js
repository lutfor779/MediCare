import {
    AimOutlined,
    HomeOutlined,
    InfoCircleOutlined,
    LoginOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminMenu = () => {
    const { user, logOut } = useAuth();
    const location = useLocation();

    const data = location.pathname.split('/');
    data.shift();

    return (
        <>
            <Link to="/">
                <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-green-500 py-4">
                    MediCare
                </p>
            </Link>
            <div
                style={{
                    height: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={data[0] ? data[0] : 'home'}
                >
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="appointments" icon={<AimOutlined />}>
                        <Link to="/appointments">Appointments</Link>
                    </Menu.Item>
                    <Menu.Item key="handle-admin" icon={<InfoCircleOutlined />}>
                        <Link to="/handle-admin">Handle Admin</Link>
                    </Menu.Item>
                    <Menu.Item
                        key="handle-reviews"
                        icon={<InfoCircleOutlined />}
                    >
                        <Link to="/handle-reviews">Handle Reviews</Link>
                    </Menu.Item>
                </Menu>

                <Menu theme="dark" mode="inline">
                    {user.email ? (
                        <Menu.Item
                            key="1"
                            icon={<LogoutOutlined />}
                            onClick={logOut}
                        >
                            Logout
                        </Menu.Item>
                    ) : (
                        <Menu.Item key="1" icon={<LoginOutlined />}>
                            <Link to="/auth/login">Login</Link>
                        </Menu.Item>
                    )}
                </Menu>
            </div>
        </>
    );
};

export default AdminMenu;
