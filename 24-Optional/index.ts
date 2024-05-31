interface User {
  login: string;
  password: string;
  age?: number; // поле не обязательное
  // addr?: string;
  addr: string | undefined; // union type
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: User = {
  login: 'admin',
  password: '12345',
  addr: 'asxas',
  parents: {
    mother: 'Mary',
    father: 'John',
  },
};

const dbName = 'MyDb';

// db - может быть не обязательным, может быть или строкой или undefined
function sendUserData(obj: User, db?: string): void {
  console.log(obj, db?.toLowerCase(), obj.parents?.mother?.toLocaleUpperCase());
}

// sendUserData(user, dbName);
sendUserData(user, dbName);
