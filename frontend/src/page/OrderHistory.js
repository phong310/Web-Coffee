import { Avatar, Card, Col, Divider, Row, Steps, Table, Tag } from 'antd'
import axios from "axios"
import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import HeadingTitle from '../components/HeadingTitle'
import Money from "../components/Money"
import Navbar from '../components/Navbar'
import AuthContext from '../context/Auth'

export default function OrderHistory() {
    const [data, setData] = useState([])
    const auth = useContext(AuthContext)
    const { Step } = Steps;
    let navigate = useNavigate()

    const getOrderAll = async () => {
        try {
            const result = await axios.get("http://localhost:8000/order/getAllOrder");
            setData(result.data)

        } catch (e) {
            console.log("Err", e)
        }
    }

    useEffect(() => {
        if (!auth.user) {
            navigate('/')
        } else {
            getOrderAll()
        }
    }, [])

    // Phân trang
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 4, // số mục hiển thị trên mỗi trang
    });

    const handleChangePagination = (page, pageSize) => {
        setPagination({
            ...pagination,
            current: page,
            pageSize: pageSize,
        });
    };


    const columns = [
        {
            title: 'STT',
            key: 'stt',
            width: 90,
            render: (text, record, index) => <span>{index + 1}</span>,
        },
        {
            title: 'Thông tin người đặt',
            dataIndex: 'customer_name',
            key: 'customer_name',
            width: 280,
            render: (_, value) => <>
                <Row style={{ alignItems: 'center', justifyContent: 'space-between', width: 220 }}>
                    <Col>
                        <span>Tên: <b>{value.customer_name}</b></span>
                        <br />
                        <span>SĐT: <b>{value.customer_phone}</b></span>
                        <br />
                        <span>Địa chỉ: <b>{value.customer_address}</b></span>
                    </Col>
                </Row>

            </>
        },
        {
            title: 'Các sản phẩm đã đặt',
            dataIndex: 'order_products',
            key: 'order_products',
            width: 300,
            render: (value) => (
                <>
                    {value.map((orderProduct, index) => (
                        <Col key={index}>
                            {orderProduct.item.map((item, idx) => (
                                <>
                                    <Col key={idx}>
                                        <span>Tên sản phẩm: <b style={{ color: '#0C713D' }}>{item.name}</b> </span>
                                        <br />
                                        <span>Kích cỡ: <b>{item.size?.join(', ')}</b></span>
                                        <br />
                                        <span>Số lượng: <b>{item.quantity}</b></span>
                                        <br />
                                        <span>Ghi chú sản phẩm: <b>{item.note}</b></span>
                                    </Col>
                                    <br />
                                </>

                            ))}
                        </Col>

                    ))
                    }
                </>
            ),
        },
        {
            title: 'Thành tiền',
            dataIndex: 'order_products',
            key: 'order_products',
            width: 300,
            render: (value) => (
                <>
                    {value.map((orderProduct, index) => (
                        <Col key={index}>
                            <b>Tổng số lượng: <b style={{ color: '#cf1322' }}>{orderProduct.quantity}</b></b>
                            <br />
                            <br />
                            <b>Thành tiền:  <Tag color='green'><Money value={orderProduct.price} /></Tag></b>
                        </Col>

                    ))
                    }
                </>
            ),
        },
        {
            title: 'Ảnh sản phẩm',
            dataIndex: 'order_products',
            key: 'order_products',
            width: 250,
            render: (value) => (
                <Avatar.Group>
                    {value.map((orderProduct) => (
                        <>
                            {orderProduct.item.map((item, idx) => (
                                <Avatar key={idx} src={item.avatar} />
                            ))}
                        </>
                    ))}
                </Avatar.Group>
            )
        },
        {
            title: 'Loại thanh toán',
            dataIndex: 'order_pay',
            key: 'order_pay',
            render: (value) => (
                <>
                    <Tag color={value === "1" ? 'green' : 'blue'}>
                        {value === "1" ? "Tiền mặt" : "Banking"}
                    </Tag>
                </>
            ),
        },
        {
            title: 'Thời gian',
            dataIndex: 'createdAt',
            key: 'createdAt',
            width: 200,
            render: (value) => (
                <Row style={{ alignItems: 'center', justifyContent: 'space-between', width: 220 }}>
                    <Col>
                        <span>Ngày: <b>{moment(value).format('YYYY-MM-DD')}</b></span>
                        <br />
                        <span>Giờ: <b>{moment(value).format('HH:mm:ss')}</b></span>
                    </Col>
                </Row>
            )
        },
        {
            title: 'Trạng thái đơn',
            key: 'order_status',
            dataIndex: 'order_status',
            render: (value) => (
                value.map((item, idx) =>
                    <Tag key={idx} color={item === "order" ? "red" : "blue"}>
                        {item === "order" ? "Đang xử lý..." : ""}
                    </Tag>
                )
            )
        },
    ];


    return (
        <>
            <Navbar />
            <HeadingTitle title="Lịch sử đơn hàng" />

            <Col style={{ margin: "70px 100px 50px 100px" }}>
                <Card
                    style={{
                        width: 1700,
                        margin: '0 auto',
                        boxShadow: ' rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
                    }}
                    bordered={true}
                >
                    <Steps current={2} size='small'>
                        <Step title="Đặt hàng" />
                        <Step title="Xác nhận và thanh toán đơn hàng" />
                        <Step title="Đang giao hàng" />
                        <Step title="Thành công" />
                    </Steps>
                </Card>
            </Col>
            <Col style={{ margin: "0px 100px 50px 100px" }}>
                <Table columns={columns} dataSource={data} scroll={{ y: 500 }} pagination={{
                    current: pagination.current,
                    pageSize: pagination.pageSize,
                    total: data.length,
                    onChange: handleChangePagination
                }} />
            </Col>
            <Divider />
            <Footer />
        </>
    )
}
