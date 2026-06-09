class RateLimiterService {
  constructor(repository) {
    this.repository = repository;
  }

  async allowRequest(userId) {
    const bucket =
      await this.repository
        .getBucket(userId);

    const now =
      Math.floor(Date.now()/1000);

    const elapsed =
      now - bucket.lastRefill;

    bucket.tokens =
      Math.min(
        bucket.capacity,
        bucket.tokens +
        elapsed * 10
      );

    bucket.lastRefill = now;

    if(bucket.tokens < 1) {
      return false;
    }

    bucket.tokens--;

    await this.repository
      .saveBucket(userId, bucket);

    return true;
  }
}