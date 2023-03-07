import react, {useState, useEffect} from "react"

function AddBookForm() {

    const [title, setTitle] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [image, setImage] = useState('')
    const [author, setAuthor] = useState('')
    const [summary, setSummary] = useState('')
    const [ref, setRef] = useState('')

    const handleTitle = (e) => {setTitle(e.target.value)}
    const handleThumbnail = (e) => {setThumbnail(e.target.value)}
    const handleImage = (e) => {setImage(e.target.value)}
    const handleAuthor = (e) => {setAuthor(e.target.value)}
    const handleSummary = (e) => {setSummary(e.target.value)}
    const handleRef = (e) => {setRef(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const newBook ={
            title: title,
            thumbnail: thumbnail,
            image: image,
            author: author,
            summary: summary,
            ref: ref
        }
    }

    return(
        <div >
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleTitle} type="text" name="title" placeholder="Title"/>
          <input onChange={handleThumbnail} type="text" name="thumbnail" placeholder="Thumbnail URL" />
          <input onChange={handleImage} type="text" name="image" placeholder="Image URL" />
          <input onChange={handleAuthor} type="text" name="author" placeholder="Author" />
          <input onChange={handleSummary} type="text" name="summary" placeholder="Summary"/>
          <input onChange={handleRef} type="text" name="ref" placeholder="Referance URL"/>
        </div>
        <button type="submit">
          Add A Book
        </button>
      </form>
    </div>
    )
}