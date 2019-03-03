import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const MyNavbar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand ><Link to="/" style={{textDecoration: 'none', color: 'Black'}} >Europe Hotels - Dell Hiring Challenge</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link><Link to="/other">info</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}