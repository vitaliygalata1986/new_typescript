interface Config {
  protocol: 'http' | 'https';
  port: 3000 | 3001;
  log: (msg: string) => void;
}

interface Role {
  role: string;
}
// для комбинации нескольких интерфейсов и получения нового используется ключевое слово extends
interface ConfigWithRole extends Config, Role {
  // здесь могут быть новые свойства или пустые скобки
  // newValue: string;
}

const serverConfig: ConfigWithRole = {
  protocol: 'https',
  port: 3001,
  role: 'admin',
  // newValue: 'new value',
  log: (msg: string): void => {
    console.log(msg);
  },
};

function startServer(
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  role: string = 'user',
  log: (msg: string) => void
  //log: Function
): 'Server started' {
  log(`Server new started on ${protocol}://server:${port} role ${role}`); // Server started on https://server:3001 role admin
  return 'Server started';
}

startServer(
  serverConfig.protocol,
  serverConfig.port,
  serverConfig.role,
  serverConfig.log
);

type StartFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  role: string,
  log: (msg: string) => void
  //log: Function // так делаем, если мы не знаем, какой тип функции будет использован, тогда указываем встроенный тип - Function
) => string;

const startNewServer: StartFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  role: string = 'user',
  log: (msg: string) => void
): 'Server started' => {
  log(`Server started on ${protocol}://server:${port}, role: ${role}`); // Server started on http://server:3000

  return 'Server started';
};

startNewServer(
  serverConfig.protocol,
  serverConfig.port,
  serverConfig.role,
  serverConfig.log
);

interface Styles {
  [key: string]: string;
}

const styles: Styles = {
  position: 'absolute',
  top: '20px',
  left: '50px',
};
