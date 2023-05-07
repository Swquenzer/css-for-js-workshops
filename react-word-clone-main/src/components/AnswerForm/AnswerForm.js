import React, { useState } from 'react';
import styles from './answerForm.module.css';

const AnswerForm = ({ addGuess, isDisabled }) => {
  const [ userAnswer, setUserAnswer ] = useState('');
  const canSubmit = (val) => (val.length === 5);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    
    if(canSubmit(userAnswer)) {
      addGuess(userAnswer);
      setUserAnswer('');
    }
  }

  return (
    <form 
      className={styles['answer-form']}
      onSubmit={handleAnswerSubmit}
    >
      <label htmlFor="answerInput">
        Enter guess:
      </label>
      <input 
        className={styles['answer-input']}
        id="answerInput"
        type="text"
        value={userAnswer}
        maxLength={5}
        disabled={isDisabled}
        onChange={(e) => {
          setUserAnswer(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default AnswerForm;
