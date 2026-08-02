import {onCall} from "firebase-functions/v2/https";

/**
 * Sends a placeholder notification request.
 */
export const sendNotification = onCall(
  {
    enforceAppCheck: true,
  },
  async (request) => {
    const title = request.data?.title;
    const message = request.data?.message;
    if (typeof title !== "string" || typeof message !== "string") {
      throw new Error("Missing notification payload");
    }

    return {status: "sent", title, message};
  }
);
