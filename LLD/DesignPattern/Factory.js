// function EmployeeFactory() {
//   this.createEmployee = function(type) {
//     let employee;
//     if (type === "fulltime") {
//       employee = new FullTime();
//     } else if (type === "parttime") {
//       employee = new PartTime();
//     } else if (type === "temporary") {
//       employee = new Temporary();
//     } else if (type === "contractor") {
//       employee = new Contractor();
//     }
//     employee.type = type;
//     employee.say = function() {
//       console.log(this.type + ": rate " + this.hourly + "/hour");
//     };
//     console.log(employee)
//     return employee;
//   };
// }

// function FullTime() { this.hourly = "$12"; }
// function PartTime() { this.hourly = "$11"; }
// function Temporary() { this.hourly = "$10"; }
// function Contractor() { this.hourly = "$15"; }

// // Usage
// const factory = new EmployeeFactory();
// const employees = [
//   factory.createEmployee("fulltime"),
//   factory.createEmployee("parttime"),
//   factory.createEmployee("temporary"),
//   factory.createEmployee("contractor")
// ];

// console.log(factory)
// // factory createEmploy {}

// employees.forEach(emp => emp.say());
// // Output:
// // fulltime: rate $12/hour
// // parttime: rate $11/hour
// // temporary: rate $10/hour
// // contractor: rate $15/hour

// Example1:

function FullTimeEmploy() {
  this.hour = "$12";
}
function PartTimeEmploy() {
  this.hour = "$10";
}
function ContractorEmploy() {
  this.hour = "$26";
}

function EmployFactory1() {
  this.createEmployee = (type) => {
    let employ;
    if (type === "fullTime") {
      employ = new FullTimeEmploy();
    } else if (type === "partTime") {
      employ = new PartTimeEmploy();
    } else if (type === "contractor") {
      employ = new ContractorEmploy();
    }
    employ.type = type;
    employ.say = () =>
      console.log(`Every ${type} Employ Per hour salary ${employ.hour}`);
    return employ;
  };
}

const factory1 = new EmployFactory1();

console.log(factory1);
const employees = [
  factory1.createEmployee("fullTime"),
  factory1.createEmployee("partTime"),
  factory1.createEmployee("contractor"),
];

employees.forEach((emp) => emp.say());

// Example 2
function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function ITFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1: {
        return new Developer(name);
      }
      case 2: {
        return new Tester(name);
      }
    }
  };
}

const factory2 = new ITFactory()

let ITEmployees = []
ITEmployees.push(factory2.create('John', 1))
ITEmployees.push(factory2.create('Tim', 2))
ITEmployees.push(factory2.create('Turkey', 2))
ITEmployees.push(factory2.create('Paul', 1))

console.log(ITEmployees)