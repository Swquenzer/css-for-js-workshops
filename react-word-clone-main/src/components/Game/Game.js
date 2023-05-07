import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import AnswerForm from '../AnswerForm';
import GuessResults from '../GuessResults';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('IN_PROGRESS');
  
  const addGuess = (guessVal) => {
    const nextGuessVal = checkGuess(guessVal, answer);
    const nextGuesses = [...guesses, nextGuessVal];
    setGuesses(nextGuesses);

    console.log(nextGuessVal);

    if(nextGuesses.length < NUM_OF_GUESSES_ALLOWED)
      setGameStatus('IN_PROGRESS');
    else {
      if(guessVal === answer) {
        setGameStatus('WON');
      } else {
        setGameStatus('LOST')
      }
    }
  }

  return (
    <>
      <GuessResults 
        guesses={guesses}
      />
      <AnswerForm 
        addGuess={addGuess}
        isDisabled={gameStatus !== 'IN_PROGRESS'}
      />
      {gameStatus === 'WON' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            {' '}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {gameStatus === 'LOST' && (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )}
    </>
  );
}

export default Game;
   