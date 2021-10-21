import { useState, useEffect, useMemo } from 'react';

import './app.css';
import Pyramid from './components/Pyramid';
import Start from './components/Start';
import Timer from './components/Timer';
import { Trivia } from './components/Trivia';
import { DEFAULT_EARNED, YOU_EARNED } from './utils/constants';
import { getDataMoneyPyramid } from './utils/restMoneyPyramid';
import { getDataQuestion } from './utils/restQuestion';

function App() {
  const [userName, setUserName] = useState(null);

  const dataMoneyPyramid = useMemo(() => getDataMoneyPyramid(), []);
  const dataQuestions = useMemo(() => getDataQuestion(), []);

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stopGame, setStopGame] = useState(false);
  const [earned, setEarned] = useState(DEFAULT_EARNED);

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        dataMoneyPyramid.find((money) => money.id === questionNumber - 1)
          .amount,
      );
  }, [dataMoneyPyramid, questionNumber]);

  return (
    <div className="app">
      {userName ? (
        <>
          <div className="main">
            {stopGame ? (
              <h1 className="endText">{`${YOU_EARNED}${earned}`}</h1>
            ) : (
              <>
                <Timer
                  setStopGame={setStopGame}
                  questionNumber={questionNumber}
                />
                <div className="buttom">
                  <Trivia
                    data={dataQuestions}
                    setStopGame={setStopGame}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <Pyramid
            dataMoneyPyramid={dataMoneyPyramid}
            questionNumber={questionNumber}
          />
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
