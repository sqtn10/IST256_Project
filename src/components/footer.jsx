import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light pt-3 mt-3">
            <Container>
                <Row>

                    <Col md={12} className="text-center mb-2">
                        <h6 className="fw-bold mb-1">Contact</h6>

                        <span className="me-3 small">
                            Email: support@HomeDepot.com
                        </span>

                        <span className="me-3 small">
                            Phone: (610) 265-7380
                        </span>

                        <span className="small">
                            Location: 181 S Gulph Road King Of Prussia, PA 19406
                        </span>
                    </Col>

                </Row>

                <hr className="border-light my-2" />

                <Row className="text-center text-md-between pb-2">
                    <Col md={6}>
                        <p className="mb-0 small">
                            © {new Date().getFullYear()} HomeDepot. All rights reserved.
                        </p>
                    </Col>

                    <Col md={6}>
                        <div className="text-md-end">
                            <a href="#" className="footer-link me-2 small">Privacy Policy</a>
                            <a href="#" className="footer-link me-2 small">Terms</a>
                            <a href="#" className="footer-link small">Accessibility</a>
                        </div>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
};

export default Footer;