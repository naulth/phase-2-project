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

  const [search, setSearch] = useState('')

  const byName = book => {
    if( book.name.toLowerCase().includes(search)) {
      return true
    }
  }
  const byAuthor = book => {
    if( book.author.toLowerCase().includes(search)) {
      return true
    }
  }
  const byDirector = movie => {
    if( movie.director.toLowerCase().includes(search)) {
      return true
    }
  }
  const byKeyword = book => {
    if( book.keyword.toLowerCase().includes(search)) {
      return true
    }
  }
  
  const bookSearch = book => {
    return byName(book) || byAuthor(book) || byKeyword(book)
  }

  const movieSearch = movie => {
    return byName(movie) || byDirector(movie) || byKeyword(movie)
  }



  const searchedBooks = booksArray.filter( bookSearch );

  const searchedMovies = moviesArray.filter( movieSearch );

  const changeSearch = newSearch => setSearch( newSearch.toLowerCase() )


  const deleteBook = (doomedId) => {
    setBooksArray(booksArray.filter(book => book.id !== doomedId))
  }


  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
          <Switch>
            <Route path="/movies">
              <MoviesPage changeSearch={changeSearch} addMovie={addMovie} moviesArray={searchedMovies}/>
            </Route>
            <Route path="/books">
              <BooksPage changeSearch={changeSearch} addBook={addBook} booksArray={searchedBooks} deleteBook={deleteBook}/>
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
