import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

interface AnswerAttachmentProps {
    answerId: string;
    attachmentId: string;
}

export class AnswerAttachment extends Entity<AnswerAttachmentProps> {
    static create(props: AnswerAttachmentProps, id?: UniqueEntityID): AnswerAttachment {
        const questionAttachment = new AnswerAttachment(props, id);
        return questionAttachment;
    }

    get answerId(): string {
        return this.props.answerId;
    }

    get attachmentId(): string {
        return this.props.attachmentId;
    }

}