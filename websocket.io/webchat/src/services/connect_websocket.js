const {userJoin, getUsers, usersLeaveRoom, getRoomUsers} = require('../models/users.js');
const formatData = require('./messages.js');
//connection websocket
const users = {

    my : 'You',
    guest : "Guest"
};
var count = 0;

//connection room chat
function connectWebChat(io){

    io.on('connection',socket => {        
        //joined room chat
        socket.on('joinRoom', ({username, room}) => {
    
            console.log(`${socket.id} connect to the page chat`);
            const user = userJoin(socket.id,username, room);
            socket.join(user.room);
            socket.emit('message',formatData(user.id ,users.guest, `${user.username} has joined the webchat`, user.room, "joined the webchat"));
            socket.broadcast.to(user.room).emit('message',
            //log state data user to server and client
            formatData(user.id ,users.guest, `${user.username} has joined the webchat`, user.room, "joined the webchat"));
            console.table(formatData(user.id ,users.guest, `${user.username} has joined the webchat`, user.room, "joined the webchat"));
            io.to(user.room).emit('roomUsers', {
                room : user.room,
                users: getRoomUsers(user.room)
            });
        });
    
        //chat message
        socket.on('chatMessage',msg => {
    
            const user = getUsers(socket.id);
            //log state data user to server and client
            console.table(formatData(user.id, user.username, msg, user.room, "sending"));
            io.to(user.room).emit('message', formatData(user.id, user.username, msg, user.room, "sending"));
    
        });
    
        //out room chat
        socket.on('disconnect',() => {
    
            const user = usersLeaveRoom(socket.id);
            if(user){
                io.to(user.room).emit('message',
                //log state data user to server and client
                formatData(user.id, users.guest, `${user.username} has left the webchat`, user.room,'out webchat'));
                console.table(formatData(user.id, users.guest, `${user.username} has left the webchat`, user.room, 'out webchat'));
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


