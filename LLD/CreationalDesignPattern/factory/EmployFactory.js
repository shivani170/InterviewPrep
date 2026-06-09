
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
