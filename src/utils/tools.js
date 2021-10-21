export const delay = (duration, callback) => {
  setTimeout(() => {
    callback();
  }, duration);
};

export const handleClickTrivia =
  (
    setSelectAnswer,
    setClassNameAnswer,
    setQuestionNumber,
    correctAnswer,
    wronAnswer,
    setStopGame,
    delay
  ) =>
  (answer) => {
    setSelectAnswer(answer);
    setClassNameAnswer('answer active');
    delay(3000, () => {
      setClassNameAnswer(answer.correct ? 'answer correct' : 'answer wrong');
    });
    delay(5000, () => {
      if (answer.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectAnswer(null);
        });
      } else {
        wronAnswer();
        delay(1000, () => {
          setStopGame(true);
        });
      }
    });
  };
