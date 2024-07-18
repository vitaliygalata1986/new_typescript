type FromPromise = Awaited<Promise<number>>; // number

interface User {
  name: string;
}

// асинхронная функция, которая получает пользователей
// она получит промис юзеров от сервера
async function fetchUsers(): Promise<User[]> {
  const users: User[] = [
    {
      name: 'Alex',
    },
  ];
  return users;
}
const users = fetchUsers();

// нам нужно избавиться от промиса, и получить массив юзеров
// получаем тип нашей функции typeof fetchUsers
// то, что возращает функция ReturnType<typeof fetchUsers>
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; // ReturnType - возвращает то значение, которое возвращает опред. функция
