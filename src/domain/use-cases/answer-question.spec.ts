import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer'

const fakeANswersRepository: AnswersRepository = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create: async (answer: Answer) => {},
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeANswersRepository)

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta',
  })
  expect(answer.content).toEqual('Nova resposta')
})
