// connection to the website
function userConnectServer(io){

    //connect to server website
    io.on('connection', (socket) => {
         console.log(socket.id + " websocket connection website..."); 
        //user disconnect server
        socket.on('disconnect', () => {
            console.log(`${socket.id} disconnect to server`);
        });

        //get data from server to client
        socket.emit("server",[1,2,3,4]);
        socket.emit("server2",{
            img:`<a href="/"><img src="./image/clearlove7.png" alt="banner"></a>`
        });
    });
}


module.exports = {

    userConnectServer: userConnectServer
};


















