import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

function MainNav(){
    return (
        <Navbar bg="light" expand="lg" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    Medusa Tattoo
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