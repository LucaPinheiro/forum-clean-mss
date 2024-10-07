import { expect, it, beforeEach, describe  } from "vitest";
import { CreateQuestionUseCase } from "./create-question";

import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: CreateQuestionUseCase;

describe("Create Question", () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository);
  });
  console.log('deu merda', sut);
  it("should be able to create a question", async () => {
    const { question } = await sut.execute({
      authorId: "1",
      title: "Nova pergunta",
      content: "conteúdo da pergunta",
    });
    console.log(question);
    expect(question.id).toBeTruthy();
    expect(question.content).toEqual("conteúdo da pergunta");
  });
});
