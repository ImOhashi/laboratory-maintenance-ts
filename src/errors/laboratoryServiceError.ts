export class LaboratoryServiceError extends Error {
  constructor(paramName?: string) {
    super(paramName);
    this.name = "LaboratoryServiceError";
  }
}
