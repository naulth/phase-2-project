import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.css'
import MovieModal from './MovieModal'
import { Heart } from 'react-bootstrap-icons';
import { HeartFill } from 'react-bootstrap-icons';

function MovieCards({movieName, movieImg, movieSummary, movieRef}){

    const[showLike, setShowLike] = useState(true)
    const handleLike = () => {
        setShowLike(showLike => !showLike)
    }

    return (
            <Card style={{width: '14rem'}} className='bg-dark border-light' >
                <Card.Body>
                    <Card.Img className="top photophoto" src={movieImg}/>
                    <MovieModal movieSummary={movieSummary} movieRef={movieRef} movieName={movieName}/>
                    <Button onClick={handleLike} variant='pink'>
                        {showLike ? <Heart color='pink'/> : <HeartFill color="pink" /> }
                    </Button>
                    <Card.Title>{movieName}</Card.Title>
                </Card.Body>
            </Card>
    );
}

export default MovieCards;
