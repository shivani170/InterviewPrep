// Vehicle
// Vehicle Type
  // Bike
  // Car
  // Truck
// Vehicle Number
class Vehicle {
    constructor(number, type){
        this.type = type
        this.number = number
    }
}

class Bike extends Vehicle{
    constructor(number){
        super(number, "BIKE")
    }
}

class Car extends Vehicle{
    constructor(number){
        super(number, "CAR")
    }
}

class Truck extends Vehicle{
    constructor(number){
        super(number, "TRUCK")
    }
}

export { Bike, Car, Truck } 