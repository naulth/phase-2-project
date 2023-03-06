import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(){
    return (
        <Card style={{width: '18rem'}} className='bg-dark border-light' >
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Card Text</Card.Text>
                <Button variant='light'>Details</Button>
            </Card.Body>
        </Card>
    );
}

export default Cards;

