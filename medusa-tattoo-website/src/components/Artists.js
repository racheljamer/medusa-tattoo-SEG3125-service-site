import React from "react";
import {Button, Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import artistSarah from "../images/artists/Sarah.jpg";
import artistJonathan from "../images/artists/Jonathan.png";
import artistJerry from "../images/artists/Jerry.jpg";
import artistMacie from "../images/artists/Macie.png";
import artistNaomie from "../images/artists/Naomie.jpg";
import artistNiko from "../images/artists/NIko.png";
import artistAnnie from "../images/artists/Maggie.jpg";
import tattooMedusa from "../images/artists/Small-Medusa-Tattoo-2.jpg";

function Artists() {
    return (
        <div className="p-4 rounded shadow border">
            <h3 id="artists">Artists</h3>
            <Row>
                <Col>
                    <Card style={{ width: '18rem', marginBottom:'1rem' }}>
                        <Card.Img variant="top" src={artistSarah} />
                        <Card.Body>
                            <Card.Title>Sarah</Card.Title>
                            <Card.Text>
                                Tattoo | Piercing
                            </Card.Text>
                            <Button variant="primary" href="https://www.instagram.com/saraknid/" target="_blank">View Gallery</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem', marginBottom:'1rem' }}>
                        <Card.Img variant="top" src={artistJonathan} />
                        <Card.Body>
                            <Card.Title>Jonathan</Card.Title>
                            <Card.Text>
                                Tattoo | Tattoo Removal
                            </Card.Text>
                            <Button variant="primary" href="https://www.instagram.com/johnnytattoo_oficial/" target="_blank">View Gallery</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem', marginBottom:'1rem' }}>
                        <Card.Img variant="top" src={artistJerry} />
                        <Card.Body>
                            <Card.Title>Jerry</Card.Title>
                            <Card.Text>
                                Tattoo | Tattoo Removal
                            </Card.Text>
                            <Button variant="primary" href="https://www.instagram.com/_jerry_tattoo_/" target="_blank">View Gallery</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem', marginBottom:'1rem' }}>
                        <Card.Img variant="top" src={artistNaomie} />
                        <Card.Body>
                            <Card.Title>Naomie</Card.Title>
                            <Card.Text>
                                Tattoo
                            </Card.Text>
                            <Button variant="primary" href="https://www.instagram.com/naomi.tattoos/" target="_blank">View Gallery</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem', marginBottom:'1rem' }}>
                        <Card.Img variant="top" src={artistMacie} />
                        <Card.Body>
                            <Card.Title>Macy</Card.Title>
                            <Card.Text>
                                Tattoo | Piercing | Tattoo Removal
                            </Card.Text>
                            <Button variant="primary" href="https://www.instagram.com/macy.tattoo/" target="_blank">View Gallery</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem', marginBottom:'1rem' }}>
                        <Card.Img variant="top" src={artistAnnie} />
                        <Card.Body>
                            <Card.Title>Annie</Card.Title>
                            <Card.Text>
                                Tattoo Apprentice
                            </Card.Text>
                            <Button variant="primary" href="https://www.instagram.com/annie._.tattoo/" target="_blank">View Gallery</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem', marginBottom:'1rem' }}>
                        <Card.Img variant="top" src={tattooMedusa} />
                        <Card.Body>
                            <Card.Title>This could be you!</Card.Title>
                            <Card.Text>
                                We are hiring!
                            </Card.Text>
                            <Button variant="primary" href="#careers">View Careers</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col/>
            </Row>
        </div>
    );
}

export default Artists;