import React from "react";
import {Row, Col, Accordion, Button, Table, ListGroup} from "react-bootstrap";

function Services() {
    return (
        <div className="p-4 rounded shadow border bg-light">
            <h3 id="services" className="text-center mb-4">Services</h3>
            <Row>
                <Col>
                    <h4>Tattoo</h4>
                    <p>Tattoos are priced based on size and complexity. You must book a consult with an artist to choose a design and determine final pricing.</p>
                    <Accordion className="bg-light">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Pricing</Accordion.Header>
                            <Accordion.Body>
                                Please note all prices listed below are estimates! You must consult your tattoo artist for the final price.
                                <Table bordered striped>
                                    <thead>
                                    <tr>
                                        <th>Size</th>
                                        <th>Price</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Tiny (Under 2")</td>
                                        <td>$30 - $100</td>
                                    </tr>
                                    <tr>
                                        <td>Small (2" - 4")</td>
                                        <td>$50 - $250</td>
                                    </tr>
                                    <tr>
                                        <td>Medium (4" - 6")</td>
                                        <td>$150 - $450</td>
                                    </tr>
                                    <tr>
                                        <td>Large (6"+)</td>
                                        <td>$500 - $4000</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br/>
                    <Button variant="primary" size="lg" href="/bookTattoo">Book Tattoo Consult</Button>
                </Col>
                <Col>
                    <h4>Tattoo Removal</h4>
                    <p>Tattoo removal appointments are priced by hour. The larger and more complex the tattoo, the longer it will take to remove.</p>
                    <ListGroup horizontal>
                        <ListGroup.Item >Flat Rate - $100</ListGroup.Item>
                        <ListGroup.Item>Price per hour - $25</ListGroup.Item>
                    </ListGroup>
                    <br/>
                    <Button variant="primary" size="lg" href="/bookTattooRemoval">Book Tattoo Removal</Button>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <h4>Piercing</h4>
                    <p>Medusa Tattoo now offers piercings! See the piercing price list for individual piercings.</p>
                    <p>We pride ourselves on staying up to date with the latest safety techniques. We get inspected on a regular basis by the Ottawa Board of Health. The equipment (including the needle) will be opened from the sterile packaging in front of you, all surfaces are covered with a barrier, all initial jewelry comes prepacked and sterilized and the needles are disposed of after every use in a sharps container located away from the piercing surface.</p>
                    <Button variant="primary" size="lg" href="/bookPiercing">Book Piercing</Button>
                </Col>
                <Col>
                    <br/>
                    <h6>Piercing Price List</h6>
                    <Table bordered striped>
                        <thead>
                            <tr>
                                <th>Ear</th>
                                <th>Face</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Conch $75</td>
                                <td>Septum $70</td>
                                <td>Navel $75</td>
                            </tr>
                            <tr>
                                <td>Daith $75</td>
                                <td>Nostril $50</td>
                                <td>Dermal $90</td>
                            </tr>
                            <tr>
                                <td>Helix $60</td>
                                <td>Eyebrow $65</td>
                                <td>Double Dermal $175</td>
                            </tr>
                            <tr>
                                <td>Industrial $95</td>
                                <td>Bridge $85</td>
                                <td/>
                            </tr>
                            <tr>
                                <td>Lobe $60</td>
                                <td>Lip $60</td>
                                <td/>
                            </tr>
                            <tr>
                                <td>Rook $75</td>
                                <td>Labret $60</td>
                                <td/>
                            </tr>
                        </tbody>

                    </Table>
                </Col>
            </Row>
        </div>
    );
}

export default Services;