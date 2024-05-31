interface User {
  login: string;
  password: string;
  age?: number;
  addr: string;
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: User = {
  login: 'admin',
  password: '12345',
  age: 50,
  addr: 'asxas',
  parents: {
    mother: 'Nadya',
    father: 'Victor',
  },
};

// const dbName = 'MyDb';
let dbName: string;
sendUserData(user, 'newDB'); // NADYA mydb

console.log(dbName!); // ! - оператор утверждения определенного назначения

function sendUserData(obj: User, db?: string): void {
  dbName = 'MyDb';
  console.log(obj.parents!.mother?.toLocaleUpperCase(), db!?.toLowerCase());
}

// sendUserData(user, dbName); // NADYA mydb
