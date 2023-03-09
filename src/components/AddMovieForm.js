import React, {useState} from "react"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../index.css'

function AddMovieForm({addMovie, handleHideMovieForm}) {

    const [name, setName] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [director, setDirector] = useState('')
    const [keyword, setKeyword] = useState('')
    const [summary, setSummary] = useState('')
    const [ref, setRef] = useState('')

    const handleName = (e) => {setName(e.target.value)}
    const handleThumbnail = (e) => {setThumbnail(e.target.value)}
    const handleKeyword = (e) => {setKeyword(e.target.value)}
    const handleDirector = (e) => {setDirector(e.target.value)}
    const handleSummary = (e) => {setSummary(e.target.value)}
    const handleRef = (e) => {setRef(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const newMovie ={
            name: name,
            thumbnail: thumbnail,
            keyword: keyword,
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

        setName('')
        setThumbnail('')
        setKeyword('')
        setDirector('')
        setSummary('')
        setRef('')

        handleHideMovieForm()
    }

    return(
      <Form className="addForm" onSubmit={handleSubmit}>
            <Form.Control onChange={handleName} type="text" name="name" placeholder="Name"/>
            <Form.Control onChange={handleThumbnail} type="text" name="thumbnail" placeholder="Thumbnail URL" />
            <Form.Control onChange={handleKeyword} type="text" name="keyword" placeholder="Keyword, Keyword" />
            <Form.Control onChange={handleDirector} type="text" name="director" placeholder="Director" />
            <Form.Control onChange={handleSummary} type="text" name="summary" placeholder="Summary"/>
            <Form.Control onChange={handleRef} type="text" name="ref" placeholder="Reference URL"/>
            <Button className="add-button" type="submit">Add A Movie</Button>
            <Button className="add-button" onClick={handleHideMovieForm}>Close Form</Button>
      </Form>
    )
}
export default AddMovieForm

