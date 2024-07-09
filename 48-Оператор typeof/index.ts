interface ICompany {
  name: string;
  debts: number;
}

const google: ICompany = {
  name: 'Google',
  debts: 50000,
};

// получим ключи этого объекта
// type GoogleKeys = keyof google; // Error - google это объект, а не тип

// получим ключи экземпляра объекта
// для этого нужно сначала получить тип, а затем взять его ключи
type GoogleKeys = keyof typeof google;
const keys: GoogleKeys = 'debts'; // получаем свойство debts
console.log(keys); // debts
