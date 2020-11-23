import { InternalServerError } from "@tsed/exceptions";

export class ServerError extends InternalServerError {
  constructor(private msg: string) {
    super(`Server error for ${msg}`);
  }
}
