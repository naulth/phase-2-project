import React, {useState} from "react"
import '../index.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function AddBookForm({addBook, handleHideBookForm}) {

    const [name, setName] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [author, setAuthor] = useState('')
    const [summary, setSummary] = useState('')
    const [ref, setRef] = useState('')

    const handleName = (e) => {setName(e.target.value)}
    const handleThumbnail = (e) => {setThumbnail(e.target.value)}
    const handleAuthor = (e) => {setAuthor(e.target.value)}
    const handleSummary = (e) => {setSummary(e.target.value)}
    const handleRef = (e) => {setRef(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const newBook ={
            name: name,
            thumbnail: thumbnail,
            author: author,
            summary: summary,
            ref: ref
        }

        addBook(newBook)

        fetch('http://localhost:3000/books', {
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(newBook)
        })

        setName('')
        setThumbnail('')
        setAuthor('')
        setSummary('')
        setRef('')

        handleHideBookForm()
    }

    return(
      <Form className="addForm" onSubmit={handleSubmit}>
        <div>
          <Form.Control onChange={handleName} type="text" name="name" placeholder="Name"/>
          <Form.Control onChange={handleThumbnail} type="text" name="thumbnail" placeholder="Thumbnail URL" />
          <Form.Control onChange={handleAuthor} type="text" name="author" placeholder="Author" />
          <Form.Control onChange={handleSummary} type="text" name="summary" placeholder="Summary"/>
          <Form.Control onChange={handleRef} type="text" name="ref" placeholder="Reference URL"/>
        </div>
        <Button className="add-button" type="submit">
          Add A Book
        </Button>
      </Form>
    )
}
export default AddBookForm

