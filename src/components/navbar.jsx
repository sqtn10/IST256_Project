import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, Form, InputGroup, Button } from 'react-bootstrap';
import { Search, Cart3 as Cart } from 'react-bootstrap-icons';
import logo from '../assets/TheHomeDepot.svg';
import { Link } from 'react-router-dom';

// export the class
export default class MyNav extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className="border-bottom py-3 shadow-sm">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} height="40" className="d-inline-block align-top " alt="Home Depot Logo" />
                    </Navbar.Brand>

                    <Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/cart" className="d-flex flex-column align-items-center text-dark">
                                <Cart size={30} color="black" />
                                <span className="fw-bold" style={{ fontSize: '0.85rem' }}>
                                    Cart: ${(this.props.totalPrice || 0).toFixed(2)}
                                </span>
                            </Nav.Link>
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}
