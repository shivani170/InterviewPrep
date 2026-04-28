class Singleton {
  constructor() {
    if (Singleton.timestamp) {
      return Singleton.timestamp;
    }
    this.timestamp = Date.now();
    Singleton.timestamp = this;
  }
}

const a = new Singleton();
console.log(a);
const b = new Singleton();
console.log(b);

const getComparison = () => {
  if (a === b) {
    return "true";
  } else {
    return "false";
  }
};
console.log(getComparison());
