//Here Every object is created from scratch.
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
}

const user1 = new User("Shivani", "Frontend Engineer");
const user2 = new User("Priya", "Frontend Engineer");


// WIth Prototype
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  clone() {
    return new User(this.name, this.role);
  }
}