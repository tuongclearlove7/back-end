const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const handlebars = require('express-handlebars');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const formatMessage = require('./services/messages.js');
const {userJoin, getUsers, usersLeaveRoom, getRoomUsers} = require('./models/users.js');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

//config : cấu hìnhs
app.use(express.static(path.join(__dirname, 'public')));
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

const users = {

    my : 'You',
    guest : "Guest"
};
var count = 0;

//connection room chat
io.on('connection',socket => {

    console.log('websocket connection...');

    //joined room chat
    socket.on('joinRoom', ({username, room}) => {

        const user = userJoin(socket.id,username, room);

        socket.join(user.room);
        socket.emit('message',formatMessage(users.my,'welcome to webchat'));
        socket.broadcast.to(user.room).emit('message',
        
            formatMessage(users.guest,`${user.username} has joined the webchat`));
        
        io.to(user.room).emit('roomUsers', {
            room : user.room,
            users: getRoomUsers(user.room)
        });
    });

    //chat message
    socket.on('chatMessage',msg => {

        const user = getUsers(socket.id);
        io.to(user.room).emit('message', formatMessage(user.username,msg));

    });

    //out room chat
    socket.on('disconnect',() => {

        const user = usersLeaveRoom(socket.id);

        if(user){
            io.to(user.room).emit('message',
            formatMessage(users.guest,`${user.username} has left the webchat`));

            io.to(user.room).emit('roomUsers', {
                room : user.room,
                users: getRoomUsers(user.room)
            });
        }
    });
});

server.listen(PORT, () => {

    console.log(`server running on port ${PORT}`);
});































