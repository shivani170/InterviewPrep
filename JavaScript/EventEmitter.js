export class EventEmitter{
    constructor(){
        // [event] : listener[]
        this.eventsListeners = {}
    }

    on = (eventName, listener) => {
        // Register the listener for events
        if(!this.eventsListeners[eventName]){
            this.eventsListeners[eventName] = []
        }

       this.eventsListeners[eventName].push(listener)
       return true

    }

    emit = (eventName, ...args) => {
        if(!this.eventsListeners[eventName]) return false

        const listeners = this.eventsListeners[eventName];
        listeners.forEach(listener => listener(...args));

    }
}

const emitter = new EventEmitter()

function userDetail(user) {
  console.log(`userDetail ${user}`);
}
emitter.on('user: signup', userDetail);
emitter.on('user: signup', () => console.log('Email login'));
emitter.on('user: signup', () => console.log('WhatsApp signing'))

emitter.emit('user: signup', 'Shivani Bhatt');




