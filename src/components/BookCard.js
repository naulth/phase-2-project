import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.css'
import { Heart } from 'react-bootstrap-icons';
import { HeartFill } from 'react-bootstrap-icons';





const handleClick = ()=>{
    
    console.log('is this clicking?')
}




function BookCards({bookName, bookImg}){
    return (
            <Card style={{width: '14rem'}} className='bg-dark border-light' >
                <Card.Body>
                    <Card.Img variant="top photophoto" src={bookImg}/>
                    <Button variant='light btn btn-outline-dark buttonalign'>Details</Button>
                    <Button onClick={handleClick} variant='pink'>
                        <Heart color='pink'/>
                    </Button>
                    <Card.Title>{bookName}</Card.Title>
                </Card.Body>
            </Card>
    );
}

export default BookCards;

