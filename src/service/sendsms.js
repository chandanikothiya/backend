const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendSMS = (phone_no, otp) => {

    try {
        console.log(otp)
        // client.verify.v2.services("VAfb522d77eae540179d3a7774af8efcc9")
        //     .verifications
        //     .create({ to: phone_no,body:otp , channel: 'sms'})
        //     .then(verification => console.log(verification.sid));

        client.messages
            .create({
                body: "your otp is"+otp,
                messagingServiceSid:'MGe73022e59589a824799932785cd78a75',
                to: phone_no
            })
            .then(message => console.log(message.sid));


    } catch (error) {
        throw new Error("error in smssend" + error)
    }

}

module.exports = sendSMS;