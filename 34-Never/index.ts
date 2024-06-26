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

interface SuperAitplane {
  name: 'smth';
  engine: string;
  wings: string;
}

type Vehicle = Car | Ship | Airplane | SuperAitplane;

function isCar(car: Vehicle): car is Car {
  return 'wheels' in car;
}

function isShip(ship: Vehicle): ship is Ship {
  return 'sail' in ship;
}

function repairVehicle(vehicle: Vehicle) {
  /*
  if (isCar(vehicle)) {
    console.log(vehicle.wheels);
  } else if (isShip(vehicle)) {
    console.log(vehicle.sail);
  } else {
    // vehicle; // поэтому vehicle будет never
    //const smth: never = vehicle;
    vehicle.wings;
  }
  */

  switch (vehicle.name) {
    case 'car':
      console.log(vehicle.wheels);
      break;
    case 'ship':
      console.log(vehicle.sail);
      break;
    case 'airplane':
      console.log(vehicle.wings);
      break;
    case 'smth':
      console.log(vehicle.wings);
      break;
    default:
      const smth: never = vehicle;
      console.log('Ouuuups!');
    // console.log(vehicle); // never
  }
}
