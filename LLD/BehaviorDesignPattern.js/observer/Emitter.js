class Emitter {
    constructor(){
        this.listeners = []
    }

    subscribe(subscriber){
        this.listeners.push(subscriber)
    }

    emit(data){
        this.listeners.forEach(cb => cb(data) )
    }
}


// Usage

const emitter = new Emitter()

emitter.subscribe((data) => {
    console.log("Email", data)
})

emitter.subscribe((data) => {
    console.log("SMS", data)
})

emitter.subscribe((data) => {
    console.log("Slack", data)
})

emitter.emit("Subscribed")
