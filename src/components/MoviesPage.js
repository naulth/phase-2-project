import React from 'react'
import MovieCards from './MovieCard'
import CardGroup from 'react-bootstrap/CardGroup'
import AddMovieForm from './AddMovieForm.js'
import '../index.css';


function MoviesPage({moviesArray, addMovie}){
    
    const moviesComponents = moviesArray.map(movie => <MovieCards key={movie.id} movieName={movie.name} movieImg={movie.thumbnail}/>)

    return(
        <main>
            <div className="moviediv">
                <h2>Science-Fiction and Fantasy Movies</h2>
                <AddMovieForm addMovie={addMovie}/>
            </div>
            <div>
                <CardGroup>
                    {moviesComponents}
                </CardGroup>
            </div>
        </main>
        
    )
}

export default MoviesPage