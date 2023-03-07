import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'
import '../index.css';

function TheNavBar() {

    return(
                <nav className='me-auto'>
                    <NavLink className="NavLink" exact to = "./">Home</NavLink>
                    <NavLink className="NavLink" to = "/books">Books</NavLink>
                    <NavLink className="NavLink" to = "/movies">Movies</NavLink>
                </nav>
    )
}
export default TheNavBar