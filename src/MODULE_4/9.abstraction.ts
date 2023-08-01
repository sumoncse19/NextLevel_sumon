//  interface
interface IVehicle {
  name: string;
  model: string;
}

const vehicle: IVehicle = {
  name: 'Florida',
  model: 'Ford 2000'
}

interface IVehicleNew {
  startEngine(): void
  move(): void
  stopEngine(): void
}

class Vehicle implements IVehicleNew {
  constructor(
    public name: string,
    public brand: string,
    public model: number,
  ) { }
  startEngine(): void {
    console.log(`I am from starting engine.`);
  }
  move(): void {
    console.log(`I am from moving.`);
  }
  stopEngine(): void {
    console.log(`I am from stopping engine.`);
  }
  test() {
    console.log(`I'm from class Vehicle`);
  }
}

const vehicle1 = new Vehicle('car', 'toyota', 2000)


// Abstract
abstract class VehicleNew {
  constructor(
    public name: string,
    public brand: string,
    public model: number,
  ) { }
  abstract startEngine(): void

  abstract move(): void
  stopEngine(): void {
    console.log(`I am from stopping engine.`);
  }
}

class Car extends VehicleNew {
  startEngine(): void {
    console.log(`I am from starting`);
  }
  move(): void {
    console.log(`I am from moving.`);
  }
}

// const car1 = new Car('car', 'Honda', 2050)
