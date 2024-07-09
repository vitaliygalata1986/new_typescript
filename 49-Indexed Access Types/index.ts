interface ICompany {
  name: string;
  debts: number;
  departments: Department;
  departmentsNew: Department[];
  management: {
    owner: string; // owner - владелец
  };
}

interface Department {
  // мы создаем интерфейс, и мы не знаем сколько там будет свойств
  // но знаем - чем они будут являться по типам
  [key: string]: string;
}

const google: ICompany = {
  name: 'Google',
  debts: 500000,
  management: {
    owner: 'John',
  },
  departments: {
    sales: 'sales',
    developer: 'dev',
  },
  departmentsNew: [
    {
      sale: 'sale',
    },
    {
      developer: 'dev',
    },
  ],
};

let debtsNew = 'debts' as 'debts'; // привели к литеральному типу
let newdebtsNew: 'debts' = 'debts';

const debts = 'debts';
type CompanyDebtsNew = ICompany[typeof debts]; // сконвертировали литерал в тип
type NewCompanyDebtsNew = ICompany[typeof debtsNew];

type NewLiteralCompanyDebtsNew = ICompany[typeof newdebtsNew];

type CompanyDebts = ICompany['debts']; // number
type CompanyOwnerType = ICompany['management']['owner']; // string
type CompanyDepartmentsType = ICompany['departments'];
type Test = ICompany[keyof ICompany];
type CompanyDepartmentsNewType = ICompany['departmentsNew'][number];
