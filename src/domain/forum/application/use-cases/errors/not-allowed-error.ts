import { UseCaseError } from "../../../../../core/errors/use-case-error";

export class ResourceNotAllowedError extends Error implements UseCaseError {
  constructor(resource: string) {
    super(`${resource} not allowed.`);
    this.name = "ResourceAllowedError";
  }
}