import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.css'
import { Heart } from 'react-bootstrap-icons';
import { HeartFill } from 'react-bootstrap-icons';
import BookModal from './BookModal'
import BookDeleteModal from './BookDeleteModal'

function BookCards({bookName, bookImg, bookSummary, bookRef, bookId, deleteBook, bookAuthor, likeBtn}){
    
    const[showLike, setShowLike] = useState(likeBtn)

    const handleLike = () => {
        setShowLike(showLike => !showLike)
        fetch(`http://localhost:3000/books/${bookId}` , {
	        method: "PATCH",
	        headers: {
		        "Content-Type": "application/json",
	        },
		    body: JSON.stringify({
                likeBtn: !showLike
            })
	    })
    }

    return (
            <Card style={{width: '14rem'}} className='bg-dark border-light rounded' >
                <Card.Body>
                    
                    <Card.Img variant="top photophoto" src={bookImg}/>
                    
                    <BookModal bookAuthor={bookAuthor} bookSummary={bookSummary} bookRef={bookRef} bookName={bookName}/>
                    <BookDeleteModal bookId={bookId} deleteBook={deleteBook}/>
                    <Button onClick={handleLike} variant='pink'>
                        {showLike ? <Heart color='pink'/> : <HeartFill color="pink" /> }
                    </Button>
                    <Card.Title className="cardtitle">{bookName}</Card.Title>
                    
                    
                </Card.Body>
            </Card>
    );
}

export default BookCards;

