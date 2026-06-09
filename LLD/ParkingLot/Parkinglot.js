class ParkingLot {
  constructor() {
    this.floors = [];
    this.tickets = new Map();
    this.ticketCounter = 1;
  }

  addFloor(floor) {
    this.floors.push(floor);
  }

  parkVehicle(vehicle) {

    for (const floor of this.floors) {

      const spot =
        floor.findAvailableSpot(vehicle.type);

      if (spot) {

        spot.parkVehicle(vehicle);

        const ticket =
          new ParkingTicket(
            this.ticketCounter++,
            vehicle,
            spot
          );

        this.tickets.set(
          ticket.id,
          ticket
        );

        return ticket;
      }
    }

    throw new Error("Parking Full");
  }

  exitVehicle(ticketId) {

    const ticket =
      this.tickets.get(ticketId);

    if (!ticket) {
      throw new Error("Invalid Ticket");
    }

    ticket.closeTicket();

    const fee =
      ticket.calculateFee();

    ticket.spot.removeVehicle();

    this.tickets.delete(ticketId);

    return fee;
  }
}