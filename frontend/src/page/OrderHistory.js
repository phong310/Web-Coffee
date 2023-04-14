import React from 'react'
import Navbar from '../components/Navbar'
import { Col, Divider } from 'antd'
import Footer from '../components/Footer'

export default function OrderHistory() {
    return (
        <>
            <Navbar />
            <Col style={{ margin: "283px 0px" }}>
                <h1>Chi tiết đơn hàng nhé</h1>
            </Col>
            <Divider />
            <Footer />
        </>
    )
}
