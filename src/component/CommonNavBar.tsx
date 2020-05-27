import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {useDispatch} from "react-redux";

function CommonNavBar() {
    const dispatch = useDispatch();
    return (
        <Navbar bg="dark" variant="dark">
            <span id={"leftnav-toggle-botton"} onClick={() =>
                {dispatch({type: "TOGGLE_LEFTNAVI"})}
            }>☰</span>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export {CommonNavBar}