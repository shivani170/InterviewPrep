class UrlController {
  constructor(service) {
    this.service = service;
  }

  async create(longUrl) {
    const shortCode =
      await this.service.shorten(longUrl);

    return {
      shortUrl:
        `https://tinyurl.com/${shortCode}`
    };
  }

  async redirect(shortCode) {
    return this.service.resolve(shortCode);
  }
}

export { UrlController }