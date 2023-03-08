import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.css'
import { Heart } from 'react-bootstrap-icons';
import { HeartFill } from 'react-bootstrap-icons';
import BookModal from './BookModal'

function BookCards({bookName, bookImg, bookSummary, bookRef}){
    
    const[showLike, setShowLike] = useState(true)
    const handleLike = () => {
        setShowLike(showLike => !showLike)
    }

    return (
            <Card style={{width: '14rem'}} className='bg-dark border-light' >
                <Card.Body>
                    <Card.Img variant="top photophoto" src={bookImg}/>
                    {/* <Button variant='light btn btn-outline-dark buttonalign'>Details</Button> */}
                    <BookModal bookSummary={bookSummary} bookRef={bookRef} bookName={bookName}/>
                    <Button onClick={handleLike} variant='pink'>
                        {showLike ? <Heart color='pink'/> : <HeartFill color="pink" /> }
                    </Button>
                    <Card.Title>{bookName}</Card.Title>
                </Card.Body>
            </Card>
    );
}

export default BookCards;

