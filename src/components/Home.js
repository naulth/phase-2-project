import React from 'react'
import '../index.css'


function Home() {

    return(
        
        <div>
            <div>
                <h1>The Science-Fiction and Fantasy Database</h1>
            </div>
            <div className="aboutdiv">
                <p className="abouttext">The Science-Fiction and Fantasy Database is an ever growing collection of your favorite movies and books, along with some titles you may have yet to discover.</p><br/>
                <p className="abouttext">Browse our catalogs to find your favorite titles, and if you don't see a personal favorite, please participate in this collaboritive project by submitting an entry.</p>
            </div>
            <div>
                <p className="authors">Authors: Hayden Nault & Jesse Hunter & Katelynn Morris</p>
            </div>
        </div>
    )
}

export default Home