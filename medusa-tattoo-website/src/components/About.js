import React from "react";
import {Col, Image, Row} from "react-bootstrap";

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
                            Text text
                        </Col>
                        <Col>
                            <h4>Reviews</h4>
                            Text text
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default About;