import './index.scss';
import { Game } from './pages/Game';
import { Result } from './pages/Result';
import React from 'react';
import { shuffleArray } from './UsefulMethods';
import { questions } from './mocks/questions';
import Start from './pages/Start';
import { question } from './types/question';

let questionsData = questions.map((question: question) => ({
  question,
  answer: undefined,
}));

function App() {
  const [numberQuestion, setNumberQuestion] = React.useState(-1);
  const countQuestions: number = questionsData.length;

  const RestartGame = () => {
    setNumberQuestion(0);
    shuffleArray(questionsData);
  };

  return (
    <div className='App'>
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
