const test: null = null;

// в тип any мы можем тоже поместить null
const test2: any = null; // any - что угодно

// const test3: string = null;
// const test4: number = null;

const test5: undefined = undefined;
const test6: any = undefined;
// const test7: string = undefined;
let smth;


function getRandomData() {
  if (Math.random() < 0.5) {
    return null;
  } else {
    return 'Some data ';
  }
}

// const data: string = getRandomData();
const data = getRandomData();
// const trimData = data.trim(); // мы думаем, что там строка и обработаем ее методом trim
const trimData = data ? data.trim() : null;
console.log(trimData);
