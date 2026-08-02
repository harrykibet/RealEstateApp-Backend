/**
 * Abstraction for secret retrieval.
 */
export interface SecretProvider {
  getSecret(secretId: string): Promise<string>;
}
