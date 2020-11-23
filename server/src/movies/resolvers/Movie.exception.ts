import { NotFound } from "@tsed/exceptions";

export class MovieNotFoundError extends NotFound {
  constructor(private id: string) {
    super(`Movie ${id} not found`);
  }
}
