import React, {useEffect} from 'react'
import BooksPage from './BooksPage'


function Home() {

    useEffect(() => {
        fetch('')
    },[])
    return(
        <div>
            
            <div>
                <h1>The Science-Fiction and Fantasy Database</h1>
            </div>
            <div>
                <p>The Science-Fiction and Fantasy Database is an ever growing collection of your favorite movies and books, along with some titles you may have yet to discover.</p>
                <p>Browse our catalogs to find your favorite titles, and if you don't see a personal favorite, please participate in this collaboritive project by submitting an entry.</p>
            </div>
            <div>
                <p>Authors: Hayden Nault & Jesse Hunter & Katelynn Morris</p>
            </div>
            <BooksPage />
        </div>
    )
}

export default Home