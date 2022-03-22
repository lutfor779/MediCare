import { DeleteOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Input,
    message,
    PageHeader,
    Popconfirm,
    Space,
    Table,
    Tooltip,
} from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';
import AdminLayout from '../../../components/layout/admin/adminLayout';
const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then((res) => res.json())
            .then((data) => setAppointments(data))
            .catch((err) => console.log(err));
    }, [changed]);

    useEffect(() => {
        const arr = [];
        for (const value of appointments) {
            arr.push({ ...value, key: value._id });
        }
        setDataSource(arr);
    }, [appointments]);

    const handleApproved = (id, current = 'Pending') => {
        const status = current === 'Pending' ? 'Approved' : 'Pending';
        fetch(`http://localhost:5000/appointments`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ id, status }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    message.success('Appointment status changed');
                    setChanged(!changed);
                }
            })
            .catch((e) => message.error('Some problem occurred'));
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/appointments/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((d) => {
                if (d.deletedCount) {
                    const remaining = dataSource.filter(
                        (item) => item._id !== id
                    );
                    setDataSource(remaining);
                    message.success('Appointment deleted successfully');
                }
            })
            .catch(() => message.error('Some problem occurred!'));
    };

    const handleSave = (row) => {
        fetch(`http://localhost:5000/appointments/${row._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(row),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    const newData = dataSource;
                    const index = newData.findIndex(
                        (item) => row.key === item.key
                    );
                    const item = newData[index];
                    newData.splice(index, 1, { ...item, ...row });
                    setDataSource(newData);
                    setChanged(!changed);
                    message.success('Updated Successfully');
                }
            })
            .catch(() => message.error('some problem occurred'));
    };

    const columns = [
        {
            title: 'Name',
            key: '1',
            dataIndex: 'name',
            editable: true,
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: '2',
            responsive: ['xl'],
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: '3',
            responsive: ['md'],
            editable: true,
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: '4',
            responsive: ['lg'],
            editable: true,
            render: (data) =>
                new Date(data).toLocaleDateString('en-Gb', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                }),
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: '5',
            responsive: ['lg'],
            editable: true,
        },
        {
            title: 'Contact',
            dataIndex: 'phone',
            key: '6',
            responsive: ['xl'],
            editable: true,
        },
        {
            title: 'Status',
            key: '7',
            render: (record) => {
                return (
                    <Button
                        type="text"
                        onClick={() =>
                            handleApproved(record._id, record.status)
                        }
                    >
                        {record.status || 'Pending'}
                    </Button>
                );
            },
        },
        {
            title: '',
            key: '8',
            render: (record) => {
                return (
                    <Popconfirm
                        title="Are you sure you want to delete this appointment?"
                        onConfirm={() => handleDelete(record._id)}
                        okText="Yes"
                        cancelText="No"
                        placement="topRight"
                    >
                        <Tooltip title="Delete">
                            <Button
                                type="text"
                                danger
                                icon={<DeleteOutlined />}
                            />
                        </Tooltip>
                    </Popconfirm>
                );
            },
        },
    ];

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    const column = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave: handleSave,
            }),
        };
    });

    return (
        <AdminLayout>
            <Space direction="vertical" size={45} className="w-full">
                <PageHeader title="Manage Appointments" />
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    dataSource={dataSource}
                    columns={column}
                    pagination={{
                        position: ['bottomCenter'],
                        total: dataSource.length,
                        pageSize: 5,
                        current: currentPage,
                        onChange: (page) => setCurrentPage(page),
                    }}
                />
            </Space>
        </AdminLayout>
    );
};

export default Appointments;
