// Lexical Scope:
// It is an internal javascript execution structure that store variable/function declared in the current scope.
// Maintain reference to the outer lexical environment


// Lexical Environment
// │
// ├── Environment Record
// │   ├── variable declarations
// │   ├── function declarations
// │   └── bindings
// │
// └── Outer Lexical Environment → parent environment

let name = "Shivani";

function greet() {
    let message = "Hello";

    console.log(name);
    console.log(message);
}

// Temporal dead zone
console.log(x); // ReferenceError
let x = 10;



// Closure
//  When a function remembers and variable/function can be accessible with its outer lexical scope even after its outer function has finished its execution

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3


// var/let/const 
function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }

  console.log(a); // 10
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}

// Memory leak: When your application unintentionally keeps references to the objects which is no longer needed

let cache = []
function addData() {
    cache.push(new Array(1000000).fill("data"))
}