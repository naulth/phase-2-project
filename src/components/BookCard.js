import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.css'
import { Heart } from 'react-bootstrap-icons';
import { HeartFill } from 'react-bootstrap-icons';
import BookModal from './BookModal'
import BookDeleteModal from './BookDeleteModal'

function BookCards({bookName, bookImg, bookSummary, bookRef, bookId, deleteBook}){
    
    const[showLike, setShowLike] = useState(true)
    const handleLike = () => {
        setShowLike(showLike => !showLike)
    }

    return (
            <Card style={{width: '14rem'}} className='bg-dark border-light' >
                <Card.Body>
                    
                    <Card.Img variant="top photophoto" src={bookImg}/>
                    
                    <BookModal bookSummary={bookSummary} bookRef={bookRef} bookName={bookName}/>
                    <BookDeleteModal bookId={bookId} deleteBook={deleteBook}/>
                    <Button onClick={handleLike} variant='pink'>
                        {showLike ? <Heart color='pink'/> : <HeartFill color="pink" /> }
                    </Button>
                    <Card.Title>{bookName}</Card.Title>
                    
                    
                </Card.Body>
            </Card>
    );
}

export default BookCards;

