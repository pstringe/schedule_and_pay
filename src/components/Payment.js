import React, { useState } from 'react';
import useScript from '../hooks/useScript'
import ReactDOM from 'react-dom'

const Loading = () => {
    return (
        <div>
            Loading Payment Portal
        </div>
    )
}
const Payment = (props) => {
    const [show, setShow] = useState(false);
  
    const CLIENT_ID = process.env.REACT_APP_PAYPAL_TEST_CLIENT_ID;
    const status = useScript("https://www.paypal.com/sdk/js?client-id=" + CLIENT_ID);
    console.log(status);
    const PayPalButton = (status === 'ready') ? window.paypal.Buttons.driver("react", { React, ReactDOM }) : Loading ;

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "0.01"
                    },
                },
            ]
        });
    };
    
    const onApprove = (data, actions) => {
        return actions.order.capture();
    };

    return (
        <div>
            <PayPalButton  createOrder={(data, actions) => createOrder(data, actions)} 
                            onApprove={(data, actions) => createOrder(data, actions)} />
        </div>
    );
};

export default Payment;