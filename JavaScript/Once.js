function once(func) {
  let isCalled = false;
  return function (...arg) {
    if (!isCalled) {
      isCalled = true;
      return func.apply(this, arg);
    }
  };
}

function greet(arg) {
  console.log("Welcome");
  return `Hello ${arg}`;
}

const greetOnce = once(greet);

console.log(greetOnce("Gaurav"));
console.log(greetOnce("Shivani"));
