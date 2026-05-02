import React, { Component } from 'react';
import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
import products from '../data/products.json';

export default class ProductPage extends Component {
    render() {
        return (
            <Container className="mt-4">
                <h2 className="fw-bold mb-3">Check out our amazing products</h2>
                <Row xs={1} md={2} lg={5} className="g-4">
                    {products.map((item) => (
                        <Col key={item.id}>
                            <Card className="h-100 border-0">
                                <div className="p-2 bg-light rounded-3 mb-2" style={{ height: '200px', display: 'flex', alignItems: 'center' }}>
                                    <Card.Img
                                        variant="top"
                                        src={item.image}
                                        style={{ objectFit: 'contain', maxHeight: '100%' }}
                                    />
                                </div>
                                <Card.Body className="p-0">
                                    <Card.Title className="fs-6 fw-normal mb-1 text-truncate-2" style={{ height: '40px', overflow: 'hidden' }}>
                                        {item.name} - {item.description}
                                    </Card.Title>
                                    <div className="d-flex align-items-start mt-2">
                                        <span className="fs-6 fw-bold mt-1">$</span>
                                        <span className="fs-2 fw-bold">{Math.floor(item.price)}</span>
                                        <span className="fs-6 fw-bold mt-1">00</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}