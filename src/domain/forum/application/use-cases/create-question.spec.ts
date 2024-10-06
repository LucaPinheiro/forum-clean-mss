import { expect, test } from "vitest";
import { QuestionRepository } from "../repositories/questions-repository";
import { Question } from "../../enterprise/entities/question";
import { CreateQuestionUseCase } from "./create-question";

const fakeQuestionRepository: QuestionRepository = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create: async (question: Question) => {},
};

test("create an answer", async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository);

  const { question } = await createQuestion.execute({
    authorId: "1",
    title: "Nova pergunta",
    content: "conteúdo da pergunta",
  });
  expect(question.id).toBeTruthy();
  expect(question.content).toEqual("conteúdo da pergunta");
});
