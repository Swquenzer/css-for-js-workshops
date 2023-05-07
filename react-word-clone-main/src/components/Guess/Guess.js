import React from "react";

import styles from './guess.module.css';

import { range } from '../../utils';

const Guess = ({ guess }) => {
  return (
    <p className={styles['guess']}>
      {range(0, 5, 1).map((_, i) => (
        <span key={i} className={`${styles['guess-cell']} cell ${guess && guess[i]?.status}`}>
          {guess && guess[i]?.letter}
        </span>
      ))}
    </p>
    
  )
}

export default Guess;
