import React from "react";
import teamPhoto from "../images/teampic.jpg";
import {Button, Col, Image, Row, Stack} from "react-bootstrap";

function Careers() {
    return(
        <div className="p-4 rounded shadow border">
            <h3 id="careers">Careers</h3>
            <Row>
                <Col>
                    <Stack>
                        <p>We're hiring! Do you have what it takes to join our team? Apply now!</p>
                        <br/>
                        <h5>Positions Open</h5>
                        <ul>
                            <li>Apprentice Piercer - $22/hr</li>
                            <li>Laser Specialist - $100-200/hr</li>
                            <li>Tattoo Artist - $100-200/hr</li>
                            <li>Body Piercer - $100-200/hr</li>
                        </ul>
                        <br/>
                    </Stack>
                    <Button variant="primary">Apply Now!</Button>
                </Col>
                <Col>
                    <Image src={teamPhoto} width="500"/>
                </Col>
            </Row>
        </div>
    );
}

export default Careers;