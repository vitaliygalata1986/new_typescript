const serverConfigNew: BasicConfig = {
  protocol: 'https',
  port: 3001,
  //  role: 'admin',
};

const backupConfig: BasicConfig = {
  protocol: 'http',
  port: 3000,
};

interface BasicConfig {
  protocol: string;
  port: number;
}

function startServer(config: BasicConfig): 'Server started' {
  console.log(
    `Server new started on ${config.protocol}://server:${config.port}`
  );
  return 'Server started';
}

startServer(serverConfigNew);
startServer(backupConfig);
