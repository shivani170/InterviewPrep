class AlertStrategy {
  send(message) {}
}

class EmailAlert extends AlertStrategy {
  send(message) {
    console.log("EMAIL:", message);
  }
}

class SlackAlert extends AlertStrategy {
  send(message) {
    console.log("SLACK:", message);
  }
}

class SMSAlert extends AlertStrategy {
  send(message) {
    console.log("SMS:", message);
  }
}

class AlertService {
  constructor(strategies, rateLimiter) {
    this.strategies = strategies;
    this.rateLimiter = rateLimiter
  }


  notify(message) {
     if(!this.rateLimiter.allowRequest()){
         console.log(
          `Rate limit hit for ${service.name}`
        );
        return;
    }
    this.strategies.forEach(strategy =>
      strategy.send(message)
    );
  }
}

module.exports = {EmailAlert, SlackAlert, SMSAlert, AlertService}