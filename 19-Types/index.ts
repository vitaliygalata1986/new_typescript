type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 };

type Role = {
  role: string;
};

type ConfigWithRole = Config & Role; // & - intersection

const serverConfig: ConfigWithRole = {
  protocol: 'https',
  port: 3001,
  role: 'admin',
};

/*
const serverConfig: Config = {
  protocol: 'https',
  port: 3001,
};
*/

function startServer(
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  role: string = 'user'
): 'Server started' {
  console.log(`Server started on ${protocol}://server:${port}, role: ${role}`);

  return 'Server started';
}

startServer(serverConfig.protocol, serverConfig.port, serverConfig.role);

const backupConfig: ConfigWithRole = {
  protocol: 'http',
  port: 3001,
  role: 'user',
};

/*
const backupConfog: Config = {
  protocol: 'http',
  port: 3001,
};
*/

// В отдельный type можно выносить и описание функции:
type StartFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  role: string
) => string;

const startNewServer: StartFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  role: string = 'user'
): 'Server started' => {
  console.log(`Server started on ${protocol}://server:${port}, role: ${role}`); // Server started on http://server:3000

  return 'Server started';
};

// startNewServer('http', 3000);

startNewServer(backupConfig.protocol, backupConfig.port, backupConfig.role);
