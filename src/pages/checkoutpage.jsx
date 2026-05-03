import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Card } from 'react-bootstrap';

export default class CheckoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = { isOrdered: false };
    }
    handleCheckout = (e) => {
        e.preventDefault();
        this.setState({ isOrdered: true });
    }
    render() {
        const tax = this.props.totalPrice * 0.06;
        const finalTotal = this.props.totalPrice + tax;
        if (this.state.isOrdered) {
            return (
                <Container className="mt-5 text-center">
                    <Card className="p-5 shadow-sm border-0">
                        <h2 className="text-success fw-bold">Order Confirmed!</h2>
                        <hr />
                        <h4>Invoice Summary</h4>
                        <p>Order Total: ${finalTotal.toFixed(2)} (incl. 6% tax)</p>
                        <p>Thank you for shopping with us!</p>
                        <Button onClick={() => window.location.href = '/'}>Return Home</Button>
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
                            <Button type="submit" variant="primary" className="w-100 mt-3" style={{ backgroundColor: 'orange', border: 'none' }}>
                                Place Order
                            </Button>
                        </Form>
                    </Col>
                    <Col md={5}>
                        <Card className="bg-light border-0 p-3">
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