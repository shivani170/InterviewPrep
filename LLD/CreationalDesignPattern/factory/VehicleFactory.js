class Car {
   drive () {
    console.log("Driving a car");  
  }
}

class Bike {
  ride () {
    console.log("Riding a bike");  
  }
}

export class VehicleFactory {
  static createVehicle(type) {

   if (type === "car") {
      return new Car();
    }

    if (type === "bike") {
      return new Bike();
    }

    throw new Error("Invalid vehicle type");
  }


}

const client = VehicleFactory.createVehicle("car")

client.drive()