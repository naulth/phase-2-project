import React, {useState} from "react"
import '../index.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


function AddGameForm({addGame, handleHideGameForm}) {

	// Setting State for our form

    const [name, setName] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [keyword, setKeyword] = useState('')
    const [developer, setDeveloper] = useState('')
    const [summary, setSummary] = useState('')
    const [ref, setRef] = useState('')

	// Handlers for submission values

    const handleName = (e) => {setName(e.target.value)}
    const handleThumbnail = (e) => {setThumbnail(e.target.value)}
    const handleKeyword = (e) => {setKeyword(e.target.value)}
    const handleDeveloper = (e) => {setDeveloper(e.target.value)}
    const handleSummary = (e) => {setSummary(e.target.value)}
    const handleRef = (e) => {setRef(e.target.value)}

	// Submit handler setting the information to be posted to the DB and  its POST request

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const newGame ={
            name: name,
            thumbnail: thumbnail,
            keyword: keyword,
            developer: developer,
            summary: summary,
            ref: ref,
            likeBtn: true
        }

        addGame(newGame)

        fetch('http://localhost:3000/games', {
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(newGame)
        })

        setName('')
        setThumbnail('')
        setKeyword('')
        setDeveloper('')
        setSummary('')
        setRef('')

        handleHideGameForm()
    }

	// We are returning the format of out form as well as their submit buttons. Making sure that the handlers are placed in their correct places

    return(
        <Form className="addForm" onSubmit={handleSubmit}>
            <div>
                <Form.Control onChange={handleName} type="text" name="name" placeholder="Name"/>
                <Form.Control onChange={handleThumbnail} type="text" name="thumbnail" placeholder="Thumbnail URL" />
                <Form.Control onChange={handleKeyword} type="text" name="keyword" placeholder="Keyword, Keyword" />
                <Form.Control onChange={handleDeveloper} type="text" name="developer" placeholder="Developer" />
                <Form.Control onChange={handleSummary} type="text" name="summary" placeholder="Summary"/>
                <Form.Control onChange={handleRef} type="text" name="ref" placeholder="Reference URL"/>
            </div>
            <Button className="add-button" type="submit">Add A Game</Button>
            <Button className="add-button" onClick={handleHideGameForm}>Close Form</Button>
        </Form>
    )
}
export default AddGameForm

