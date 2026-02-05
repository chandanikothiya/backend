const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendSMS = (phone_no) => {

    try {

        client.verify.v2.services("VAfb522d77eae540179d3a7774af8efcc9")
            .verifications
            .create({ to: phone_no, channel: 'sms'})
            .then(verification => console.log(verification.sid));

    } catch (error) {
        throw new Error("error in smssend" + error)
    }

}

module.exports = sendSMS;