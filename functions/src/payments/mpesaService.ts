import {MpesaClient} from "./mpesaClient";
import {MpesaPaymentRequest} from "./models";

/**
 * Service for Mpesa payment creation.
 */
export class MpesaService {
  /**
   * Creates a new MpesaService instance.
   * @param {MpesaClient} client Mpesa client used to perform API requests.
   */
  constructor(private readonly client: MpesaClient) {}

  /**
   * Creates an Mpesa payment request.
   * @param {MpesaPaymentRequest} request Payment request payload.
   * @return {Promise<unknown>} The payment response.
   */
  async createPayment(request: MpesaPaymentRequest) {
    const token = await this.generateAccessToken();

    const response = await this.client.initiateStkPush(token, {
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Amount: request.amount,
      PhoneNumber: request.phoneNumber,
      AccountReference: request.accountReference,
      TransactionDesc: request.transactionDescription,
    });

    return response;
  }

  /**
   * Generates an OAuth access token for Mpesa.
   */
  private async generateAccessToken() {
    /*
      Later:
      - read consumer key
      - read consumer secret
      - call Daraja OAuth endpoint
    */
    return "ACCESS_TOKEN";
  }
}
