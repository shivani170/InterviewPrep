class TrafficLight {
  constructor() {
    this.state = "RED";
  }

  next() {
    if (this.state === "RED") {
      this.state = "GREEN";
    }
    else if (this.state === "GREEN") {
      this.state = "YELLOW";
    }
    else if (this.state === "YELLOW") {
      this.state = "RED";
    }
     console.log(this.state);
  }
}

const traffic = new TrafficLight()
traffic.next()
traffic.next()
traffic.next()
