import React from "react";
import {Button, Col, Container, Image, Row, Stack, Table} from "react-bootstrap";
import parlourPic from "../images/parlourexternal.jpg";
import map from "../images/map.png";

function Contact() {
    return (
        <div className="p-4 rounded shadow border">
            <h3>Contact</h3>
            <Container fluid><Image className="rounded mx-auto d-block" width="750" src={parlourPic} rounded fluid/></Container>
            <hr/>
            <Row>
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
                <Col>
                    <h4>Studio Hours</h4>
                    <div className="w-25">
                        <Table bordered striped>
                            <tbody>
                            <tr>
                                <td>Sunday</td>
                                <td>Closed</td>
                            </tr>
                            <tr>
                                <td>Monday</td>
                                <td>Closed</td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>10 - 7</td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td>10 - 7</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>10 - 7</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>10 - 7</td>
                            </tr>
                            <tr>
                                <td>Saturday</td>
                                <td>10 - 7</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;