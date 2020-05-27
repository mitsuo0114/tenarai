import React from "react";
import {Navbar, Nav} from 'react-bootstrap';


function CommonLeftNavBar() {
    return (
        <Nav id="leftnav" defaultActiveKey="/home" className="flex-column nav-pills">
            <div>
                <h3>Menu</h3>
            </div>
            <Nav.Item >数学</Nav.Item>
            <Nav.Item >数学</Nav.Item>
            <Nav.Item >数学</Nav.Item>
        </Nav>
    )
}

export {CommonLeftNavBar}