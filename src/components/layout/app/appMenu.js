import {
    AimOutlined,
    ApartmentOutlined,
    ContactsOutlined,
    CrownOutlined,
    CustomerServiceOutlined,
    HomeOutlined,
    InfoCircleOutlined,
    LoginOutlined,
    LogoutOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AppMenu = () => {
    const { admin, user, logOut } = useAuth();
    const location = useLocation();

    const data = location.pathname.split('/');
    data.shift();

    return (
        <>
            <Link to="/">
                <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-green-500 py-4 flex justify-center">
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
                    <Menu.Item
                        key="services"
                        icon={<CustomerServiceOutlined />}
                    >
                        <Link to="/services">Services</Link>
                    </Menu.Item>
                    <Menu.Item key="packages" icon={<ShoppingOutlined />}>
                        <Link to="/packages">Packages</Link>
                    </Menu.Item>
                    <Menu.Item key="about" icon={<InfoCircleOutlined />}>
                        <Link to="/about">About</Link>
                    </Menu.Item>
                    <Menu.Item key="doctors" icon={<UserOutlined />}>
                        <Link to="/doctors">Doctors</Link>
                    </Menu.Item>
                    <Menu.Item key="department" icon={<ApartmentOutlined />}>
                        <Link to="/department">Departments</Link>
                    </Menu.Item>
                    <Menu.Item key="contact" icon={<ContactsOutlined />}>
                        <Link to="/contact">Contact</Link>
                    </Menu.Item>
                    <Menu.Item key="appointment" icon={<AimOutlined />}>
                        <Link to="/appointment">Appointment</Link>
                    </Menu.Item>
                    <Menu.Item key="orders" icon={<ShoppingCartOutlined />}>
                        <Link to="/orders">My Dues</Link>
                    </Menu.Item>
                </Menu>

                <Menu theme="dark" mode="inline">
                    {admin && (
                        <Menu.Item key="admin" icon={<CrownOutlined />}>
                            <Link to="/appointments">Admin</Link>
                        </Menu.Item>
                    )}
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

export default AppMenu;
