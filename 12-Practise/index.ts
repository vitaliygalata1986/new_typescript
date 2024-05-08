const electricityUserData = {
  // данные по электричеству
  readings: 95,
  units: 'kWt',
  mode: 'double',
};

const waterUserData = {
  // данные по воде
  readings: 3,
  units: 'm3',
};

// стоимость чего-то за еденицу
const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water] суммарно, сколько пользователю надо заплатить за электричество и воду
/*
const calculatePayments = (
  elData: {
    readings: number;
    mode: string;
  },
  wData: {
    readings: number;
  },
  elRate: number,
  wRate: number
): void => {
  if (elData.mode === 'double' && elData.readings < 50) {
    // проверяем какой тип счетчика по электричеству
    monthPayments[0] = elData.readings * elRate * 0.7; // берем показания elData.readings и умножаем их на elRate
  } else {
    monthPayments[0] = elData.readings * elRate;
  }

  monthPayments[1] = wData.readings * wRate; // одно вычисление по воде
};
calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
  monthPayments: number[],
  electricityUserData: {
    readings: number;
    units: string;
  },
  waterUserData: {
    readings: number;
    units: string;
  }
): string => {
  const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${monthPayments[0]}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${monthPayments[1]}€`;

  return text;
};
console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));
*/

const calculatePayments = (
  {
    readings,
    mode,
  }: {
    readings: number;
    mode: string;
  },
  wData: { readings: number },
  elRate: number,
  wRate: number
): void => {
  if (mode === 'double' && readings < 50) {
    // проверяем какой тип счетчика по электричеству
    monthPayments[0] = readings * elRate * 0.7; // берем показания elData.readings и умножаем их на elRate
  } else {
    monthPayments[0] = readings * elRate;
  }

  monthPayments[1] = wData.readings * wRate; // одно вычисление по воде
};
calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
  [el, water]: number[],
  {
    readings,
    units,
  }: {
    readings: number;
    units: string;
  },
  waterUserData: {
    readings: number;
    units: string;
  }
): string => {
  const text = `    Hello!
    This month you used ${readings} ${units} of electricity
    It will cost: ${el}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`;

  return text;
};
console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));
