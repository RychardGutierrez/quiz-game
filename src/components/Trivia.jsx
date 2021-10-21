import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

import { delay, handleClickTrivia } from '../utils/tools';

import playSound from '../sounds/play.mp3';
import correctSound from '../sounds/correct.mp3';
import wrongSound from '../sounds/wrong.mp3';

export const Trivia = ({
  data,
  setStopGame,
  setQuestionNumber,
  questionNumber,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [classNameAnswer, setClassNameAnswer] = useState('answer');

  const [letsPlay] = useSound(playSound);
  const [correctAnswer] = useSound(correctSound);
  const [wronAnswer] = useSound(wrongSound);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  useEffect(() => {
    if (!data[questionNumber - 1]) {
      setStopGame(true);
    }
  }, [data, questionNumber, setStopGame]);

  const handleClick = handleClickTrivia(
    setSelectAnswer,
    setClassNameAnswer,
    setQuestionNumber,
    correctAnswer,
    wronAnswer,
    setStopGame,
    delay,
  );

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer, index) => (
          <div
            className={selectAnswer === answer ? classNameAnswer : 'answer'}
            onClick={() => handleClick(answer)}
            key={index}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
};
