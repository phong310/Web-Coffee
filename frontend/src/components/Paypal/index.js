import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from 'react';

export const Paypal = ({ cartItem, setCartItem, currentOrder, setCurrentOder, setCheckEmpty, handleOrder, totalPrice }) => {

    // Thanh toán Paypal
    // format $
    const convertToUSD = (vndAmount) => {
        const exchangeRate = 23000; // Tỷ giá hối đoái
        const usdAmount = (vndAmount / exchangeRate).toFixed(2); // Tính giá trị tương ứng trong USD
        return usdAmount;
    }

    const ItemCart = cartItem.map((item) => item.title)

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: `Thanh toán sản phẩm ${ItemCart.join(', ')}`,
                    amount: {
                        value: convertToUSD(totalPrice + 15000)
                    },
                },
            ],
        });
    }

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function () {
            setCurrentOder(currentOrder + 2)
            setCartItem([])
            setCheckEmpty(false)
            handleOrder()
        });
    }


    return (
        <PayPalScriptProvider options={{ "client-id": "AWJQdrLhlyUPKQANn9J848hR0SxzOtJu9T_lVUt3qjuc9fzEjjMbpyMcvDmVx_I2dLAiyytdLhDm7Zbx" }}>
            <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
        </PayPalScriptProvider>
    )
}
