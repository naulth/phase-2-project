import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.css'
import { Heart } from 'react-bootstrap-icons';
import { HeartFill } from 'react-bootstrap-icons';
import GameModal from './GameModal.js'
import GameDeleteModal from './GameDeleteModal'


function GameCards({gameName, gameImg, gameSummary, gameRef, gameId, deleteGame,gameDeveloper, likeBtn, likeGame}){

    // Handler for our like button its patch request. Inverse dataflow

    const handleLike = () => {

        likeGame(gameId, likeBtn)
        
        fetch(`http://localhost:3000/games/${gameId}` , {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                likeBtn: !likeBtn
            })
        })
    }

    // We are returning the basic layout and functionality of our card. As well as passing more data down to our modals.

    return (
        <Card style={{width: '14rem'}} className='bg-dark border-light rounded' >
            <Card.Body>
                <Card.Img variant="top photophoto" src={gameImg}/>
                <GameModal gameDeveloper={gameDeveloper} gameSummary={gameSummary} gameRef={gameRef} gameName={gameName}/>
                <GameDeleteModal gameId={gameId} deleteGame={deleteGame}/>
                <Button onClick={handleLike} variant='pink'>
                    {likeBtn ? <Heart color='pink'/> : <HeartFill color="pink" /> }
                </Button>
                <Card.Title className="cardtitle">{gameName}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default GameCards;

