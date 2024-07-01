function processingData(
  data: string | number | boolean | string[]
): string | number | boolean | string[] {
  return data;
}

function processingDataNew<T>(data: T): T {
  return data;
}

// const res1 = processingDataNew(1);
// const res2 = processingDataNew('1');

let res1 = processingDataNew(1);
let res2 = processingDataNew('1');

const res3 = processingDataNew<number>(10);

const num = 10;

const res4 = processingDataNew<number>(10);

interface PrintUK {
  design: number;
}

interface PrintES {
  design: string;
}

interface Print<T> {
  design: T;
}

const somePrint: Print<string> = {
  design: 'ten',
};

/*
const somePrintNew: Print<string> = {
  design: 10,
};
*/

const someOtherPrint: Print<number> = {
  design: 10,
};

interface Smth<Type> {
  name: Type;
}

const newName: Smth<string> = {
  name: 'Vitaliy',
};

const arrOffStrings: Array<string> = ['Hello', 'World'];
const arrOffStringsNew: string[] = ['Hello', 'World'];
