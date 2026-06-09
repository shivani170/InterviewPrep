import { Url, UrlRepository, CacheService, Base62Encoder, IdGenerator, AnalyticsService  } from './URL.js'
import { UrlController } from './UrlController.js'

class UrlShortenerService {
  constructor(
    repository,
    cache,
    encoder,
    idGenerator,
    analytics
  ) {
    this.repository = repository;
    this.cache = cache;
    this.encoder = encoder;
    this.idGenerator = idGenerator;
    this.analytics = analytics;
  }

  async shorten(longUrl) {
    const id = this.idGenerator.nextId();

    const shortCode =
      this.encoder.encode(id);

    const url = new Url(
      id,
      shortCode,
      longUrl
    );

    await this.repository.save(url);

    return shortCode;
  }

  async resolve(shortCode) {
    this.analytics?.track(shortCode);

    let longUrl =
      await this.cache.get(shortCode);

    if (longUrl)
      return longUrl;

    const url =
      await this.repository.findByShortCode(
        shortCode
      );

    if (!url)
      throw new Error("Not Found");

    await this.cache.set(
      shortCode,
      url.longUrl
    );

    return url.longUrl;
  }
}

export { UrlShortenerService }


const repository =
  new UrlRepository();

const cache =
  new CacheService();

const encoder =
  new Base62Encoder();

const idGenerator =
  new IdGenerator();

const analytics =
  new AnalyticsService();

const service =
  new UrlShortenerService(
    repository,
    cache,
    encoder,
    idGenerator,
    analytics
  );

const controller =
  new UrlController(service);

  (async () => {

  const response =
    await controller.create(
      "https://www.google.com"
    );

  console.log(response);

  const shortCode =
    response.shortUrl.split("/")
      .pop();

  const longUrl =
    await controller.redirect(
      shortCode
    );

  console.log(longUrl);

  console.log(
    analytics.getClicks(shortCode)
  );

})();