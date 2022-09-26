import { shuffleArray } from './UsefulMethods';

export function Game({ questionData, setNumberQuestion, countQuestions, numberQuestion }) {
  const { title, variants, correct } = questionData.question;

  const clickOnAnswer = (variant) => {
    setNumberQuestion((prevNumber) => prevNumber + 1);
    questionData.answer = variant;
  };

  const getWidthProgressBar = () => {
    return (numberQuestion / countQuestions) * 100;
  };

  return (
    <>
      <div className="progress">
        <div style={{ width: `${getWidthProgressBar()}%` }} className="progress__inner"></div>
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
