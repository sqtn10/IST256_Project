import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../data/products.json';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <Container>
                    <h1 className="display-5 fw-bold">Welcome to the Home Depot</h1>
                </Container>
                <Container className="my-5 p-4 bg-light border rounded">
                    <Row className="justify-content-center">
                        <Col md={10} lg={8} className="text-center">
                            <img
                                src="https://i.mg.homedepot.com/assets/20171107_Acq_Top_Banner_Promo_03.jpg"
                                className="img-fluid mb-3"
                                style={{ maxWidth: '100%' }}
                                alt="Home Depot Banner"
                            />
                            <div className="mt-3">
                                <Link to="/products" style={{ textDecoration: 'none' }}>
                                    <Button size="lg" style={{ backgroundColor: 'orange', border: 'none', color: 'white' }}>
                                        Shop Now
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}