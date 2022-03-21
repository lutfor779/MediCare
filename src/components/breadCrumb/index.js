import { Breadcrumb } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumbContainer = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className="text-left pl-3">
            <Breadcrumb style={{ margin: '16px 0' }}>
                {path.split('/').map((item, i) =>
                    i > 0 ? (
                        <Breadcrumb.Item key={i}>
                            <Link
                                to={path
                                    .split('/')
                                    .slice(0, i + 1)
                                    .join('/')}
                            >
                                {item}
                            </Link>
                        </Breadcrumb.Item>
                    ) : (
                        <Breadcrumb.Item key={i}>
                            <Link to={'/'}>Home</Link>
                        </Breadcrumb.Item>
                    )
                )}
            </Breadcrumb>
        </div>
    );
};

export default BreadCrumbContainer;
