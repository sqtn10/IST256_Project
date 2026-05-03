import React, { Component } from 'react';
import { Container, Table, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
    render() {
        const { cartItems, updateQuantity, removeFromCart, totalPrice } = this.props;

        return (
            <Container className="mt-5">
                <h2 className="fw-bold mb-4">Your Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div className="text-center py-5">
                        <h4>Your cart is empty</h4>
                        <Link to="/products">
                            <Button variant="outline-primary" className="mt-3">Go Shopping</Button>
                        </Link>
                    </div>
                ) : (
                    <>
                        <Table responsive="md" hover>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <Image src={item.image} width="50" height="50" className="me-3 rounded" style={{ objectFit: 'contain' }} />
                                                <span>{item.name}</span>
                                            </div>
                                        </td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, -1)}>-</Button>
                                                <span className="mx-2">{item.quantity}</span>
                                                <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, 1)}>+</Button>
                                            </div>
                                        </td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                        <td>
                                            <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="d-flex flex-column align-items-end mt-4">
                            <h4>Pre-Tax Total: <span className="fw-bold">${totalPrice.toFixed(2)}</span></h4>
                            <Link to="/checkout">
                                <Button size="lg" style={{ backgroundColor: 'orange', border: 'none' }} className="mt-3 px-5 fw-bold">
                                    Proceed to Checkout
                                </Button>
                            </Link>
                        </div>
                    </>
                )}
            </Container>
        );
    }
}