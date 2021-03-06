import React from 'react';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

function App() {
    return (
        <div className="App">
            <h1>Jotto</h1>
            <Congrats success={false} />
            <GuessedWords guessedWords={[{
                guessedWord: 'train',
                letterMatchCount: 3,
            }]} />
        </div>
  );
}

export default App;
