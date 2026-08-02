import {
    onRequest
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
    onRequest(
        {
            enforceAppCheck:true
        },
        async(req,res)=>{


        try {


            const result =
                await service.createPayment(
                    req.body
                );


            res.status(200)
                .json(result);



        } catch(error){


            console.error(error);


            res.status(500)
                .json({
                    message:
                    "Payment initiation failed"
                });

        }

    });