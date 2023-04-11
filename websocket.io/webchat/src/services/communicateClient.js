function userConnectServer(io){

    io.on('connection', (socket) => {
        
        console.log(`${socket.id} user connect server...`);
        //user disconnect server
        socket.on('disconnect', () => {
            console.log(`${socket.id} disconnect server`);
        });

        //server giao tiep voi client
        socket.emit("server","receive from server to client");
    });
}


module.exports = {

    userConnectServer: userConnectServer
};


















