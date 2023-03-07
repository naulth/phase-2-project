import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BookCards({bookName, bookImg}){
    return (
            <Card style={{width: '12rem'}} className='bg-dark border-light' >
                <Card.Body>
                    <Card.Title>{bookName}</Card.Title>
                    <Card.Img variant="top" src={bookImg}/>
                    <Button variant='light'>Details</Button>
                </Card.Body>
            </Card>
    );
}

export default BookCards;

