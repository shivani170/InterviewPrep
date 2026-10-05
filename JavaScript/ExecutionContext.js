var name = "Shivani";

function greet() {
  console.log("Hello");
}

greet();

// Global Execution Context
// │
// ├── Global Environment
// │   ├── name → "Shivani"
// │   └── greet → function
// │
// ├── this
// └── outer environment → null


function add(a, b) {
  const result = a + b;
  return result;
}

add(10, 20);

// Global Execution Context
//         │
//         ▼
// Function Execution Context: add
// │
// ├── a → 10
// ├── b → 20
// ├── result → 30
// ├── arguments
// ├── this
// └── lexical environment


// Scope

const globalValue = 10;

function test() {
  const localValue = 20;

  console.log(globalValue);
  console.log(localValue);
}

test();
