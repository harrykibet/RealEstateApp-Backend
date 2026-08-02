/**
 * Common Firestore repository operations.
 */
export interface FirestoreRepository<T> {
  getById(id: string): Promise<T|null>;
  list(): Promise<T[]>;
}
