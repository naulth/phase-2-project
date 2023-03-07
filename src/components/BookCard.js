import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.css'

function BookCards({bookName, bookImg}){
    return (
            <Card style={{width: '14rem'}} className='bg-dark border-light' >
                <Card.Body>
                    <Card.Img variant="top photophoto" src={bookImg}/>
                    <Button variant='light btn btn-outline-dark buttonalign'>Details</Button>
                    <Card.Title>{bookName}</Card.Title>
                </Card.Body>
            </Card>
    );
}

export default BookCards;

