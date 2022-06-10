import React from "react";
import teamPhoto from "../images/teampic.jpg";
import {Alert, Button, Col, Image, Row, Stack} from "react-bootstrap";
import CareerModalForm from "./CareerModalForm";

class Careers extends React.Component {
    state = {
        isOpen: false,
        poppedUp: false
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
    handleSubmit = () => this.setState({ isOpen: false, poppedUp: true});

    render(){
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
                        <Button variant="primary" onClick={this.openModal}>Apply Now!</Button>
                    </Col>
                    <Col>
                        <Image src={teamPhoto} width="500"/>
                    </Col>
                </Row>
                <br/>

                { this.state.poppedUp ?
                    <Alert id="alert" variant="success" dismissible onClose={() => this.setState({poppedUp: false})}>Thanks for applying! We'll be in touch. </Alert>
                    :
                    null
                }


                { this.state.isOpen ?
                    <CareerModalForm
                        closeModal={this.closeModal}
                        isOpen={this.state.isOpen}
                        handleSubmit={this.handleSubmit}
                    />
                    :
                    null
                }
            </div>
        );
    }
}

export default Careers;