import React from 'react'
import BookCards from './Card'

function BooksPage({booksArray}){
    
    const booksComponents = booksArray.map(book => <BookCards key={book.id} bookName={book.name}/>)

    return(
        <main>
            <div>
                <h2>Science-Fiction and Fantasy Books</h2>
                <button>Add A Book</button>
            </div>
            <div>
                {booksComponents}
            </div>
            
        </main>
        
    )
}

export default BooksPage