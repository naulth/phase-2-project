import React, {useState} from 'react'
import BookCards from './BookCard'
import CardGroup from 'react-bootstrap/CardGroup'
import AddBookForm from './AddBookForm'
import '../index.css';
import SearchBooks from './SearchBooks'


function BooksPage({booksArray, addBook, changeSearch, deleteBook, likeBook}){

    // Mapping out our array and sending it in its own Cards component

    const booksComponents = booksArray.map(book => <BookCards key={book.id} bookId={book.id} bookName={book.name} bookImg={book.thumbnail} bookAuthor={book.author}bookSummary={book.summary} bookRef={book.ref} deleteBook={deleteBook} likeBtn={book.likeBtn} likeBook={likeBook}/>)

    // Setting state for hiding our form

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
            <SearchBooks changeSearch={changeSearch}/>
            <div className="bookdiv size">
                <h2>Science-Fiction and Fantasy Books</h2>
                <div className="formdiv">
                    {hideBookForm ? <FormButton handleHideBookForm={handleHideBookForm} className="hideFormButton" /> : <AddBookForm addBook={addBook} handleHideBookForm={handleHideBookForm}/>}
                </div>
            </div>
            <div className="carddiv">
                <CardGroup className='grid-container'>
                    {booksComponents}
                </CardGroup>
            </div>
        </main>
    )
}

export default BooksPage