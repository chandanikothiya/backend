
const paypal = require('paypal-rest-sdk')

const createpayment = async (req, res) => {
    try {

        paypal.configure({
            "mode": 'sandbox',
            "client_id": process.env.PAYPALCLIENTID,
            "client_secret": process.env.PAYPALSECRETKEY,
            // redirect_url:'http://localhost:8080/'
        })

        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:5173",
                "cancel_url": "http://localhost:5173/"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "Red Sox Hat",
                        "sku": "001",
                        "price": "25.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "25.00"
                },
                "description": "Hat for the best team ever"
            }]
        };

        await  paypal.payment.create(
        create_payment_json,
        function (error, payment) {
            if (error) {
                console.log(error)
                throw error;
            } else {
                console.log(payment)

                res.json({data:payment})
            }
        });

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createpayment
}