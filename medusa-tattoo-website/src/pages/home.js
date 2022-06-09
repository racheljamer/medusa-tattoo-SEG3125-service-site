import React from "react";
import MainNav from "../components/mainNav";
import About from "../components/About";
import Services from "../components/Services";
import Artists from "../components/Artists";
import Contact from "../components/Contact";
import {Container} from "react-bootstrap";
import Careers from "../components/Careers";

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
                <hr/>
                <Contact/>
                <hr/>
                <Careers/>
            </Container>

        </>
    );
}

export default Home;