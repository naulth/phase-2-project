import React, {useState, useEffect} from "react"

function AddMovieForm() {

    const [title, setTitle] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [director, setDirector] = useState('')
    const [summary, setSummary] = useState('')
    const [ref, setRef] = useState('')

    const handleTitle = (e) => {setTitle(e.target.value)}
    const handleThumbnail = (e) => {setThumbnail(e.target.value)}
    const handleDirector = (e) => {setDirector(e.target.value)}
    const handleSummary = (e) => {setSummary(e.target.value)}
    const handleRef = (e) => {setRef(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const newMovie ={
            title: title,
            thumbnail: thumbnail,
            author: director,
            summary: summary,
            ref: ref
        }
    }

    return(
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleTitle} type="text" name="title" placeholder="Title"/>
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

