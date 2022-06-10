import React from "react";
import {Breadcrumb, Container, Nav, Navbar} from "react-bootstrap";
import logo from "../images/medusa_tattoo_logo.png";

function MainNav(props){
    return (
        <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/#home">
                    <div>
                        <img src={logo} alt="medusa tattoo logo" className="invertedImg d-inline-block " width="80" height="80"/>{' '}
                        <span className="d-inline-block align-top">
                            <p className="h3 mb-0 mt-2"> Medusa Tattoo </p>
                            <p className="my-0 fw-light fs-6">Tattoo | Piercing | Tattoo Removal</p>
                       </span>
                    </div>
                </Navbar.Brand>
                <Breadcrumb>
                    <Breadcrumb.Item href="/#services">Services</Breadcrumb.Item>
                    <Breadcrumb.Item href="/#services">{props.category}</Breadcrumb.Item>
                    <Breadcrumb.Item active style={{color: "white"}}>{props.currentPage}</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </Navbar>
    );
}

export default MainNav;