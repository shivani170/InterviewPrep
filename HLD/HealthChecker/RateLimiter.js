class RateLimiter {
  constructor(capacity, refillRatePerSec) {
    this.capacity = capacity;
    this.refillRatePerSec = refillRatePerSec;
    this.lastRefill = Date.now();
    this.tokens = capacity;
  }

  refill() {
    const now = Date.now();
    const elapsedToken = (now - this.lastRefill) / 1000;

    const tokensToAdd = elapsedToken * this.refillRatePerSec;

     this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);

    this.lastRefill = now;
  }


  allowRequest() {
    this.refill();

    if (this.tokens >= 1) {
      this.tokens -= 1;
      return true;
    }

    return false;
  }
}
