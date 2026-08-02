import {onCall} from "firebase-functions/v2/https";

/**
 * Validates a user identifier and returns a confirmation result.
 */
export const validateUser = onCall(
  {
    enforceAppCheck: true,
  },
  async (request) => {
    const uid = request.data?.uid;
    if (typeof uid !== "string" || uid.trim().length === 0) {
      throw new Error("Missing uid");
    }

    return {uid, valid: true};
  }
);
