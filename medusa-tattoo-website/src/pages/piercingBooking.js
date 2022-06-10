import React from "react";
import BookingNav from "../components/BookingNav";
import {Button, Col, Container, Form, Row, Tab, Tabs} from "react-bootstrap";

function PiercingBooking() {
    return (
        <>
            <BookingNav currentPage="Book Piercing" category="Piercing"/>
            <Container>
                <div className="p-4 my-4 rounded shadow border bg-light">
                    <h3>Book Piercing</h3>


                    <Form style={{width: "400px"}}>
                        <h5>Step 1. Choose your piercing</h5>
                        <Tabs
                            defaultActiveKey="ear"
                            id="piercingTab"
                        >
                            <Tab eventKey="ear" title="Ear">
                                <Container className="p-3">
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="Conch $75"/>
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="Daith $75"/>
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="Helix $60"/>
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="Industrial $95"/>
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="Lobe $60"/>
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="Rock $75"/>
                                </Container>
                            </Tab>
                            <Tab eventKey="face" title="Face">
                                <Container className="p-3">
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="Septum $70"/>
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="Nostril $60"/>
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="Eyebrow $65"/>
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="Bridge $85"/>
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="Lip $60"/>
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="Labret $60"/>
                                </Container>
                            </Tab>
                            <Tab eventKey="body" title="Body">
                                <Container className="p-3">
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="Navel $75"/>
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="Dermal $90"/>
                                    <Form.Check
                                        name="group1"
                                        type="radio"
                                        id="1"
                                        label="Double Dermal $175"/>
                                </Container>
                            </Tab>
                        </Tabs>


                        <h5>Step 2. Choose your artist</h5>
                        <a href="/#artists" target="_blank">View our artists</a>
                        <Form.Select aria-label="Artist select">
                            <option>Choose an artist</option>
                            <option value="1">Sarah</option>
                            <option value="2">Macy</option>
                        </Form.Select>
                        <br/>

                        <h5>Step 3. Book a date and time</h5>
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




                        <Button variant="primary" type="submit" className="mt-3" href="/confirmed">
                            Book Appointment
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
}

export default PiercingBooking;