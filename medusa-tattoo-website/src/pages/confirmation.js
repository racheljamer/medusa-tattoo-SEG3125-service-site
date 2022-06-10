import React from "react";
import MainNav from "../components/mainNav.js";
import {Alert, Button, Col, Container, Image, Row, Stack} from "react-bootstrap";
import ConfirmNav from "../components/ConfirmNav";
import map from "../images/map.png";

function Confirmation() {
    return (
        <>
            <ConfirmNav/>
            <Container>
                <div className="mt-4 p-4 rounded shadow border bg-light">
                    <h3 className="text-center mb-4">Thank you!</h3>
                    <div style={{width:"500px"}} className="mx-auto d-block">
                        <p>Please check your email for all of your booking details. Please arrive 15 minutes early to your appointment time: this will ensure consent and screening forms are completed by your scheduled time. </p>
                        <p>We are so excited to bring your dreams to reality at Medusa Tattoo. See you soon!</p>
                        <Button className="mx-auto d-block w-25" href="/">Home</Button>
                    </div>
                    <hr/>
                    <Row>
                        <Col/>
                        <Col>
                            <h4>Location</h4>
                            <Stack>
                                <Image src={map} width="250" rounded/>
                                <Button href="https://goo.gl/maps/FR8PirdXiEFyFjbB8" target="_blank" variant="primary" style={{width: "250px", marginTop: "1rem"}}>Get Directions</Button>
                            </Stack>
                        </Col>
                        <Col>
                            <h4>Contact Us</h4>
                            <p>(123) 456-7890 <br/> info@medusatattoo.ca</p>
                            <p>123 Appletree Avenue <br/> Ottawa, ON <br/>A1B 2C3</p>

                        </Col>
                        <Col/>
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default Confirmation;