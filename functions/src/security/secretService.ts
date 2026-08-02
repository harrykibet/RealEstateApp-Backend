import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

export interface ISecretService {
    getSecret(secretId: string): Promise<string>;
}


export class SecretService implements ISecretService {

    private readonly client: SecretManagerServiceClient;

    constructor() {
        this.client = new SecretManagerServiceClient();
    }


    async getSecret(secretId: string): Promise<string> {

        const projectId = process.env.GCLOUD_PROJECT;

        if (!projectId) {
            throw new Error("GCLOUD_PROJECT environment variable missing");
        }


        const [version] = await this.client.accessSecretVersion({
            name:
                `projects/${projectId}/secrets/${secretId}/versions/latest`,
        });


        const payload = version.payload?.data;


        if (!payload) {
            throw new Error(
                `Secret ${secretId} has empty payload`
            );
        }


        return payload.toString();
    }
}