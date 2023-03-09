import React, {useState} from 'react'
import GameCards from './GameCard'
import CardGroup from 'react-bootstrap/CardGroup'
import AddGameForm from './AddGameForm.js'
import '../index.css';
import SearchGames from './SearchGames';


function GamesPage({gamesArray, addGame, changeSearch, deleteGame}){
    
    const gamesComponents = gamesArray.map(game => <GameCards key={game.id} gameId={game.id} gameDeveloper={game.developer} gameName={game.name} gameImg={game.thumbnail} gameSummary={game.summary} gameRef={game.ref} deleteGame={deleteGame} likeBtn={game.likeBtn}/>)

    const [hideGameForm, setHideGameForm] = useState(true)
    const handleHideGameForm = () => {
        setHideGameForm(hideGameForm => !hideGameForm)
    }

    function FormButton({handleHideGameForm}) {
        return(
            <button onClick={handleHideGameForm} className="hideFormButton">Add a Game</button>
        )
    }

    return(
        <main>
            <SearchGames changeSearch={changeSearch}/>
            <div className="gamediv size">
                <h2>Science-Fiction and Fantasy Games</h2>
                <div className="formdiv">
                    {hideGameForm ? <FormButton handleHideGameForm={handleHideGameForm} className="hideFormButton" /> : <AddGameForm addGame={addGame} handleHideGameForm={handleHideGameForm}/>}
                </div>
            </div>
            <div className="carddiv">
                <CardGroup className='grid-container'>
                    {gamesComponents}
                </CardGroup>
            </div>
        </main>
    )
}

export default GamesPage