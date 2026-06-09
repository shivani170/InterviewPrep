class EmailService {
  send(message) {
    console.log(`Email: ${message}`);
  }
}

class SmsService {
  send(message) {
    console.log(`Sms: ${message}`);
  }
}

class SlackService {
  send(message) {
    console.log(`Slack: ${message}`);
  }
}

class NotificationFactory {
   static notify(type) {
    if (type === "email") {
      return new EmailService();
    }

    if (type === "sms") {
      return new SmsService();
    }

    if (type === "slack") {
      return new SlackService();
    }

    throw new Error("No service");
  }
}

const notifier = NotificationFactory.notify("email");
notifier.send("Hello Shivani");
