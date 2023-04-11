const {userJoin, getUsers, usersLeaveRoom, getRoomUsers} = require('../models/users.js');
const formatMessage = require('./messages.js');

const users = {

    my : 'You',
    guest : "Guest"
};
var count = 0;

//connection room chat
function connectWebChat(io){

    io.on('connection',socket => {
    
        // console.log(socket.id + " websocket connection..."); 
        //joined room chat
        socket.on('joinRoom', ({username, room}) => {
    
            const user = userJoin(socket.id,username, room);
            console.log("has joined the webchat");
            console.table(user);
    
            socket.join(user.room);
            socket.emit('message',formatMessage(user.id, users.my, 'welcome to webchat'));
            socket.broadcast.to(user.room).emit('message',
            
                formatMessage(user.id ,users.guest, `${user.username} has joined the webchat`));
            
            io.to(user.room).emit('roomUsers', {
                room : user.room,
                users: getRoomUsers(user.room)
            });
        });
    
        //chat message
        socket.on('chatMessage',msg => {
    
            const user = getUsers(socket.id);
            console.log(`chat message`);
            console.table(formatMessage(user.id, user.username, msg));
            io.to(user.room).emit('message', formatMessage(user.id, user.username, msg));
    
        });
    
        //out room chat
        socket.on('disconnect',() => {
    
            const user = usersLeaveRoom(socket.id);
    
            if(user){
                io.to(user.room).emit('message',
                formatMessage(user.id, users.guest, `${user.username} has left the webchat`));
                console.log(`has left the webchat`);
                console.table(user);
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


