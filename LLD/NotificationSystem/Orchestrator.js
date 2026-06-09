
const {
  Notification,
  NotificationEvent,
  NotificationRepository,
  PreferenceRepository,
  TemplateRepository,
} = require("./Notification");
const {
  RateLimiter,
  PreferenceService,
  TemplateService,
} = require("./NotificationService");
const {
  ChannelRouter,
  EmailChannel,
  SMSChannel,
  PushChannel,
} = require("./Channels");

class EventBus {
  constructor() {
    this.subscribers = [];
  }

  subscribe(handler) {
    this.subscribers.push(handler);
  }

  publish(event) {
    for (const handler of this.subscribers) {
      handler(event);
    }
  }
}

class NotificationOrchestrator {
  constructor({
    preferenceService,
    templateService,
    rateLimiter,
    channelRouter,
    notificationRepo,
  }) {
    this.preferenceService = preferenceService;
    this.templateService = templateService;
    this.rateLimiter = rateLimiter;
    this.channelRouter = channelRouter;
    this.notificationRepo = notificationRepo;
  }

  process(event){
    if(!this.rateLimiter.allow(event.userId)){
      console.log("🚫 Rate limit exceeded");
      return;
    }

    const channels = this.preferenceService.getChannels(
      event.userId,
      event.eventType
    );

    const content = this.templateService.render(
      event.eventType,
      event.payload
    );

    for (const channelType of channels) {
      const notification = new Notification({
        id: `${Date.now()}-${Math.random()}`,
        userId: event.userId,
        channel: channelType,
        content
      });

      this.notificationRepo.save(notification);

      const channel = this.channelRouter.get(channelType);

      if (channel) {
        try {
          channel.send(notification);
          notification.status = "SENT";
        } catch (err) {
          notification.status = "FAILED";
        }

        this.notificationRepo.save(notification);
      }
    }
  }

}

// Repositories
const notificationRepo = new NotificationRepository();
const preferenceRepo = new PreferenceRepository();
const templateRepo = new TemplateRepository();


// Seed data
preferenceRepo.set("U1", {
  ORDER_PLACED: ["EMAIL", "SMS"]
});

templateRepo.add(
  "ORDER_PLACED",
  "Hi {{name}}, your order {{orderId}} is confirmed!"
);

// Services
const preferenceService = new PreferenceService(preferenceRepo);
const templateService = new TemplateService(templateRepo);
const rateLimiter = new RateLimiter(100);

// Channels
const router = new ChannelRouter();
router.register("EMAIL", new EmailChannel());
router.register("SMS", new SMSChannel());
router.register("PUSH", new PushChannel());

// Orchestrator
const orchestrator = new NotificationOrchestrator({
  preferenceService,
  templateService,
  rateLimiter,
  channelRouter: router,
  notificationRepo
});

// Event Bus
const bus = new EventBus();

bus.subscribe(event => orchestrator.process(event));

// Fire event
bus.publish(
  new NotificationEvent("ORDER_PLACED", "U1", {
    name: "Shivani",
    orderId: "ORD123"
  })
);