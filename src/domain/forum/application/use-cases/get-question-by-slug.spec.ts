import { expect, it, beforeEach, describe } from "vitest";

import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { GetQuestionBySlugUseCase } from "./get-question-by-slug";
import { Question } from "../../enterprise/entities/question";
import { Slug } from "../../enterprise/entities/value-objects/slug";
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: GetQuestionBySlugUseCase;

describe("Get Question By Slug", () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository);
  });
  it("should be able to get a question by slug", async () => {
    const newQuestion = Question.create({
        authorId: new UniqueEntityID(),
        title: 'Example test',
        slug: Slug.create('example-question'),
        content: 'Example content'
    })
    
    inMemoryQuestionsRepository.create(newQuestion)

    const { question } = await sut.execute({
        slug: 'example-question'
    });
    
    expect(question.id).toBeTruthy()
  });
});
