import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function MovieCards({movieName, movieImg}){
    return (
            <Card style={{width: '12rem'}} className='bg-dark border-light' >
                <Card.Body>
                    <Card.Title>{movieName}</Card.Title>
                    <Card.Img variant="top" src={movieImg}/>
                    <Button variant='light'>Details</Button>
                </Card.Body>
            </Card>
    );
}

export default MovieCards;
