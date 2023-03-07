import React from 'react'
import BookCards from './BookCard'
import CardGroup from 'react-bootstrap/CardGroup'
import AddMovieForm from './AddMovieForm.js'


function MoviesPage({moviesArray}){
    
    const moviesComponents = moviesArray.map(movie => <BookCards key={movie.id} bookName={movie.name} bookImg={movie.thumbnail}/>)

    return(
        <main>
            <div>
                <h2>Science-Fiction and Fantasy Movies</h2>
                <AddMovieForm/>
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