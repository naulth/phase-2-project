import React, {useState} from "react"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../index.css'

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
            director: director,
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
      <Form className="addForm" onSubmit={handleSubmit}>
          <Form.Control onChange={handleName} type="text" name="name" placeholder="Name"/>
          <Form.Control onChange={handleThumbnail} type="text" name="thumbnail" placeholder="Thumbnail URL" />
          <Form.Control onChange={handleDirector} type="text" name="director" placeholder="Director" />
          <Form.Control onChange={handleSummary} type="text" name="summary" placeholder="Summary"/>
          <Form.Control onChange={handleRef} type="text" name="ref" placeholder="Reference URL"/>
        <Button className="add-button" type="submit">
          Add A Movie
        </Button>
      </Form>
    )
}
export default AddMovieForm

