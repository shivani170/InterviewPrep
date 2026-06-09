class HealthMonitoringManager {
  constructor(serviceRepo, checker, resultRepo, alertService) {
    this.serviceRepo = serviceRepo;
    this.checker = checker;
    this.resultRepo = resultRepo;
    this.alertService = alertService;
  }

  async runChecks() {
    const services = this.serviceRepo.getAll();


    for (const service of services) {
    if(!services.rateLimiter.allowRequest){
         console.log(
          `Rate limit hit for ${service.name}`
        );
        continue;
    }

      const result = await this.checker.check(service);

      this.resultRepo.save(result);

      if (result.status === "DOWN") {
        this.alertService.notify(`${service.name} is DOWN`);
      }
    }
  }
}

class Scheduler {
  constructor(manager) {
    this.manager = manager;
  }

  start() {
    setInterval(() => {
      this.manager.runChecks();
    }, 30000);
  }
}

module.exports = { HealthMonitoringManager, Scheduler };
