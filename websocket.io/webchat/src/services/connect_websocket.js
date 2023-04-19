const {userJoin, getUsers, usersLeaveRoom, getRoomUsers} = require('../models/users.js');
const {formatData} = require('./messages.js');
const {handleAutoMsg} = require('./chatBot.js');

const users = {

    my : 'You',
    guest : "Guest"
};
var countUsers = 0;
var countMessages = 0;
//connection websocket
//ket noi voi websocket
function connectWebChat(io){

    io.on('connection',socket => {      
        //users join the chat room
        //người dùng tham gia vào phòng chat
        socket.on('joinRoom', ({username, room}) => {
            //count the number of users joining the chat room.
            //đếm số người dùng tham gia phòng trò chuyện.
            ++countUsers;
            console.log(`${socket.id} connect to the page chat`);
            const user = userJoin(socket.id,username, room);
            socket.join(user.room);
            //object của một user mới tham gia vào room chat
            //the object of a new user joining the chat room.
            const obj_user = formatData(
                user.id ,users.guest, 
                `${user.username} has joined the webchat`, 
                user.room, "joined the webchat", 
                countUsers, 
                countMessages, null);
            // khi một user mới tham gia vào thì countMessages sẽ reset về 0 
            //vd : thao join room chat (new user) =>  countMessages = 0
            //tuy nhiên user bên kia vẫn còn trong phòng nên giá trị countMessages vẫn giữ nguyên giá trị
            // tuong vẫn còn trong phòng chat nên số messages của tuong vẫn giữ nguyên giá trị
            if(obj_user.countUsers > 1){
                obj_user.countMessages = 0;// reset về 0
            }
            socket.emit('message', obj_user);
            socket.broadcast.to(user.room).emit('message', obj_user);
            //print out the data status.
            //in trạng thái dữ liệu.
            console.table(obj_user);
            io.to(user.room).emit('roomUsers', {
                room : user.room,
                users: getRoomUsers(user.room)
            });
        });
        //chat message
        socket.on('chatMessage',msg => {
            //chat automatic
            //tự động chat
            const automatic = handleAutoMsg(msg);
            console.log(automatic);
            const user = getUsers(socket.id);
            //count the number of messages.
            //đếm số lượng tin nhắn.
            ++countMessages;
            const obj_user = formatData(
                    user.id, 
                    user.username, 
                    msg, 
                    user.room, 
                    "sending", 
                    countUsers, 
                    countMessages, 
                    automatic,
            );
            //print out the data status.
            //in trạng thái dữ liệu
            console.table(obj_user);
            io.to(user.room).emit('message', obj_user);
    
        });
    
        //out room chat
        socket.on('disconnect',() => {
    
            const user = usersLeaveRoom(socket.id);
            if(user){
                //count the number of users leaving the chat room.
                //đếm số người rời phòng chat
                --countUsers;
                //khi tất cả người dùng rời khỏi phòng trò chuyện, CountMessages sẽ được reset về 0                
                //when all users leave the chat room, countMessages will be reset to 0
                if(countUsers == 0){
                    //reset the messages to 0.
                    countMessages=0;
                }
                io.to(user.room).emit('message',
                //print out the data status.
                //in trạng thái dữ liệu.
                formatData(user.id, 
                           users.guest, 
                          `${user.username} has left the webchat`, 
                           user.room,'out webchat', 
                           countUsers, 
                           countMessages, null));
                console.table(formatData(user.id, 
                        users.guest, 
                        `${user.username} has left the webchat`, 
                        user.room, 'out webchat', 
                        countUsers, 
                        countMessages, null));
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


