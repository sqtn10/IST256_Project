import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, Form, InputGroup, Button } from 'react-bootstrap';
import { Search, Cart3 as Cart } from 'react-bootstrap-icons'; 
import logo from '../assets/TheHomeDepot.svg';

// export the class
export default class MyNav extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className="border-bottom py-3 shadow-sm">
                <Container>

                    <Navbar.Brand>
                        <img src={logo} height="40" className="d-inline-block align-top " alt="Home Depot Logo"/>
                    </Navbar.Brand>

                    <Form className="d-flex flex-grow-1 mx-4">
                        <InputGroup>
                            <Form.Control type="search" placeholder="What can we help you find?" className="bg-light border-end-0" />
                            <Button variant="outline-secondary" className="bg-light border-start-0">
                                <Search color="orange" />
                            </Button>
                        </InputGroup>
                    </Form>

                    <Nav>
                        <Nav.Link className="d-flex flex-column align-items-center text-dark">
                            <Cart size={25} />
                            <span style={{ fontSize: '11px', fontWeight: 'bold' }}>Cart</span>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}
