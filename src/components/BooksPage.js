import React, {useState} from 'react'
import BookCards from './BookCard'
import CardGroup from 'react-bootstrap/CardGroup'
import AddBookForm from './AddBookForm'
import '../index.css';


function BooksPage({booksArray, addBook}){
    
    const booksComponents = booksArray.map(book => <BookCards key={book.id} bookName={book.name} bookImg={book.thumbnail}/>)

    const [hideBookForm, setHideBookForm] = useState(true)
    const handleHideBookForm = () => {
        setHideBookForm(hideBookForm => !hideBookForm)
    }

    function FormButton({handleHideBookForm}) {
        return(
            <button onClick={handleHideBookForm} className="hideFormButton">Add a Book</button>
        )
    }

    return(
        <main>
            <div className="bookdiv">
                <h2>Science-Fiction and Fantasy Books</h2>
                <div className="formdiv">
                    {hideBookForm ? <FormButton handleHideBookForm={handleHideBookForm} className="hideFormButton" /> : <AddBookForm addBook={addBook} handleHideBookForm={handleHideBookForm}/>}
                </div>
            
            </div>
            <div>
                <CardGroup>
                    {booksComponents}
                </CardGroup>
            </div>
        </main>
        
    )
}

export default BooksPage