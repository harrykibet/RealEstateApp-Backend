/**
 * Base application error.
 */
export class AppError extends Error {
  /**
   * Creates a new AppError.
   * @param {string} message Error message.
   */
  constructor(message: string) {
    super(message);
    this.name = "AppError";
  }
}

/**
 * Error thrown when an entity cannot be found.
 */
export class NotFoundError extends AppError {
  /**
   * Creates a new NotFoundError.
   * @param {string} message Error message.
   */
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}
