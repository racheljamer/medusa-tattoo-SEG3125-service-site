import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from "../images/medusa_tattoo_logo.png";

function MainNav(){
    return (
        <Navbar bg="light" expand="lg" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <div>
                        <img src={logo} alt="medusa tattoo logo" className="d-inline-block" width="80" height="80"/>{' '}
                        <span className="d-inline-block align-top">
                            <p className="h3 mb-0 mt-2"> Medusa Tattoo </p>
                            <p className="my-0 fw-light fs-6">Tattoo | Piercing | Tattoo Removal</p>
                       </span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#artists">Artists</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNav;