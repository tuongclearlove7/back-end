const {userJoin, getUsers, usersLeaveRoom, getRoomUsers} = require('../models/users.js');
const {formatData} = require('./messages.js');
//connection websocket
const users = {

    my : 'You',
    guest : "Guest"
};
var countUsers = 0;
var countMessages = 0;
//connection room chat
function connectWebChat(io){

    io.on('connection',socket => {        
        //joined room chat
        socket.on('joinRoom', ({username, room}) => {
            ++countUsers;// count users joined room
            console.log(countUsers);
            console.log(`${socket.id} connect to the page chat`);
            const user = userJoin(socket.id,username, room);
            socket.join(user.room);
            socket.emit('message',formatData(user.id ,users.guest, `${user.username} has joined the webchat`, user.room, "joined the webchat", countUsers, countMessages));
            socket.broadcast.to(user.room).emit('message',
            //log state data users 
            formatData(user.id ,users.guest, `${user.username} has joined the webchat`, user.room, "joined the webchat", countUsers, countMessages));
            console.table(formatData(user.id ,users.guest, `${user.username} has joined the webchat`, user.room, "joined the webchat", countUsers, countMessages));
            io.to(user.room).emit('roomUsers', {
                room : user.room,
                users: getRoomUsers(user.room)
            });
        });
    
        //chat message
        socket.on('chatMessage',msg => {
    
            const user = getUsers(socket.id);
            ++countMessages;//count messages
             //log state data users 
            console.table(formatData(user.id, user.username, msg, user.room, "sending", countUsers, countMessages));
            io.to(user.room).emit('message', formatData(user.id, user.username, msg, user.room, "sending", countUsers, countMessages));
    
        });
    
        //out room chat
        socket.on('disconnect',() => {
    
            const user = usersLeaveRoom(socket.id);
            if(user){
                --countUsers;//count user disconnect room chat
                countMessages = 0;
                io.to(user.room).emit('message',
                 //log state data users 
                formatData(user.id, users.guest, `${user.username} has left the webchat`, user.room,'out webchat', countUsers, countMessages));
                console.table(formatData(user.id, users.guest, `${user.username} has left the webchat`, user.room, 'out webchat', countUsers, countMessages));
                io.to(user.room).emit('roomUsers', {
                    room : user.room,
                    users: getRoomUsers(user.room)
                });
            }
        });
    });
}

module.exports = {

    connectWebChat : connectWebChat
};


