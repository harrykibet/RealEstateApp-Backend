export interface MpesaPaymentRequest {
    phoneNumber: string;
    amount: number;
    accountReference: string;
    transactionDescription: string;
}


export interface MpesaPaymentResponse {
    checkoutRequestId: string;
    merchantRequestId: string;
    responseDescription: string;
}