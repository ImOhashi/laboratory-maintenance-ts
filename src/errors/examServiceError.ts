export class ExamServiceError extends Error {
    constructor(paramName?: string) {
      super(paramName);
      this.name = "ExamServiceError";
    }
  }
  