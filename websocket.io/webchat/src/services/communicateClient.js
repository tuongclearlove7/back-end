// ket noi voi client gui du lieu tu server toi client
// connection to the website
function receiveDataToClient(io){

    //connect to server website
    io.on('connection', (socket) => {
         console.log(socket.id + " websocket connection website..."); 
        //user disconnect server
        socket.on('disconnect', () => {
            console.log(`${socket.id} disconnect to server`);
        });
        //data from server to 
        socket.emit("server",[1,2,3,4]);
        socket.emit("server2",{
            img:`<a href="/"><img src="./image/clearlove7.png" alt="banner"></a>`
        });
    });
}


module.exports = {

    receiveDataToClient: receiveDataToClient
};


















