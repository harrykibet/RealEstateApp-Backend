import {
 onCall
} from "firebase-functions/v2/https";

import {
    MpesaService
} from "./mpesaService";


import {
    MpesaClient
} from "./mpesaClient";



const service =
    new MpesaService(
        new MpesaClient()
    );

export const initiateMpesaPayment =
onCall(
{
    enforceAppCheck:true
},
async(request)=>{


const paymentRequest =
    request.data;


return await service.createPayment(
    paymentRequest
);


});