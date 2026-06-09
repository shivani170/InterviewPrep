const {
  ServiceRepository,
  HttpHealthChecker,
  HealthResultRepository,
  Service
} = require("./HealthService");
const { AlertService, EmailAlert, SlackAlert, SMSAlert } = require("./Alert");
const { HealthMonitoringManager, Scheduler } = require("./HealthMonitorManager")
const { RateLimiter } = require('./RateLimiter')

const serviceRepo = new ServiceRepository();

const checker = new HttpHealthChecker();

const resultRepo = new HealthResultRepository();

const alertService = new AlertService([
  new EmailAlert(),
  new SlackAlert(),
  new SMSAlert(),
], new RateLimiter(10, 2));

serviceRepo.add(
  new Service(1, "User Service", "https://user.com/health", 30000, new RateLimiter(5, 1)),
);

const manager = new HealthMonitoringManager(
  serviceRepo,
  checker,
  resultRepo,
  alertService,
);

const scheduler = new Scheduler(manager);

scheduler.start();
