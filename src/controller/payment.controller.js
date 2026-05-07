
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
                "return_url": "http://localhost:8080/api/v1/payment/successpayment",
                "cancel_url": "http://localhost:8080/api/v1/payment/failedpayment"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "Red Sox Hat",
                        "sku": "001",
                        "price": "1.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "Hat for the best team ever"
            }]
        };

        await paypal.payment.create(
            create_payment_json,
            function (error, payment) {
                if (error) {
                    console.log(error)
                    throw error;
                } else {
                    console.log(payment)

                    res.json({ data: payment })
                }
            });

    } catch (error) {
        console.log(error)
    }
}

const successpayment = async (req, res) => {
    try {
        console.log("req.query", req.query)

        const PayerID = req.query.PayerID;
        const paymentId = req.query.paymentId;

        const express_checkout_json = {
            "payer_id": PayerID,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "this is payment description"
            }]
        }

        paypal.payment.execute(paymentId, express_checkout_json, function (error, payment) {
            if (error) {
                console.log(error)
                return res.redirect("http://localhost:5173/filed")
                throw error;
            } else {
                const response = JSON.stringify(payment);
                const parseres = JSON.parse(response)

                console.log(response)

                return res.redirect("http://localhost:5173/success")
            }
        })

    } catch (error) {
        console.log("error", error)
    }
}

const failedpayment = async (req, res) => {
    try {
       return res.redirect("http://localhost:5173/filed")
    } catch (error) {
        console.log("error", error)
    }
}

module.exports = {
    createpayment,
    successpayment,
    failedpayment
}