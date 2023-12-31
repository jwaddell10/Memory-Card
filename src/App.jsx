import { useState } from 'react'
import './App.css'
import DisplayPokemon from './Pokemon.jsx';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const updateScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const setNewHighScore = () => {
    setHighScore((prevScore) => prevScore + 1)
  }

  return (
    <>
      <div className='header'>
        <h1 className='gameTitle'>Memory Card</h1>
        <div className='scoreBoard'>
          <h3>Score: {score}</h3>
          <h3>High Score: {highScore}</h3>
        </div>
      </div>
      <DisplayPokemon updateScore={updateScore}
                      setNewHighScore={setNewHighScore} />
    </>
  );
}

//header
//body (with cards)

//header***
//title, have it centered with score underneath
//select easy, medium, hard? 

export default App
