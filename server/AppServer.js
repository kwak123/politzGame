const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const logger = (req, res, next) => {
  console.log(`received ${req.method} request at ${req.url}`);
  next();
};

app.use(logger);

app.get('/favicon.ico', (req, res) => {
  res.end();
});

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('prepping a socket');
})

http.listen(3000);