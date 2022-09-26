import React from 'react';

const Start = ({ RestartGame }) => {
  return (
    <div className="start">
      <img src="https://cdn-icons-png.flaticon.com/512/5359/5359868.png" alt="congratulations" />
      <h2>
        В этом небольшом квизе вы выясните, насколько хорошо вы владете знаниями о React JS. Вопросы
        очень легкие, придуманные исключительно с целью создания этого опроса.
      </h2>
      <button onClick={RestartGame}>Перейти к вопросам</button>
    </div>
  );
};

export default Start;
