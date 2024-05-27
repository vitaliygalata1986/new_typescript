// interface protocol = 'http' | 'https';

interface IConfig {
  protocol: 'http' | 'https';
  port: 3000 | 3001;
}

interface IConfig {
  date: Date;
}

interface IRole {
  role: string;
}

interface IConfigWithRole extends IConfig, IRole {}

const serverIConfig: IConfigWithRole = {
  protocol: 'https',
  port: 3001,
  role: 'admin',
  date: new Date(),
};

function startIServer(
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  role: string = 'user'
): 'Server started' {
  console.log(
    `Server new started on ${protocol}://server:${port} role ${role}`
  );
  return 'Server started';
}

startIServer(serverIConfig.protocol, serverIConfig.port, serverIConfig.role);

type Protocol = 'http' | 'https';
//type Protocol = string;

type Config = {
  // protocol: 'http' | 'https';
  protocol: Protocol;
  port: 3000 | 3001;
};

type Role = {
  role: string;
};

// type Config = {
//   date: Date;
// };

type NewConfig = {
  date: Date;
};

type ConfigWithRole = Config & Role & NewConfig;

const serverConfig: ConfigWithRole = {
  protocol: 'https',
  port: 3001,
  role: 'admin',
  date: new Date(),
};

function startServer(
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  role: string = 'user'
): 'Server started' {
  console.log(
    `Server new started on ${protocol}://server:${port} role ${role}`
  );
  return 'Server started';
}

startIServer(serverConfig.protocol, serverConfig.port, serverConfig.role);
