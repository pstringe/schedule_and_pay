import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'

import scriptLoader from 'react-async-script-loader'
const PayPalButton = paypal.Buttons.driver('react', {React, ReactDOM});

const Payment = (props) => {
    const [show, setShow] = useState(false);
    window.React = React;
    window.ReactDOM = ReactDOM;
    
    useEffect(() => {
        const {
            scriptLoaded,
            scriptLoadSucceeded,
        } = this.props;
        if (scriptLoaded && scriptLoadSucceeded){
            setShow(true);
        }
    });

    const creatOrder = (data, actions) => {
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
        <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => createOrder(data, actions)}
        />
    );
};

export default Payment;