// Floor Number
// spot

class ParkingFloor {

    constructor(floorNo, spots){
        this.floorNo = floorNo;
        this.spots = spots;
    }

    getAvailableSpot(vehicleType) {
        return this.spots.find(spot.type === vehicleType && spot.isAvailable())
    }

}