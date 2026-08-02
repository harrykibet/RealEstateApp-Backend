import { onRequest } from "firebase-functions/v2/https";
import { SecretService } from "./secretService";


const secretService = new SecretService();


export const getSecret = onRequest(
    {
        enforceAppCheck: true,
    },
    async (request, response) => {

        const secretId = request.query.secretId;


        if (
            typeof secretId !== "string" ||
            secretId.trim().length === 0
        ) {
            response
                .status(400)
                .send("Missing secretId parameter.");

            return;
        }


        try {

            const secret =
                await secretService.getSecret(secretId);


            response
                .status(200)
                .send(secret);

        } catch (error) {

            console.error(
                "Failed to retrieve secret",
                error
            );


            response
                .status(500)
                .send(
                    "Failed to retrieve secret."
                );
        }
    }
);