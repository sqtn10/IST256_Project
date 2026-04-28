import logo from '../assets/TheHomeDepot.svg';
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

// export the class
export default class navbar extends Component {
    redner() {
        return (
            <Navbar bg="white" expand="lg" className="border-bottom py-3 shadow-sm">
                <Container>

                    <Navbar.brand>
                        <img src={logo} height="40" className="d-inline-block align-top " alt="Home Depot Logo"></img>
                    </Navbar.brand>

                    <Form className="d-flex flex-grow-1 mx-4">
                        <InputGroup>
                            <Form.Control type="search" placeholder="What can we help you find?" className="bg-light border-end-0" />
                            <Button variant="outline-secondary" className="bg-light border-start-0">
                                <Search color="#F96302" />
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
