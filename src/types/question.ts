export type question = {
  title: string;
  variants: string[];
  correct: string;
};

export type questionData = { question: question } & {
  answer: string | undefined;
};
