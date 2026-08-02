import { MpesaClient } from "./mpesaClient";
import {
    MpesaPaymentRequest
} from "./models";


export class MpesaService {


    constructor(
        private readonly client: MpesaClient
    ) {}



    async createPayment(
        request: MpesaPaymentRequest
    ) {


        const token =
            await this.generateAccessToken();



        const response =
            await this.client.initiateStkPush(
                token,
                {
                    BusinessShortCode:
                        process.env.MPESA_SHORTCODE,

                    Amount:
                        request.amount,

                    PhoneNumber:
                        request.phoneNumber,

                    AccountReference:
                        request.accountReference,

                    TransactionDesc:
                        request.transactionDescription
                }
            );


        return response;
    }



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