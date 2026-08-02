import axios, { AxiosInstance } from "axios";


export class MpesaClient {

    private readonly http: AxiosInstance;


    constructor() {

        this.http = axios.create({
            baseURL:
                "https://sandbox.safaricom.co.ke",
            timeout: 10000
        });

    }


    async initiateStkPush(
        accessToken: string,
        payload: unknown
    ) {

        const response =
            await this.http.post(
                "/mpesa/stkpush/v1/processrequest",
                payload,
                {
                    headers: {
                        Authorization:
                            `Bearer ${accessToken}`
                    }
                }
            );


        return response.data;
    }
}