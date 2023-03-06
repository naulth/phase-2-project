import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(){
    return (
        <Card style={{ width: '18rem' }} bg= 'Dark' border= 'Light'>
            <Card.Img variant="top" src/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Card Text</Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default Cards;

