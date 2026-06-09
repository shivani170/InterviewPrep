class FeeCalculator {
 static calculate = () => {
    const rates = {
      BIKE: 10,
      CAR: 20,
      TRUCK: 30,
    };

   const totalHours = Math.ceil(((new Date() - this.entryTime) / 1000 * 60 * 60));

    return rates[this.vehicle.type] * totalHours;
  };
}

export { FeeCalculator };
