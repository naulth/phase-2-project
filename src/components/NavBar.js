import React from 'react'
import {NavLink} from 'react-router-dom'
import '../index.css';

function TheNavBar() {

    return(
                <nav className='me-auto'>
                    <NavLink className="NavLink" exact to = "./">Home</NavLink>
                    <NavLink className="NavLink" to = "/books">Books</NavLink>
                    <NavLink className="NavLink" to = "/movies">Movies</NavLink>
                    <NavLink className="NavLink" to = "/games">Games</NavLink>
                </nav>
    )
}
export default TheNavBar