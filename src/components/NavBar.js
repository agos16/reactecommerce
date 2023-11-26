
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return ( <Navbar bg="dark" data-bs-theme="dark">
    <Container>
    <Navbar.Brand>
        <NavLink to = "/">Inicio</NavLink>
        </Navbar.Brand>
    <Nav className="me-auto">
        <NavLink to ="category/pisos">pisos</NavLink>
        <NavLink to ="category/paredes">paredes</NavLink>
    </Nav>
    <CartWidget/> 
    </Container>
</Navbar>
    )
}
