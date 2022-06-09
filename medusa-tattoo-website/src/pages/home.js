import React from "react";
import MainNav from "../components/mainNav";
import About from "../components/About";
import Services from "../components/Services";
import Artists from "../components/Artists";
import Contact from "../components/Contact";
import {Container} from "react-bootstrap";

function Home() {
    return (
        <>
            <MainNav/>
            <Container>
                <About/>
                <hr/>
                <Services/>
                <hr/>
                <Artists/>
            </Container>

        </>
    );
}

export default Home;