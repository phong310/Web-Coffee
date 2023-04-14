import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Col, Divider, Card } from 'antd'
import Footer from '../components/Footer'
import axios from "axios"

export default function OrderHistory() {
    const [data, setData] = useState({})

    const getOrderAll = async () => {
        try {
            const result = await axios.get("http://localhost:8000/order/getAllOrder");
            setData(result.data)

        } catch (e) {
            console.log("Err", e)
        }
    }

    useEffect(() => {
        getOrderAll()
    }, [])


    return (
        <>
            <Navbar />
            <Col style={{ margin: "100px 100px 290px 100px" }}>
                <Card
                    style={{
                        width: 1200,
                        margin: '0 auto'
                    }}
                    bordered={true}
                >
                    {JSON.stringify(data)}
                </Card>
            </Col>
            <Divider />
            <Footer />
        </>
    )
}
