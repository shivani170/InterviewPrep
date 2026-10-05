const user = {
    firstName : "Shivani",
    lastName: "Bhatt",
    role: "Frontend developer",

    // introduction: function(greeting, city) {
    // console.log(`${greeting} , My name is ${this.firstName} ${this.lastName}. I live in ${city}`)
// }
}

function introduction (greeting, city) {
    console.log(`${greeting} , My name is ${this.firstName} ${this.lastName}. I live in ${city}`)
}

introduction.call(user, "Hi", "Dehradun")

const user2 = {
    firstName : "Shivani",
    lastName: "Bhatt",
    role: "Frontend developer",

    // introduction: function(greeting, city) {
    // console.log(`${greeting} , My name is ${this.firstName} ${this.lastName}. I live in ${city}`)
// }
}