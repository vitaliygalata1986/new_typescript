const serverConfig: { protocol: 'http' | 'https'; port: 3000 | 3001 } = {
  // { protocol: 'http' | 'https'; port: 3000 | 3001 } это объектные литералы
  protocol: 'https',
  port: 3001,
};

function startServer(
  protocol: 'http' | 'https',
  port: 3000 | 3001
): 'Server started' {
  console.log(`Server started on ${protocol}://server:${port}`);

  return 'Server started';
}

startServer(serverConfig.protocol, serverConfig.port);
