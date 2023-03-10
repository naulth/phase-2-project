import React from 'react'
import {NavLink} from 'react-router-dom'
import '../index.css';


function TheNavBar() {

    return(
        <nav className='me-auto'>
            <a href="https://media0.giphy.com/media/gVoBC0SuaHStq/giphy.gif?cid=ecf05e47mmaw7m83kg7jhoc1rtpo9jbokfykrha64669qbuz&rid=giphy.gif&ct=g" target="_blank" rel="noreferrer noopener"><img src='../wizard-favicon.png' alt="wizard" height="100px" /></a>
            <NavLink className="NavLink" exact to = "./">Home</NavLink>
            <NavLink className="NavLink" to = "/books">Books</NavLink>
            <NavLink className="NavLink" to = "/movies">Movies</NavLink>
            <NavLink className="NavLink" to = "/games">Games</NavLink>
        </nav>
    )
}
export default TheNavBar