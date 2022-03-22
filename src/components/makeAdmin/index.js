import { Button, List, message } from 'antd';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const UsersContainer = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, [changed]);

    const handleAdmin = (email, current = 'User') => {
        if (email === user.email) {
            message.warning(`You are not able to change current email's role!`);
            return;
        }
        const role = current === 'User' ? 'Admin' : 'User';
        const userData = { email, role };

        fetch(`http://localhost:5000/users/admin`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    message.success('Users role changed');
                    setChanged(!changed);
                }
            })
            .catch((e) => message.error('Some problem occurred'));
    };

    return (
        <List
            className="text-left px-1 sm:px-3 md:px-5"
            itemLayout="horizontal"
            dataSource={users}
            renderItem={(item) => (
                <List.Item
                    actions={[
                        <Button
                            type="text"
                            onClick={() => handleAdmin(item.email, item.role)}
                        >
                            {item.role || 'User'}
                        </Button>,
                    ]}
                >
                    <List.Item.Meta
                        title={item.displayName}
                        description={item.email}
                    />
                </List.Item>
            )}
        />
    );
};

export default UsersContainer;
