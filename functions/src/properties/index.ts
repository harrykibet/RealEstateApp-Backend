import {onCall} from "firebase-functions/v2/https";

/**
 * Returns a placeholder property list.
 */
export const listProperties = onCall(
  {
    enforceAppCheck: true,
  },
  async () => {
    return {properties: []};
  }
);
