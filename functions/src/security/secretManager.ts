import {onCall} from "firebase-functions/v2/https";
import {SecretService} from "./secretService";

const secretService = new SecretService();

/**
 * Callable function that returns a secret value.
 */
export const getSecret = onCall(
  {
    enforceAppCheck: true,
  },
  async (request) => {
    const secretId = request.data.secretId;

    if (typeof secretId !== "string" || secretId.trim().length === 0) {
      throw new Error("Missing secretId");
    }

    try {
      const secret = await secretService.getSecret(secretId);
      return {value: secret};
    } catch (error) {
      console.error("Secret retrieval failed", error);
      throw new Error("Unable to retrieve secret");
    }
  }
);
