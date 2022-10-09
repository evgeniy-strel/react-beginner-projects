export const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

export const getWordEndingQuestion = (countRightAnswers) => {
  let wordEnding = '';
  let twoLastFigures = +countRightAnswers % 100;
  let lastFigure = twoLastFigures % 10;
  if (
    (11 <= twoLastFigures && twoLastFigures <= 19) ||
    (5 <= lastFigure && lastFigure <= 9) ||
    lastFigure == 0
  )
    wordEnding += 'ов';
  else if (2 <= lastFigure && lastFigure <= 4) wordEnding += 'а';
  return wordEnding;
};
