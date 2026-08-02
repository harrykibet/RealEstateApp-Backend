/**
 * Dependency injection provider definition.
 */
export interface Provider<T> {
  provide: string;
  useClass: new (...args: unknown[]) => T;
}
