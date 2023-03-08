import React from 'react'
import BookCards from './BookCard'
import CardGroup from 'react-bootstrap/CardGroup'
import AddBookForm from './AddBookForm'
import SearchBooks from './SearchBooks'


function BooksPage({booksArray, addBook, changeSearch}){
    
    const booksComponents = booksArray.map(book => <BookCards key={book.id} bookName={book.name} bookImg={book.thumbnail}/>)

    return(
        <main>
            <SearchBooks changeSearch={changeSearch}/>
            <div className="bookdiv">
                <h2>Science-Fiction and Fantasy Books</h2>
                <AddBookForm addBook={addBook}/>
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