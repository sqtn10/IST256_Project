import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light pt-2 mt-5">
            <Container>
                <Row>

                
            <Col md={12} className="text-center mb-4">
            <h6 className="fw-bold">Contact</h6>

        <span className="me-4">
            Email: support@HomeDepot.comq
        </span>

            <span className="me-4">
             Phone: (610) 265-7380
            </span>

        <span>
            Location: 181 S Gulph Road King Of Prussia, PA 19406
        </span>
            </Col>
                </Row>
                <hr className="border-light" />

                <Row className="text-center text-md-between pb-3">
                    <Col md={6}>
                        <p className="mb-0">
                            © {new Date().getFullYear()} HomeDepot. All rights reserved.
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