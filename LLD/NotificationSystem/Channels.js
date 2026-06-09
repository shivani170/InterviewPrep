
class NotificationChannel {
  send(notification) {
    throw new Error("send() must be implemented");
  }
}

class EmailChannel extends NotificationChannel {
  send(notification) {
    console.log(
      `📧 Email sent to ${notification.userId}: ${notification.content}`,
    );
  }
}

class SMSChannel extends NotificationChannel {
  send(notification) {
    console.log(
      `📱 SMS sent to ${notification.userId}: ${notification.content}`,
    );
  }
}

class PushChannel extends NotificationChannel {
  send(notification) {
    console.log(
      `🔔 Push sent to ${notification.userId}: ${notification.content}`,
    );
  }
}

class ChannelRouter {
  constructor() {
    this.typeChannelMap = new Map(); //channelType => channel
  }

  register(type, channel) {
    this.typeChannelMap.set(type, channel);
  }

  get(type) {
    return this.typeChannelMap.get(type);
  }
}

module.exports = { NotificationChannel, SMSChannel, PushChannel, ChannelRouter, EmailChannel}


