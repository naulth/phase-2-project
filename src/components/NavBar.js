import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function TheNavBar() {
    return(
        <Navbar expand="sm" sticky="top" bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href="home">
                    The Science-Fiction and Fantasy Database
                </Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href="#books">Books</Nav.Link>
                    <Nav.Link href="#books">Movies</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default TheNavBar