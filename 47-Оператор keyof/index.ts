interface ICompany {
  name: string;
  debts: number;
}

type CompanyKeys = keyof ICompany;
// оператор keyof получет ключи указанного какого-то объекта
const keys: CompanyKeys = 'name';
// console.log(keys); // debts - в итоге мы получили union тип между debts и name

function printDebts<T, K extends keyof T, S extends keyof T>(
  company: T,
  name: K,
  debts: S
) {
  // ограничим  K теми union типами, которые будут в передаваемом объекте T
  // тоесть в К могут бвть либо: name, либо debts
  console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const hh: ICompany = {
  name: 'HH',
  debts: 1000,
};

printDebts(hh, 'name', 'debts');

const google: ICompany = {
  name: 'Google',
  debts: 50000,
};

printDebts(google, 'name', 'debts');
