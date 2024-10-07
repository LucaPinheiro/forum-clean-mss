import { expect, it, beforeEach, describe } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import { InMemoryAnswersRepository } from "test/repositories/in-memory-answers-repository";

let inMemoryAnswersRepository: InMemoryAnswersRepository;
let sut: AnswerQuestionUseCase;

describe("Create Question", () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository();
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository);
  });

  it("should be able to create a answer", async () => {
    const { answer } = await sut.execute({
      questionId: "1",
      instructorId: "instructor",
      content: "conteúdo da resposta",
    });
    expect(answer.id).toBeTruthy();
    expect(answer.content).toEqual("conteúdo da resposta");
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id);
  });
});
