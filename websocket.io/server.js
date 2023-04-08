const io = require('socket.io')(3000, {
  cors: {
    origin: '*',
  }
});

const users = {};

io.on('connection', socket => {

  socket.on('new-user', name => {
    var user = 0;
    user = +users[socket.id];
    const count = ++user;
    console.log(count);
    users[socket.id] = name;
    console.log(`${name} joined room chat`);
    socket.broadcast.emit('user-connected', name);
  });

  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', { 
          message: message, 
          name: users[socket.id],
      });
      console.log(`${users[socket.id]} : ${message}`);
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id]);
    console.log(`${users[socket.id]} : out room chat`);
    delete users[socket.id]
  });
});