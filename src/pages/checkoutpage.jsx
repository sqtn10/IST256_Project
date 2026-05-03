import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<Link to ="/shoppingcart"/>

export default class CheckoutPage extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h2>Secure Checkout</h2>
                <p>Please enter your payment information.</p>
            </div>
        );
    }
}