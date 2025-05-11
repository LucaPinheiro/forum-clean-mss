import { Either, left, right } from "../../../../core/either";
import { QuestionCommentsRepository } from "../repositories/question-comments-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface DeleteQuestionCommentUseCaseRequest {
  authorId: string;
  questionCommentId: string;
}

type DeleteQuestionCommentUseCaseResponse = Either<ResourceNotFoundError, {}>;

export class DeleteQuestionCommentUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}
  async execute({
    authorId,
    questionCommentId,
  }: DeleteQuestionCommentUseCaseRequest): Promise<DeleteQuestionCommentUseCaseResponse> {
    const questionComment =
      await this.questionCommentsRepository.findById(questionCommentId);

    if (!questionComment) {
      return left(new ResourceNotFoundError("Question comment"));
    }

    if (questionComment.authorId.toString() !== authorId) {
      throw new Error("You are not the author of this comment.");
    }

    await this.questionCommentsRepository.delete(questionComment);
    return right({});
  }
}
