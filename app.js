const http = require('http');
const Rox = require("rox-node");
const config = require('./config.json');
const hostname = '127.0.0.1';
const port = 3000;

const showMotivationalQuote = config.showMotivationalQuote;

const server = http.createServer((req, res) => {
  var message = '<h1>Hello Rollout!</h1>';
  if (showMotivationalQuote) {
    message += "<h3>The number zero. It's whatever you make of it.</h3>"
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(message);
});

server.listen(port, hostname, () => {
  Rox.setup(config.roxAPIKey);
  console.log(`Server running at http://${hostname}:${port}/`);
});
