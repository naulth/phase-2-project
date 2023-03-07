import React, {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import '../App.css';
import Home from "./Home"
import NavBar from "./NavBar"
import MoviesPage from "./MoviesPage"
import BooksPage from "./BooksPage"


function App() {

  const [booksArray, setBooksArray] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(r => r.json())
            .then(setBooksArray)
    },[])

    const [moviesArray, setMoviesArray] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(r => r.json())
            .then(setMoviesArray)
    },[])

    const addMovie = (newMovieObj) => {
        setMoviesArray([...moviesArray, newMovieObj])
    }

    const addBook = (newBookObj) => {
        setBooksArray([...booksArray, newBookObj])
    }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Switch>
          <Route path="/movies">
            <MoviesPage addMovie={addMovie} moviesArray={moviesArray}/>
          </Route>
          <Route path="/books">
            <BooksPage addBook={addBook} booksArray={booksArray}/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
