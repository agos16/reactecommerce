import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return ( <Navbar bg="dark" data-bs-theme="dark">
    <Container>
    <Navbar.Brand href="#home">Serro revestimiento</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link href="#home">pisos</Nav.Link>
        <Nav.Link href="#features">paredes</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav><CartWidget/> 
    </Container>
</Navbar>
    )
}
