import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light pt-5 mt-5">
            <Container>
                <Row>

                    <Col md={3}>
                        <h6 className="fw-bold">Customer Service</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Contact Us</a></li>
                            <li><a href="#" className="footer-link">Order Status</a></li>
                            <li><a href="#" className="footer-link">Returns</a></li>
                            <li><a href="#" className="footer-link">FAQ</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h6 className="fw-bold">About</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Our Story</a></li>
                            <li><a href="#" className="footer-link">Careers</a></li>
                            <li><a href="#" className="footer-link">Press</a></li>
                            <li><a href="#" className="footer-link">Investors</a></li>
                        </ul>
                    </Col>

                    <Col md={3}>
                        <h6 className="fw-bold">Shop</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Tools</a></li>
                            <li><a href="#" className="footer-link">Appliances</a></li>
                            <li><a href="#" className="footer-link">Outdoor</a></li>
                            <li><a href="#" className="footer-link">Decor</a></li>
                        </ul>
                    </Col>

                    <Col md={3}>
                        <h6 className="fw-bold">Contact</h6>
                        <p className="mb-1">Email: support@HomeDeport.com</p>
                        <p className="mb-1">Phone: (610)265-7380</p>
                        <p>Location: 181 S Gulph Road King Of Prussia, PA 19406</p>
                    </Col>
                </Row>
                <hr className="border-light" />

                <Row className="text-center text-md-between pb-3">
                    <Col md={6}>
                        <p className="mb-0">
                            © {new Date().getFullYear()} HomeDeport. All rights reserved.
                        </p>
                    </Col>

                    <Col md={6}>
                        <div className="text-md-end">
                            <a href="#" className="footer-link me-3">Privacy Policy</a>
                            <a href="#" className="footer-link me-3">Terms</a>
                            <a href="#" className="footer-link">Accessibility</a>
                        </div>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
};

export default Footer;
