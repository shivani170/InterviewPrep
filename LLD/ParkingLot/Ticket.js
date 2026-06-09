// vehicle Id
// Parking Time

class Ticket {
    constructor(vehicle, spot){
        this.vehicle = vehicle
        this.spot = spot
        this.entryTime = new Date.now()
    }
}

export { Ticket }