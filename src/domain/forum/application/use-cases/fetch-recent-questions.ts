import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import { Question } from "../../enterprise/entities/question";
import { QuestionRepository } from "../repositories/questions-repository";

interface FetchRecentQuestionsUseCaseRequest {
  page: number;
}

interface FetchRecentQuestionsUseCaseResponse {
  questions: Question[];
}

export class FetchRecentQuestionsUseCase {
  constructor(private questionsRepository: QuestionRepository) {}

  async execute({
    page,
  }: FetchRecentQuestionsUseCaseRequest): Promise<FetchRecentQuestionsUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page });

    if (!questions) {
      throw new Error("Questions not found.");
    }

    return {
      questions,
    };
  }
}
