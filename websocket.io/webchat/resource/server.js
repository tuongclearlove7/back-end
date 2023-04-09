const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/public', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const users = {};
var count = 0;

io.on('connection', socket => {

    socket.on('new-user', name => {
        count++;
        console.log('User : ' + count);
        users[socket.id] = name;
        console.log(`${name} joined room chat`);
        socket.broadcast.emit('user-connected', {
            name: name,
            count: count,
        });
    });

    socket.on('send-chat-message', message => {
      socket.broadcast.emit('chat-message', { 
            message: message, 
            name: users[socket.id],
        });
        console.log(`${users[socket.id]} : ${message}`);
    });

    socket.on('disconnect', () => {
        count--;
        console.log('User : ' + count);
        socket.broadcast.emit('user-disconnected', {
            name : users[socket.id],
            count: count
        });
        console.log(`${users[socket.id]} : out room chat`);
        delete users[socket.id]
    });
});

server.listen(3000, () => {

  console.log('listening on *:3000');
});































