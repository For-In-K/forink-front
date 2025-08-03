export function mapAnswers(answers: string[]) {
  return answers.map((answer, idx) => ({ answerId: idx, answer }));
}
