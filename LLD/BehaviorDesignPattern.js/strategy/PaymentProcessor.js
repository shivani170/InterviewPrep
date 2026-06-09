// An e-commerce app supports:

// UPI
// Credit Card
// PayPal

import { CreditCard } from './CreditStrategy.js'

class UPI {
  pay(amount) {
    console.log(`UPI ${amount}`);
  }
}

class PayPal {
  pay(amount) {
    console.log(`PayPal ${amount}`);
  }
}

class PaymentProcessor {
  constructor(strategy) {
    this.strategy = strategy;
  }

  pay(amount) {
    this.strategy.pay(amount);
  }
}

const paymentProcessor = new PaymentProcessor(new CreditCard());

paymentProcessor.pay(1000);
