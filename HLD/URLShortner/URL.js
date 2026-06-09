class Url {
  constructor(id, shortCode, longUrl) {
    this.id = id;
    this.shortCode = shortCode;
    this.longUrl = longUrl;
  }
}

class UrlRepository {
  constructor() {
    this.store = new Map(); // shortcode => longUrl
  }

  async save(url) {
    this.store.set(url.shortCode, url);
  }

  async findByShortCode(code) {
    return this.store.get(code);
  }
}

class CacheService {
    constructor() {
    this.cache = new Map();
  }

  async get(key) {
    return this.cache.get(key);
  }

  async set(key, value) {
    this.cache.set(key, value);
  }

  async delete(key) {
    this.cache.delete(key);
  }
}

class IdGenerator {
  constructor() {
    this.currentId = 1000;
  }

  nextId() {
    return ++this.currentId;
  }
}

class Base62Encoder {
  constructor() {
    this.chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encode(num) {
    let result = "";

    while (num > 0) {
      result = this.chars[num % 62] + result;
      num = Math.floor(num / 62);
    }

    return result;
  }

  decode(str) {
    let num = 0;

    for (let ch of str) {
      num = num * 62 + this.chars.indexOf(ch);
    }

    return num;
  }
}

class AnalyticsService {
  constructor() {
    this.clicks = new Map(); // shortCode => count
  }

  track(shortCode) {
    const count =
      this.clicks.get(shortCode) || 0;

    this.clicks.set(
      shortCode,
      count + 1
    );
  }

  getClicks(shortCode) {
    return this.clicks.get(shortCode) || 0;
  }
}

export { Url, UrlRepository, CacheService, IdGenerator, Base62Encoder, AnalyticsService}