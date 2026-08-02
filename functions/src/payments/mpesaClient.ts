import axios, {AxiosInstance} from "axios";

/**
 * Client for sending requests to the Mpesa Daraja API.
 */
export class MpesaClient {
  private readonly http: AxiosInstance;

  /**
   * Creates a new MpesaClient.
   */
  constructor() {
    // eslint-disable-next-line import/no-named-as-default-member
    this.http = axios.create({
      baseURL: "https://sandbox.safaricom.co.ke",
      timeout: 10000,
    });
  }

  /**
   * Initiates an STK Push request.
   * @param {string} accessToken OAuth access token.
   * @param {*} payload Request payload.
   * @return {Promise<unknown>} Response body from the STK push call.
   */
  async initiateStkPush(accessToken: string, payload: unknown) {
    // eslint-disable-next-line import/no-named-as-default-member
    const response = await this.http.post(
      "/mpesa/stkpush/v1/processrequest",
      payload,
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    );

    return response.data;
  }
}
