import React, {useState} from "react"

function AddBookForm({addBook}) {

    const [title, setTitle] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [author, setAuthor] = useState('')
    const [summary, setSummary] = useState('')
    const [ref, setRef] = useState('')

    const handleTitle = (e) => {setTitle(e.target.value)}
    const handleThumbnail = (e) => {setThumbnail(e.target.value)}
    const handleAuthor = (e) => {setAuthor(e.target.value)}
    const handleSummary = (e) => {setSummary(e.target.value)}
    const handleRef = (e) => {setRef(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const newBook ={
            title: title,
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
    }

    return(
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleTitle} type="text" name="title" placeholder="Title"/>
          <input onChange={handleThumbnail} type="text" name="thumbnail" placeholder="Thumbnail URL" />
          <input onChange={handleAuthor} type="text" name="author" placeholder="Author" />
          <input onChange={handleSummary} type="text" name="summary" placeholder="Summary"/>
          <input onChange={handleRef} type="text" name="ref" placeholder="Referance URL"/>
        </div>
        <button type="submit">
          Add A Book
        </button>
      </form>
    )
}
export default AddBookForm

