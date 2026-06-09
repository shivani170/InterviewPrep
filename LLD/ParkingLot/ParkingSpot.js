// SPOT Type
// SPOT ID
// Whether occupied
// Vehicle available or not

class ParkingSpot {
    constructor(type, id){
        this.id = id
        this.type = type
        this.vehicle = null
    }

    isAvailable() {
        return this.vehicle === null
    }

    park(vehicle){
        this.vehicle = vehicle
    }

    remove(){
        this.vehicle = null
    }

}

export { ParkingSpot }