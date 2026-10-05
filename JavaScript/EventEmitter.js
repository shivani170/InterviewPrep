// An EventEmitter is an object that allows one part of an application to emit named events,
// while other parts register listeners for those events.

// const emit = new EventEmitter();

// emit.on("login”", (user) => {
//   console.log(user.name);
// });

// emit.emit("login", { name: Shivani });

export class EventEmitter {
  constructor() {
    this.eventsListeners = {};
  }

  on = (eventName, listener) => {
    // Register the listener for events
    if (!this.eventsListeners[eventName]) {
      this.eventsListeners[eventName] = [];
    }

    this.eventsListeners[eventName].push(listener);
    return true;
  };

  emit = (eventName, ...args) => {
    if (!this.eventsListeners[eventName]) return false;

    const listeners = this.eventsListeners[eventName];
    listeners.forEach((listener) => listener(...args));
  };

    off(eventName, callback) {
        const listeners = this.eventsListeners[eventName] || [];

        this.eventsListeners[eventName] =
            listeners.filter(listener => listener !== callback);
    }
}

const emitter = new EventEmitter();

function userDetail(user) {
  console.log(`userDetail ${user}`);
}
emitter.on("user: signup", userDetail);
emitter.on("user: signup", () => console.log("Email login"));
emitter.off("user: signup", () => console.log("Off"))

emitter.on("user: signup", () => console.log("WhatsApp signing"));

emitter.emit("user: signup", "Shivani Bhatt");
