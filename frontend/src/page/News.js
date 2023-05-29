import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeadingTitle from '../components/HeadingTitle'
import { Content } from 'antd/lib/layout/layout'
import Backtop from '../components/BackTop'
import { Col, Divider, Row } from 'antd'
import "../CSS/News.css"

export default function News() {
    return (
        <>
            <Navbar />
            <img className='img-cover' alt='cover' src='https://phuclong.com.vn/uploads/category/4e85b3e4df5c4c-trphclong.jpg' />
            <HeadingTitle title="LÁ TRÀ PHÚC LONG" />
            <Content className='wrapp_news'>
                <Col className='wrapp_content' span={24}>
                    <Row className='content'>
                        <Col className='news_text' span={12}>
                            <p className='news_contents'>Một cây trà nếu được trồng ở những vùng đất có độ cao và khí hậu khác nhau thì sẽ thu được những loại trà cũng khác nhau. Có thể thấy sự phức tạp đến từ phía bên trong, từ những thành phần cũng như cấu tạo hoá học độc nhất vô nhị mà chỉ mình cây trà có được. Thấu hiểu điều đó, để giữ trọn vị tươi nguyên, bảo toàn dưỡng chất tốt nhất, một búp và hai lá non thường được chúng tôi thu hái vào thời điểm sáng sớm. Tiếp đến, quy trình sản xuất để cho ra các sản phẩm trà chất lượng cũng được thực hiện khép kín.</p>
                        </Col>
                        <Col className='news_img' span={12}>
                            <img className='img' src='https://phuclong.com.vn/upload/files/2/tra%20cafe/tr%C3%A0%20ph%C3%BAc%20long%201.jpg' />
                        </Col>
                    </Row>
                    <Row className='content'>
                        <Col className='news_img' span={12}>
                            <img className='img' src='https://phuclong.com.vn/upload/files/2/tra%20cafe/tr%C3%A0%20ph%C3%BAc%20long%202.jpg' />
                        </Col>
                        <Col className='news_text' span={12}>
                            <p className='news_contents'>Trong quá trình tìm kiếm từng loại trà thượng hạng, Phúc Long luôn giữ gìn những hợp chất đặc biệt từ lá trà để làm nên tách trà đậm vị.
                                - Theanine (vị ngon) là cảm nhận được trạng thái tỉnh táo, tràn đầy năng lượng khi thưởng thức trà.
                                - Carbohydrate (vị ngọt) là đường tích trữ trong lá trà.
                                - Polyphenols (vị chát) là thành phần đặc biệt có nhiều trong lá trà non.
                                - Caffein (vị đắng) là thành phần bị ảnh hưởng bởi 2 yếu tố: nhiệt độ nước và cách ngâm. Để tiết chế caffein, khi pha nên dùng nước nhiệt độ vừa phải và giảm thời gian ngâm trà.
                                - Enzyme (men) là chất xúc tác sinh học thúc đẩy quá trình lên men của lá trà.</p>
                        </Col>

                    </Row>
                    <Row className='content'>
                        <Col className='news_text' span={12}>
                            <p className='news_contents'>Phúc Long thấu hiểu để có được một tách trà ngon thì từ quá trình thu hái lá trà cho đến quá trình sao chế và pha trà cũng cần phải chuẩn xác. Khi sao trà cần phải canh lửa vừa vặn, khi pha trà nhiệt độ nước cũng vừa phải. Để giờ đây, cầm trên tay tách trà ngát hương, nhâm nhi trọn vị trà truyền thống như là một cách thể hiện tâm tình đối với cuộc sống, cảm thụ hương vị tự nhiên toát ra từ lá trà, lòng an nhiên trước bao bộn bề.</p>
                        </Col>
                        <Col className='news_img' span={12}>
                            <img className='img' src="https://phuclong.com.vn/upload/files/2/tra%20cafe/tr%C3%A0-ph%C3%BAc-long-6'.jpg" />
                        </Col>
                    </Row>
                </Col>
                <Divider />
            </Content>
            <Backtop />
            <Footer />
        </>
    )
}
