import { Either, left, right } from "../../../../core/either";
import { QuestionCommentsRepository } from "../repositories/question-comments-repository";

interface DeleteQuestionCommentUseCaseRequest {
  authorId: string;
  questionCommentId: string;
}

type DeleteQuestionCommentUseCaseResponse = Either<string, {}>;

export class DeleteQuestionCommentUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}
  async execute({
    authorId,
    questionCommentId,
  }: DeleteQuestionCommentUseCaseRequest): Promise<DeleteQuestionCommentUseCaseResponse> {
    const questionComment =
      await this.questionCommentsRepository.findById(questionCommentId);

    if (!questionComment) {
      return left("Question comment not found.");
    }

    if (questionComment.authorId.toString() !== authorId) {
      throw new Error("You are not the author of this comment.");
    }

    await this.questionCommentsRepository.delete(questionComment);
    return right({});
  }
}
