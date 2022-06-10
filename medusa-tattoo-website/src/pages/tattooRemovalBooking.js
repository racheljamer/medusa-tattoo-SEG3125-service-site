import React from "react";
import BookingNav from "../components/BookingNav";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

function TattooRemovalBooking() {
    return (
        <>
            <BookingNav currentPage="Book Tattoo Removal" category="Tattoo Removal"/>
            <Container>
                <div className="p-4 my-4 rounded shadow border">
                    <h3>Book Tattoo Removal</h3>
                    <br/>
                    <h5>How does laser tattoo removal work?</h5>
                    <p>Laser tattoo removal works by a concentrated light being pulsated into the pigments of the tattoo. The beam passes through the skin and turns the pigment particles into smaller particles. These small particles are then gradually eliminated through the body’s lymphatic system.</p>

                    <Form style={{width: "400px"}}>
                        <h5>Step 1. Choose your artist</h5>
                        <a href="/#artists" target="_blank">View our artists</a>
                        <Form.Select aria-label="Artist select">
                            <option>Choose an artist</option>
                            <option value="1">Jonathan</option>
                            <option value="2">Jerry</option>
                            <option value="3">Macy</option>
                        </Form.Select>
                        <br/>

                        <h5>Step 2. Book a date and time</h5>
                        <Form.Control type="date"/>
                        Available time slots:
                        <div key="inline-radio">
                            <Form.Check
                                inline
                                name="group1"
                                type="radio"
                                id="1"
                                label="1:00pm"/>
                            <Form.Check
                                inline
                                name="group1"
                                type="radio"
                                id="2"
                                label="2:00pm"/>
                            <Form.Check
                                inline
                                name="group1"
                                type="radio"
                                id="3"
                                label="3:00pm"/>
                            <Form.Check
                                inline
                                name="group1"
                                type="radio"
                                id="3"
                                label="4:00pm"/>
                        </div>
                        <hr/>

                        <Form.Group className="mb-1">
                            <Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name"/>
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name"/>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-1">
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control type="date"/>
                        </Form.Group>

                        <Form.Group className="mb-1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com"/>
                        </Form.Group>

                        <Form.Group className="mb-1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" placeholder="(123) 456-7890"/>
                        </Form.Group>




                        <Button className="mt-3" variant="primary" type="submit">
                            Book Appointment
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
}

export default TattooRemovalBooking;