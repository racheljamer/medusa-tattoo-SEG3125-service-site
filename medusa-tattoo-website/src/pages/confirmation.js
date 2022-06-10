import React from "react";
import MainNav from "../components/mainNav.js";
import {Container} from "react-bootstrap";
import ConfirmNav from "../components/ConfirmNav";

function Confirmation() {
    return (
        <>
            <ConfirmNav/>
            <Container>
                <div className="mt-4 p-4 rounded shadow border">
                    <h3 className="text-center my-1">Thank you!</h3>
                </div>
            </Container>
        </>
    );
}

export default Confirmation;