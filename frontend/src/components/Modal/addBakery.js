import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Image, Input, Modal, Row, message } from 'antd';
import React, { useContext, useState } from 'react';
import "../../CSS/AddModal.css";
import CartContext from '../../context/Cart';
import Money from '../Money';

export default function AddBakery({ open, setOpen, item }) {
    const { TextArea } = Input;
    const cartCtx = useContext(CartContext);
    const { cartItem, setCartItem } = cartCtx;


    const [quantity, setQuantity] = useState(typeof item?.quantity === 'number' ? item.quantity : 1)
    const [noteProduct, setNoteProduct] = useState("")

    const handleOk = () => {
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
        setQuantity(1);
        setValueSize(["S"])
    };

    // Kích cỡ:
    const [valueSize, setValueSize] = useState(["S"]);

    const onChangeCheck = (checkedValues) => {
        setValueSize(checkedValues)

    };


    const handleAdd = (value, size, note) => {
        const newCartItems = cartItem.slice(0);
        const index = cartItem.findIndex((cart) => cart.id === value.id);
        if (index < 0) {
            size = valueSize;
            note = noteProduct
            item.size = size;
            item.note = note
            item.quantity = quantity
            newCartItems.push(value);
        }
        setOpen(false);
        setCartItem(newCartItems)
        message.success('Đã thêm vào giỏ hàng thành công !');
    }


    return (
        <>
            <Modal width={1400} title="Chi tiết sản phẩm" open={open} onOk={handleOk} onCancel={handleCancel}>
                <Row className="bg_wrapper">
                    <Col>
                        <Image width={500} src={item?.img} />
                        <h1 style={{ marginTop: 30 }}><Money value={item?.price} /></h1>
                    </Col>
                    <Col style={{ marginLeft: '100px', width: 700 }}>
                        <Row style={{ justifyContent: "flex-start", marginBottom: 30 }}>
                            <h1>{item?.title}</h1>
                        </Row>
                        <Col>
                            <Row style={{ marginBottom: "30px" }}>
                                <Col>
                                    <span style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "30%" }}>Kích cỡ: </span>
                                </Col>
                                <Col style={{ marginLeft: 40 }}>
                                    <Checkbox.Group value={valueSize} onChange={onChangeCheck}>
                                        <Checkbox value="S">S</Checkbox>
                                        <Checkbox value="M">M</Checkbox>
                                        <Checkbox value="L">L</Checkbox>
                                    </Checkbox.Group>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: "30px", alignItems: "center" }}>
                                <Col>
                                    <span style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "30px" }}>Số lượng: </span>
                                </Col>
                                <Col style={{ marginLeft: 30 }}>
                                    <QuantityAdjusment quantity={quantity} setValue={setQuantity} />
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: "30px" }}>
                                <Col>
                                    <span style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "30px" }}>Ghi chú: </span>
                                </Col>
                                <Col style={{ marginLeft: 40, flex: 1 }}>
                                    <TextArea value={noteProduct} onChange={(e) => setNoteProduct(e.target.value)} rows={4} showCount placeholder="Ghi chú về sản phẩm..." maxLength={50} />
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: "30px", alignItems: "center" }}>
                                <Col>
                                    <span style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "30px" }}>Giá: </span>
                                </Col>
                                <Col style={{ marginLeft: 40 }}>
                                    <h1><Money value={item?.price * quantity} /></h1>
                                </Col>
                            </Row>
                            <Button className="btnAdd" onClick={() => handleAdd(item)}>
                                TIẾP TỤC
                                <ArrowRightOutlined />
                            </Button>

                        </Col>

                    </Col>
                </Row>
            </Modal>
        </>
    )
}

// Số lượng
const QuantityAdjusment = ({ quantity, setValue }) => {

    return (
        <div className="cart_item_quantity_adjustment">
            <div
                className="cart_item_quantity_adjustment_decrease"
                onClick={() => {
                    setValue(quantity - 1)
                }}
            >
                -
            </div>
            <div className="cart_item_quantity_adjustment_number">
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                />
            </div>
            <div
                className="cart_item_quantity_adjustment_increase"
                onClick={() => {
                    setValue(quantity + 1)
                }}
            >
                +
            </div>
        </div>
    );
};