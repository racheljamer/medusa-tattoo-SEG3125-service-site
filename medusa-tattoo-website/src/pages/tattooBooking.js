import React from "react";
import BookingNav from "../components/BookingNav";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

function TattooBooking() {
    return (
        <>
            <BookingNav currentPage="Book Tattoo Consult" category="Tattoo"/>
            <Container>
                <div className="p-4 my-4 rounded shadow border">
                    <h3>Book Tattoo Consult</h3>
                    <br/>
                    <h5>What is a tattoo consult?</h5>
                    <p>The consultation is a scheduled time for you to come in and talk to the tattooer about exactly what you want to get tattooed. Bring any references you might have with you to the consultation. You can also talk about things like detail, placement, and pricing at this time.</p>
                    <p>After the consultation, you will need to make a deposit in order to book the appointment for your tattoo. We take a $100 deposit for appointments that are just one session. For larger tattoos that require more than one session (also could be the artist’s preferred preference), we need a $200 deposit. All deposits are non-refundable. They go towards any research and drawing your tattooer does in preparation for your tattoo.</p>

                    <Form style={{width: "400px"}}>
                        <h5>Step 1. Choose your artist</h5>
                        <a href="/#artists" target="_blank">View our artists</a>
                        <Form.Select aria-label="Artist select">
                            <option>Choose an artist</option>
                            <option value="1">Sarah</option>
                            <option value="2">Jonathan</option>
                            <option value="3">Jerry</option>
                            <option value="1">Naomie</option>
                            <option value="2">Macy</option>
                            <option value="3">Annie</option>
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




                        <Button variant="primary" type="submit" className="mt-3">
                            Book Appointment
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
}

export default TattooBooking;