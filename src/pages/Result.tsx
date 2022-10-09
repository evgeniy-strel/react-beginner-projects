import { questionData } from '../types/question';
import { getWordEndingQuestion } from '../UsefulMethods';

type typeProps = {
  countQuestions: number;
  RestartGame: () => void;
  questionsData: questionData[];
};

export function Result({
  questionsData,
  countQuestions,
  RestartGame,
}: typeProps) {
  const countRightAnswers: number = questionsData.reduce(
    (prevValue: number, questionData: questionData) =>
      prevValue +
      (questionData.question.correct == questionData.answer ? 1 : 0),
    0
  );

  return (
    <div className='result'>
      <img
        src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png'
        alt='congratulations'
      />
      <h1 className='result_title'>
        Вы ответили правильно на {countRightAnswers} вопрос
        {getWordEndingQuestion(countRightAnswers)} из {countQuestions}
      </h1>
      <hr />
      <div className='questions_result'>
        {questionsData.map((questionData) => {
          return (
            <>
              <h1>{questionData.question.title}</h1>
              <ul>
                {questionData.question.variants.map((variant) => (
                  <div
                    className={`question_result ${
                      variant == questionData.answer && 'user_answer'
                    }`}>
                    <li>{variant}</li>
                    {variant == questionData.question.correct && (
                      <img
                        src='https://cdn-icons-png.flaticon.com/512/5610/5610944.png'
                        width='24px'
                        height='24px'
                      />
                    )}
                  </div>
                ))}
              </ul>
            </>
          );
        })}
      </div>
      <button onClick={RestartGame}>Попробовать снова</button>
    </div>
  );
}
