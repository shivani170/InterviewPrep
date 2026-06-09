class Notification {
  constructor({ id, userId, channel, content, status = "PENDING" }) {
    this.id = id;
    this.channel = channel;
    this.content = content;
    this.createdAt = Date.now();
    this.status = status;
    this.userId = userId;
  }
}

class NotificationEvent {
  constructor(eventType, userId, payload) {
    this.eventId = `${Date.now()}-${Math.random()}`;
    this.eventType = eventType;
    this.userId = userId;
    this.timeStamp = Date.now();
    this.payload = payload;
  }
}

class NotificationRepository {
  constructor() {
    this.store = new Map(); //notificationId => Notification
  }

  save(notification) {
    this.store.set(notification.id, notification);
  }

  findByUserId(userId) {
    return [...this.store.values()].filter((n) => n.userId === userId);
  }

  updateStatus(notificationId, status) {
    if (this.store.has(notificationId)) {
      const notification = this.store.get(notificationId);
      notification.status = status;
    }
  }
}

class PreferenceRepository {
  constructor() {
    this.pref = new Map();
  }

  set(userId, pref) {
    this.pref.set(userId, pref);
  }

  get(userId) {
    return this.pref.get(userId) || {};
  }
}

class TemplateRepository {
  constructor() {
    this.templates = new Map();
  }

  add(templateId, template) {
    this.templates.set(templateId, template);
  }

  get(templateId) {
    return this.templates.get(templateId);
  }
}

module.exports = { Notification, NotificationEvent, NotificationRepository, PreferenceRepository, TemplateRepository }
