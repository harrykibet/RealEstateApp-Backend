import {SecretManagerServiceClient} from "@google-cloud/secret-manager";

/**
 * Secret service contract.
 */
export interface ISecretService {
  getSecret(secretId: string): Promise<string>;
}

/**
 * SecretManager-backed implementation.
 */
export class SecretService implements ISecretService {
  private readonly client: SecretManagerServiceClient;

  /**
   * Creates a new SecretService instance.
   */
  constructor() {
    this.client = new SecretManagerServiceClient();
  }

  /**
   * Reads a secret value from Secret Manager.
   * @param {string} secretId Name of the secret to retrieve.
   * @return {Promise<string>} Secret value as a string.
   */
  async getSecret(secretId: string): Promise<string> {
    const projectId = process.env.GCLOUD_PROJECT;

    if (!projectId) {
      throw new Error("GCLOUD_PROJECT environment variable missing");
    }

    const [version] = await this.client.accessSecretVersion({
      name: `projects/${projectId}/secrets/${secretId}/versions/latest`,
    });

    const payload = version.payload?.data;

    if (!payload) {
      throw new Error(`Secret ${secretId} has empty payload`);
    }

    return payload.toString();
  }
}
