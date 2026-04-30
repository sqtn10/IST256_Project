import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import products from '../data/products.json'; 

export default class ProductPage extends Component {
    render() {
        return (
            <Container className="mt-4">
                <h2 className="mb-4" style={{color: '#333'}}>Power Tools & Equipment</h2>
                <Row>
                    {products.map((item) => (
                        <Col key={item.id} md={4} lg={3} className="mb-4">
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Img 
                                    variant="top" 
                                    src={item.image} 
                                    style={{ height: '200px', objectFit: 'contain', padding: '10px' }} 
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title style={{fontSize: '1.1rem', fontWeight: 'bold'}}>
                                        {item.name}
                                    </Card.Title>
                                    <Card.Text className="text-muted small">
                                        {item.description}
                                    </Card.Text>
                                    <div className="mt-auto">
                                        <h5 className="text-dark">${item.price}</h5>
                                        <Button 
                                            variant="warning" 
                                            className="w-100 border-0" 
                                            style={{backgroundColor: 'orange', fontWeight: 'bold'}}
                                        >
                                            Add to Cart
                                        </Button>
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
