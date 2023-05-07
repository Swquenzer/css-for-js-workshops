import React from "react";

import Guess from '../Guess';

import styles from './guessResults.module.css';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const GuessResults = ({ guesses }) => {
  return (
    <div className={styles['guess-results']}>
      {
        range(0, NUM_OF_GUESSES_ALLOWED, 1).map((_, i) => {
          return (
            <Guess 
              key={i}
              guess={guesses[i]}  
              />
          );
        })
      }
    </div>
  )
}

export default GuessResults;
