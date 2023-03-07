import React, {useState} from "react"

function AddMovieForm({addMovie}) {

    const [name, setName] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [director, setDirector] = useState('')
    const [summary, setSummary] = useState('')
    const [ref, setRef] = useState('')

    const handleName = (e) => {setName(e.target.value)}
    const handleThumbnail = (e) => {setThumbnail(e.target.value)}
    const handleDirector = (e) => {setDirector(e.target.value)}
    const handleSummary = (e) => {setSummary(e.target.value)}
    const handleRef = (e) => {setRef(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const newMovie ={
            name: name,
            thumbnail: thumbnail,
            author: director,
            summary: summary,
            ref: ref
        }

        addMovie(newMovie)

        fetch('http://localhost:3000/movies', {
      method: "POST",
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(newMovie)
    })
    }

    return(
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleName} type="text" name="name" placeholder="Name"/>
          <input onChange={handleThumbnail} type="text" name="thumbnail" placeholder="Thumbnail URL" />
          <input onChange={handleDirector} type="text" name="director" placeholder="Director" />
          <input onChange={handleSummary} type="text" name="summary" placeholder="Summary"/>
          <input onChange={handleRef} type="text" name="ref" placeholder="Referance URL"/>
        </div>
        <button type="submit">
          Add A Movie
        </button>
      </form>
    )
}
export default AddMovieForm

