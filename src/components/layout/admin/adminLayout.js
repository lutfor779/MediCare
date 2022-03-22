import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Layout } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumbContainer from '../../breadCrumb';
// @ts-ignore
import AppMenu from './adminMenu';

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = (props) => {
    const [visible, setVisible] = useState(false);

    return (
        <Layout>
            <Header
                style={{ padding: '1rem' }}
                className="fixed w-full z-10 lg:hidden"
            >
                <Link to="/">
                    <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-green-500 py-4 text-left -mt-5">
                        MediCare
                    </p>
                </Link>
                <MenuOutlined
                    className="text-white float-right -mt-9"
                    onClick={() => setVisible(true)}
                />
                <Drawer
                    placement="left"
                    onClose={() => setVisible(false)}
                    closable={false}
                    visible={visible}
                    width={200}
                >
                    <AppMenu />
                </Drawer>
            </Header>

            <Layout hasSider className="mt-16 lg:mt-0 min-h-screen">
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,
                    }}
                    className="hidden lg:block"
                >
                    <AppMenu />
                </Sider>

                <Layout className="ml-0 lg:ml-52">
                    <BreadCrumbContainer />
                    <Content
                        style={{
                            overflow: 'initial',
                            minHeight: '90vh',
                            background: 'white',
                            padding: '1rem',
                        }}
                    >
                        <div
                            className="site-layout-background"
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            {props.children}
                        </div>
                    </Content>

                    <Footer style={{ textAlign: 'center' }}>
                        MediCare ©2022 Created by Md. Lutfor Rahman
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
