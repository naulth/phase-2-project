import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.css'

function MovieCards({movieName, movieImg}){
    return (
            <Card style={{width: '14rem'}} className='bg-dark border-light' >
                <Card.Body>
                    <Card.Img className="top photophoto" src={movieImg}/>
                    <Button variant='light'>Details</Button>
                    <Card.Title>{movieName}</Card.Title>
                </Card.Body>
            </Card>
    );
}

export default MovieCards;
