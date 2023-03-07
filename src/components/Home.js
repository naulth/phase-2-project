import React, {useState, useEffect} from 'react'
import BooksPage from './BooksPage'
import TheNavBar from "./NavBar"
import MoviesPage from "./MoviesPage"


function Home() {

    const [booksArray, setBooksArray] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Books')
            .then(r => r.json())
            .then(setBooksArray)
    },[])

    const [moviesArray, setMoviesArray] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Movies')
            .then(r => r.json())
            .then(setMoviesArray)
    },[])

    const addMovie = (newMovieObj) => {
        setMoviesArray([...moviesArray, newMovieObj])
    }

    const addBook = (newBookObj) => {
        setBooksArray([...booksArray, newBookObj])
    }

        
    return(
        
        <div>
            <TheNavBar/>
            <div>
                <h1>The Science-Fiction and Fantasy Database</h1>
            </div>
            <div>
                <p>The Science-Fiction and Fantasy Database is an ever growing collection of your favorite movies and books, along with some titles you may have yet to discover.</p>
                <p>Browse our catalogs to find your favorite titles, and if you don't see a personal favorite, please participate in this collaboritive project by submitting an entry.</p>
            </div>
            <div>
                <p>Authors: Hayden Nault & Jesse Hunter & Katelynn Morris</p>
            </div>
            <BooksPage addBook={addBook} booksArray={booksArray}/>
            <MoviesPage addMovie={addMovie} moviesArray={moviesArray}/>
        </div>
    )
}

export default Home