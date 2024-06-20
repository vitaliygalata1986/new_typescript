interface Car {
  name: 'car';
  engine: string;
  wheels: number;
}

interface Ship {
  name: 'ship';
  engine: string;
  sail: string;
}

interface Airplane {
  name: 'airplane';
  engine: string;
  wings: string; // крылья
}

interface ComplexVehicle {
  name: 'car' | 'ship' | 'airplane';
  engine: string;
  wings?: string; // крылья
  sail?: string; // парус
  wheels?: number; // колеса
}

type Vehicle = Car | Ship | Airplane;

function isCar(car: Vehicle): car is Car {
  return 'wheels' in car;
}

function isShip(ship: Vehicle): ship is Ship {
  return 'sail' in ship;
}

function repairVehicle(vehicle: ComplexVehicle) {
  switch (vehicle.name) {
    case 'car':
      console.log(vehicle.wheels! * 2);
      break;
    case 'ship':
      console.log(vehicle.sail);
      break;
    case 'airplane':
      console.log(vehicle.wings);
      break;
    default:
      // const smth: never = vehicle;
      console.log('Ouuuups!');
  }
}
// Пример использования функции
const newCar: ComplexVehicle = {
  name: 'car',
  engine: 'V8',
};

const car: Car = {
  name: 'car',
  engine: 'V8',
  wheels: 4,
};

const ship: Ship = {
  name: 'ship',
  engine: 'diesel',
  sail: 'main sail',
};

const airplane: Airplane = {
  name: 'airplane',
  engine: 'jet',
  wings: 'wide wings',
};

// repairVehicle(car); //  4
// repairVehicle(ship); //  main sail
// repairVehicle(airplane); // wide wings

repairVehicle(newCar);
