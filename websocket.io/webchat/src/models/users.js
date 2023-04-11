
const users = [];

//get users joined room
function userJoin(id, username, room){

    const user = {id, username, room};
    users.push(user);

    return user;
}

//get users
function getUsers(id){

    return users.find(user => user.id === id);

}

//get users left room
function usersLeaveRoom(id){

    const index = users.findIndex(user => user.id === id);

    if(index !== -1){ 
        return users.splice(index, 1)[0];
    }
}

//get room of user
function getRoomUsers(room){

    return users.filter(user => user.room === room);
}

module.exports = {

    userJoin,
    getUsers,
    usersLeaveRoom,
    getRoomUsers
};


































































