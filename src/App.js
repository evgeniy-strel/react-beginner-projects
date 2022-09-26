import './index.scss';
import { Game } from './components/Game';
import { Result } from './components/Result';
import React from 'react';
import { shuffleArray } from './components/UsefulMethods';
import { questions } from './questions';
import Start from './components/Start';

let questionsData = questions.map((question) => ({ question, answer: undefined }));

function App() {
  const [numberQuestion, setNumberQuestion] = React.useState(-1);
  const countQuestions = questionsData.length;

  const RestartGame = () => {
    setNumberQuestion(0);
    shuffleArray(questionsData);
  };

  // TO DO: SHOW CORRECT AND WRONG ANSWERS AFTER SEND ANSWERS

  return (
    <div className="App">
      {numberQuestion == -1 ? (
        <Start RestartGame={RestartGame} />
      ) : numberQuestion == questionsData.length ? (
        <Result
          countQuestions={countQuestions}
          questionsData={questionsData}
          RestartGame={RestartGame}
        />
      ) : (
        <Game
          setNumberQuestion={setNumberQuestion}
          numberQuestion={numberQuestion}
          countQuestions={countQuestions}
          questionData={questionsData[numberQuestion]}
        />
      )}
    </div>
  );
}

export default App;
