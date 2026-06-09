class YouTubeChannel {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  notify(news){
    this.subscribers.forEach(sub => {
        sub.update(news)
    });
  }
}

class Subscriber{
    constructor(name){
        this.name = name
    }

    update(news){
        console.log(`${this.name} received: ${news}`)
    }
}

const youTubeChannel = new YouTubeChannel()

const shivani = new Subscriber("Shivani")
const gaurav = new Subscriber("Gaurav")





youTubeChannel.subscribe(shivani)
youTubeChannel.subscribe(gaurav)


youTubeChannel.notify("Updated")


console.log(youTubeChannel.subscribers)