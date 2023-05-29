import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeadingTitle from '../components/HeadingTitle'
import { Content } from 'antd/lib/layout/layout'
import Backtop from '../components/BackTop'
import { Col, Divider, Row } from 'antd'
import "../CSS/News.css"

export default function NewsCoffee() {
    return (
        <>
            <Navbar />
            <img className='img-cover' alt='cover' src='https://phuclong.com.vn/uploads/category/aa17dafb29b433-cphphclong3.jpg' />
            <HeadingTitle title="HẠT CÀ PHÊ PHÚC LONG" />
            <Content className='wrapp_news'>
                <Col className='wrapp_content' span={24}>
                    <Row className='content'>
                        <Col className='news_text' span={12}>
                            <p className='news_contents_coffee'>Cà phê càng được rang sẫm màu hương vị càng trọn vẹn. Rang cà phê là một quá trình đòi hỏi sự tinh tế từ đôi bàn tay và sự am hiểu từng loại hạt cà phê của người nghệ nhân. Rang lửa nhỏ khiến cà phê chưa chín tới và đắng hơn, trong khi rang quá kỹ lại khiến cà phê cháy khét đánh mất những đặc tính thượng hạng vốn có. Trong quá trình rang đủ thời gian, những dinh dưỡng như proteins, enzymes mới sẽ tích tụ phía trong tạo nên phần chất của cà phê, làm cho cà phê đậm hơn, sánh hơn.</p>
                        </Col>
                        <Col className='news_img' span={12}>
                            <img className='img' src='https://phuclong.com.vn/upload/files/2/tra%20cafe/c%C3%A0%20ph%C3%AA%20Ph%C3%BAc%20Long%20%C4%91%E1%BA%ADm%20v%E1%BB%8B%203(1).jpg' />
                        </Col>
                    </Row>
                    <Row className='content'>
                        <Col className='news_img' span={12}>
                            <img className='img' src='https://phuclong.com.vn/upload/files/2/tra%20cafe/c%C3%A0%20ph%C3%AA%20Ph%C3%BAc%20Long%20%C4%91%E1%BA%ADm%20v%E1%BB%8B%204.jpg' />
                        </Col>
                        <Col className='news_text' span={12}>
                            <p className='news_contents_coffee'>Trên hành trình tìm kiếm những hạt cà phê ngon nhất, Phúc Long luôn chú trọng bốn đặc tính từ trái cà phê nhằm tôn trọng nguyên bản cho tách cà phê đậm vị.
                                - Hương thơm là mùi hương của hạt cà phê - thơm bao nhiêu hứa hẹn cho nhiều vị bấy nhiêu.
                                - Thể chất là khái niệm để chỉ độ đậm đà trong nước chiết xuất cà phê. cảm nhận thông qua đánh giá của người thưởng thức.
                                - Acid là hợp chất tạo nên vị chua thanh của cà phê.
                                - Hậu vị là cảm nhận vị cà phê còn đọng lại sau khi thưởng thức.</p>
                        </Col>

                    </Row>
                    <Row className='content'>
                        <Col className='news_text' span={12}>
                            <p className='news_contents_coffee'>Tách cà phê hoàn hảo được định nghĩa là tách cà phê có vị đắng đậm đà, chua thanh thoát, lan toả hương thơm nồng nàn, dễ dàng chinh phục vị giác của bất cứ ai.
                                Tách cà phê đậm vị luôn luôn là thức uống giữ vị trí nhất định trong lòng những tín đồ cà phê Việt, dù văn hoá thưởng thức có nhiều thay đổi theo sự phát triển từng ngày của xã hội.</p>
                        </Col>
                        <Col className='news_img' span={12}>
                            <img className='img' src="https://phuclong.com.vn/upload/files/2/tra%20cafe/Dam%20vi%20ca%20phe%203''.jpg" />
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
