import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Col, Divider, Card } from 'antd'
import Footer from '../components/Footer'
import axios from "axios"
import AuthContext from '../context/Auth'
import { useNavigate } from 'react-router-dom'

export default function OrderHistory() {
    const [data, setData] = useState({})
    const auth = useContext(AuthContext)
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
