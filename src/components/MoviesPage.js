import React, {useState} from 'react'
import MovieCards from './MovieCard'
import CardGroup from 'react-bootstrap/CardGroup'
import AddMovieForm from './AddMovieForm.js'
import '../index.css';


function MoviesPage({moviesArray, addMovie}){
    
    const moviesComponents = moviesArray.map(movie => <MovieCards key={movie.id} movieName={movie.name} movieImg={movie.thumbnail}/>)


    const [hideMovieForm, setHideMovieForm] = useState(true)
    const handleHideMovieForm = () => {
        setHideMovieForm(hideMovieForm => !hideMovieForm)
    }

    function FormButton({handleHideMovieForm}) {
        return(
            <button onClick={handleHideMovieForm} className="hideFormButton">Add a Movie</button>
        )
    }


    return(
        <main>
            <div className="moviediv size">
                <h2>Science-Fiction and Fantasy Movies</h2>
                <div className="formdiv">
                    {hideMovieForm ? <FormButton handleHideMovieForm={handleHideMovieForm} className="hideFormButton" /> : <AddMovieForm addMovie={addMovie} handleHideMovieForm={handleHideMovieForm}/>}
                </div>
            </div>
            <div>
                <CardGroup className='grid-container'>
                    {moviesComponents}
                </CardGroup>
            </div>
        </main>
        
    )
}

export default MoviesPage