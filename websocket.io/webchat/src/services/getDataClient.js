function userConnectServer(io){

    io.on('connection', (socket) => {
        
        console.log(`${socket.id} user connect server...`);
        socket.on('disconnect', () => {
            console.log(`${socket.id} disconnect server`);
        });

        socket.emit("server","receive from server to client");
    });
}


module.exports = {

    userConnectServer: userConnectServer
};


















