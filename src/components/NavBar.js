import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'
import '../index.css';

function TheNavBar() {

    return(
        <Navbar expand="lg" sticky="top" bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>
                    The Science-Fiction and Fantasy Database
                </Navbar.Brand>
                <Nav className='me-auto'>
                    <NavLink exact to = "./">Home</NavLink>
                    <NavLink to = "/books">Books</NavLink>
                    <NavLink to = "/movies">Movies</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default TheNavBar