import React, {Component} from "react";
import {Button, Modal, Form} from "react-bootstrap";

export default class CareerModalForm extends Component{
    render(){
        return (
            <Modal
                show={this.props.isOpen}
                onHide={this.props.closeModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Medusa Tattoo Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name </Form.Label>
                        <Form.Control type="text" placeholder="Full Name"/>
                        <br/>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <br/>
                        <Form.Label>Position</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Positions</option>
                            <option value="1">Apprentice Piercer</option>
                            <option value="2">Laser Specialist</option>
                            <option value="3">Tattoo Artist</option>
                            <option value="4">Body Piercer</option>
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button href="#alert" variant="primary" type="submit" onClick={() => this.props.handleSubmit()}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}