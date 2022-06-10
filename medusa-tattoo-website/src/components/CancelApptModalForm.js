import React, {Component} from "react";
import {Button, Modal, Form} from "react-bootstrap";

export default class CancelApptModalForm extends Component{
    render(){
        return (
            <Modal
                show={this.props.isOpen}
                onHide={this.props.closeModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Cancel Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name"/>
                        <br/>
                        <Form.Label>Appointment ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter appointment id" />
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