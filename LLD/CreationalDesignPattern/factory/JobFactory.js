
function FullTime() { this.hourly = "$12"; }
function PartTime() { this.hourly = "$11"; }
function Temporary() { this.hourly = "$10"; }
function Contractor() { this.hourly = "$15"; }

function EmployeeFactory() {
  this.createEmployee = (type) => {
    let employee;
    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new Temporary();
    } else if (type === "contractor") {
      employee = new Contractor();
    }
    employee.type = type;
    employee.say = function() {
      console.log(this.type + ": rate " + this.hourly + "/hour");
    };
    console.log(employee)
    return employee;
  };
}


// Usage
const factory = new EmployeeFactory();
const employees = [
  factory.createEmployee("fulltime"),
  factory.createEmployee("parttime"),
  factory.createEmployee("temporary"),
  factory.createEmployee("contractor")
];

console.log(factory)

employees.forEach(emp => emp.say());
// Output:
// fulltime: rate $12/hour
// parttime: rate $11/hour
// temporary: rate $10/hour
// contractor: rate $15/hour


