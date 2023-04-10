const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const handlebars = require('express-handlebars');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

//config : cấu hình
app.engine('cl7', handlebars.engine({
    extname : '.cl7',
}));
app.set('view engine','cl7');
app.set('views', path.join(__dirname, '/views'));

//route : tuyến đường
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/home', (req, res) => {
    res.render('index');
});

app.get('/chat', (req, res) => {
    res.render('chat');
});

app.get('/news', (req, res) => {
    res.render('profile');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

const users = {};
var count = 0;

io.on('connection',socket => {

    console.log('websocket connection...');

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

    socket.on('chatMessage', message => {
        socket.broadcast.emit('message', { 
              message: message, 
              name: users[socket.id],
          });
          console.log(`${users[socket.id]} : ${message}`);
      });

});

server.listen(PORT, () => {

    console.log(`server running on port ${PORT}`);
});































