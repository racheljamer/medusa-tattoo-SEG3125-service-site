import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import CustomerReview from "./CustomerReview";

//Strings

const historyStr = "Operating in Ottawa for over 50 years, Medusa Tattoo has always been at the forefront of artistic expression. We are proud to provide clients with a safe and friendly, all inclusive, environment, filled with artists who provide unique quality artwork all while maintaining a clean and professional studio space.";

function About() {
    return (
        <>
            <div class="mt-4">
                <Row class="mr-2">
                    <Col><Image src="https://picsum.photos/400/200"/></Col>
                    <Col><Image src="https://picsum.photos/400/200"/></Col>
                    <Col><Image src="https://picsum.photos/400/200"/></Col>
                </Row>
            </div>
            <hr/>
            <div>
                <h3>About Us</h3>
                <div className="mt-4">
                    <Row class="mr-2">
                        <Col>
                            <h4>History</h4>
                            <Container>
                                <p>{historyStr}</p>
                            </Container>
                        </Col>
                        <Col>
                            <h4>Reviews</h4>
                            <CustomerReview/>
                            <CustomerReview/>
                            <CustomerReview/>

                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default About;