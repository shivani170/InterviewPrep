class AWSFactory {
  createEmail() {
    console.log("Send AWS Email");
  }

  createSms() {
    console.log("Send AWS Sms");
  }
}

class TwilioFactory {
  createEmail() {
    console.log("Send Twilio Email");
  }

  createSms() {
    console.log("Send Twilio Sms");
  }
}

// class Notify{
//     createEmail(){}
//     createSms(){}
// }

function sendNotification(factory) {
  const email = factory.createEmail();
  const sms = factory.createSMS();

  email.send("Hello");
  sms.send("Hello");
}