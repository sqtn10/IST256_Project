import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Card } from 'react-bootstrap';

export default class CheckoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOrdered: false,
            // Track user input for the invoice
            fullName: '',
            address: '',
            paymentMethod: 'Credit Card',
            shippingMethod: 'Standard Shipping'
        };
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleCheckout = (e) => {
        e.preventDefault();
        const tax = this.props.totalPrice * 0.06;
        const finalAmount = this.props.totalPrice + tax;
        // Save the price
        this.setState({
            isOrdered: true,
            invoiceAmount: finalAmount
        });
        // This resets the price
        if (this.props.resetCart) {
            this.props.resetCart();
        }
    }
    render() {
        const tax = this.props.totalPrice * 0.06;
        const finalTotal = this.props.totalPrice + tax;
        if (this.state.isOrdered) {
            return (
                <Container className="mt-5">
                    <Card className="p-5 shadow-sm border-0 text-center">
                        <h2 className="text-success fw-bold">Order Confirmed!</h2>
                        <hr />
                        <h4 className="mb-4">Invoice Summary</h4>
                        <Row className="text-start mb-4">
                            <Col md={6}>
                                <h5>Shipping To:</h5>
                                <p>{this.state.fullName}<br />{this.state.address}</p>
                            </Col>
                            <Col md={6}>
                                <h5>Details:</h5>
                                <p><strong>Payment:</strong> {this.state.paymentMethod}</p>
                                <p><strong>Method:</strong> {this.state.shippingMethod}</p>
                            </Col>
                        </Row>
                        <div className="bg-light p-3 rounded">
                            <h5 className="fw-bold">
                                Amount Paid: ${this.state.invoiceAmount ? this.state.invoiceAmount.toFixed(2) : "0.00"}
                            </h5>
                            <small className="text-muted">(Includes 6% state tax)</small>
                        </div>
                        <Button className="mt-4" onClick={() => window.location.href = '/'}>Return Home</Button>
                    </Card>
                </Container>
            );
        }
        return (
            <Container className="mt-5">
                <h2 className="mb-4 fw-bold">Checkout</h2>
                <Row>
                    <Col md={7}>
                        <Form onSubmit={this.handleCheckout}>
                            <h4 className="mb-3">Shipping & Billing</h4>
                            <Form.Group className="mb-3">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control name="fullName" required onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Shipping Address</Form.Label>
                                <Form.Control name="address" required onChange={this.handleChange} />
                            </Form.Group>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Payment Method</Form.Label>
                                        <Form.Select name="paymentMethod" onChange={this.handleChange}>
                                            <option>Credit Card</option>
                                            <option>PayPal</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Shipping Method</Form.Label>
                                        <Form.Select name="shippingMethod" onChange={this.handleChange}>
                                            <option>Standard Shipping (Free)</option>
                                            <option>In-Store Pickup</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button type="submit" variant="primary" className="w-100 mt-3 py-2 fw-bold" style={{ backgroundColor: 'orange', border: 'none' }}>
                                Place Order
                            </Button>
                        </Form>
                    </Col>
                    <Col md={5}>
                        <Card className="bg-light border-0 p-3 shadow-sm">
                            <Card.Body>
                                <h4 className="mb-3">Order Summary</h4>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="bg-transparent d-flex justify-content-between">
                                        <span>Subtotal</span>
                                        <strong>${this.props.totalPrice.toFixed(2)}</strong>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent d-flex justify-content-between">
                                        <span>Tax (6%)</span>
                                        <strong>${tax.toFixed(2)}</strong>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent d-flex justify-content-between fs-4 fw-bold">
                                        <span>Total</span>
                                        <span>${finalTotal.toFixed(2)}</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}