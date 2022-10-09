import { question, questionData } from '../types/question';
import { shuffleArray } from '../UsefulMethods';

type typeProps = {
  questionData: questionData;
  setNumberQuestion: React.Dispatch<React.SetStateAction<number>>;
  countQuestions: number;
  numberQuestion: number;
};

export function Game({
  questionData,
  setNumberQuestion,
  countQuestions,
  numberQuestion,
}: typeProps) {
  const { title, variants, correct } = questionData.question;

  const clickOnAnswer = (variant: string) => {
    setNumberQuestion((prevNumber: number) => prevNumber + 1);
    questionData.answer = variant;
  };

  const getWidthProgressBar = () => {
    return (numberQuestion / countQuestions) * 100;
  };

  return (
    <>
      <div className='progress'>
        <div
          style={{ width: `${getWidthProgressBar()}%` }}
          className='progress__inner'></div>
      </div>
      <h1>{title}</h1>
      <ul>
        {shuffleArray(variants).map((variant, index) => (
          <li onClick={() => clickOnAnswer(variant)} key={index}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
}
