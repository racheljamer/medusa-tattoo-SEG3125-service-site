import React from "react";
import {Col, Image, Row, Table} from "react-bootstrap";

//Strings

const historyStr = "Operating in Ottawa for over 50 years, Medusa Tattoo has always been at the forefront of artistic expression. We are proud to provide clients with a safe and friendly, all inclusive, environment, filled with artists who provide unique quality artwork all while maintaining a clean and professional studio space.";

//If I had actual data I would make a review component - but to keep things simple I'll just show 3 static reviews.
const review1 = "\"Such a welcoming, polite environment. The gentlemen working at reception was attentive, asking what service I needed and providing information on the wait time with one update while I was waiting.\"";
const review2 = "\"Great customer service. Was my first tattoo and they made me feel calm and ready to get it done. Artist was awesome, great guy and knows his stuff. All in a great experience\"";
const review3 = "\"Julie is my new go-to for all piercings. She’s incredible! I can’t speak to the other artists’ abilities, but I can at least assure you that they’re all very friendly and very professional. The shop itself is gorgeous, clean and upscale.\"";


function About() {
    return (
        <>
            <div class="mt-4" id="home">
                <Row class="mr-2">
                    <Col><Image src="https://picsum.photos/400/200" className="rounded shadow border"/></Col>
                    <Col><Image src="https://picsum.photos/400/200" className="rounded shadow border"/></Col>
                    <Col><Image src="https://picsum.photos/400/200" className="rounded shadow border"/></Col>
                </Row>
            </div>
            <hr/>
            <div className="p-4 rounded shadow border">
                <h3>About Us</h3>
                <div className="mt-3">
                    <Row class="mr-2">
                        <Col>
                            <h4>History</h4>
                            <p>{historyStr}</p>
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
                        <Col>
                            <h4>Reviews</h4>
                            <p>{review1} <br/> - Rebecca Nava</p>

                            <p>{review2} <br/> - Connor Taylor</p>
                            <p>{review3} <br/> - Kayleigh Godbout</p>

                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default About;