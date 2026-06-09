class Service {
  constructor(id, name, url, interval, rateLimiter) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.interval = interval;
    this.rateLimiter = rateLimiter;
  }
}

// {
//  id: 1,
//  name: "User Service",
//  url: "https://user-api.com/health",
//  interval: 60000
// }

class HealthResult {
  constructor(serviceId, status, responseTime) {
    this.serviceId = serviceId;
    this.status = status;
    this.responseTime = responseTime;
    this.timestamp = Date.now();
  }
}

class ServiceRepository {
  constructor() {
    this.services = [];
  }

  add(service) {
    this.services.push(service);
  }

  getAll() {
    return this.services;
  }
}

class HealthChecker {
  async check(service) {
    throw new Error("Implement");
  }
}

class HttpHealthChecker extends HealthChecker {
  async check(service) {
    const start = Date.now();

    try {
      const response = await fetch(service.url);

      return new HealthResult(
        service.id,
        response.ok ? "UP" : "DOWN",
        Date.now() - start
      );
    } catch (err) {
      return new HealthResult(
        service.id,
        "DOWN",
        Date.now() - start
      );
    }
  }
}

class HealthResultRepository {
  constructor() {
    this.results = [];
  }

  save(result) {
    this.results.push(result);
  }

  getAll() {
    return this.results;
  }
}

module.exports = { Service, HealthResult, ServiceRepository, HealthChecker, HttpHealthChecker, HealthResultRepository}