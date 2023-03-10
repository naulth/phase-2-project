import React, {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import '../App.css';
import Home from "./Home"
import NavBar from "./NavBar"
import MoviesPage from "./MoviesPage"
import BooksPage from "./BooksPage"
import GamesPage from "./GamesPage"


function App() {

    // UseStates for Array iteration

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

    const[gamesArray, setGamesArray] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/games')
            .then(r => r.json())
            .then(setGamesArray)
    },[])

    // States for adding new Objects to the array

    const addMovie = (newMovieObj) => {
        setMoviesArray([...moviesArray, newMovieObj])
    }

    const addBook = (newBookObj) => {
        setBooksArray([...booksArray, newBookObj])
    }

    const addGame = (newGameObj) => {
        setGamesArray([...gamesArray, newGameObj])
    }

    // UseStates for searach functionality

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

    const byDeveloper = game => {
        if( game.developer.toLowerCase().includes(search)) {
        return true
        }
    }

    const byKeyword = book => {
        if( book.keyword.toLowerCase().includes(search)) {
        return true
        }
    }

    // Creating Search variants for the seperate catagories

    const bookSearch = book => {
        return byName(book) || byAuthor(book) || byKeyword(book)
    }

    const movieSearch = movie => {
        return byName(movie) || byDirector(movie) || byKeyword(movie)
    }

    const gameSearch = game => {
        return byName(game) || byDeveloper(game) || byKeyword(game)
    }

    const searchedBooks = booksArray.filter( bookSearch );

    const searchedMovies = moviesArray.filter( movieSearch );

    const searchedGames = gamesArray.filter( gameSearch );

    const changeSearch = newSearch => setSearch( newSearch.toLowerCase() )

    // Delete Filters

    const deleteBook = (doomedId) => {
        setBooksArray(booksArray.filter(book => book.id !== doomedId))
    }

    const deleteMovie = (doomedId) => {
        setMoviesArray(moviesArray.filter(movie => movie.id !== doomedId))
    }

    const deleteGame = (doomedId) => {
        setGamesArray(gamesArray.filter(game => game.id !== doomedId))
    }

    // Settings States for our like buttons. INVERSE DATAFLOW YIKES

    const likeGame = (likedId, likeBtn) => {

        const newGamesArray = [...gamesArray]

        const gameIndex = newGamesArray.findIndex(game => game.id === likedId)

        newGamesArray[ gameIndex].likeBtn = !likeBtn

        setGamesArray( newGamesArray )
    }

    const likeMovie = (likedId, likeBtn) => {

        const newMoviesArray = [...moviesArray]

        const movieIndex = newMoviesArray.findIndex(movie => movie.id === likedId)

        newMoviesArray[ movieIndex].likeBtn = !likeBtn

        setMoviesArray( newMoviesArray )
    }

    const likeBook = (likedId, likeBtn) => {

        const newBooksArray = [...booksArray]

        const bookIndex = newBooksArray.findIndex(book => book.id === likedId)

        newBooksArray[ bookIndex].likeBtn = !likeBtn

        setBooksArray( newBooksArray )
    }

    // We are returning our overall setup and dataflow structure for our project as well as setting all of our routes.

    return (
        <div className="App">
            <header>
                <NavBar className="App-header"/>
                <Switch>
                    <Route path="/movies">
                        <MoviesPage changeSearch={changeSearch} addMovie={addMovie} moviesArray={searchedMovies} deleteMovie={deleteMovie} likeMovie={likeMovie}/>
                    </Route>
                    <Route path="/books">
                        <BooksPage changeSearch={changeSearch} addBook={addBook} booksArray={searchedBooks} deleteBook={deleteBook} likeBook={likeBook}/>
                    </Route>
                    <Route path="/games">
                        <GamesPage changeSearch={changeSearch} addGame={addGame} gamesArray={searchedGames} deleteGame={deleteGame} likeGame={likeGame}/>
                    </Route>
                    <Route exact path="/">
                        <Home className="App-header"/>
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
