const encoding = require('./encoding.js');
// connection to the website
function connectToClient(io){

    //connect web server 
    io.on('connection', (socket) => {
         console.log(socket.id + " websocket connection website..."); 
        //user disconnect server
        socket.on('disconnect', () => {
            console.log(`${socket.id} disconnect to server`);
        });
        //gui du lieu den client
        socket.emit('encoding', encoding.convertStringToHex);
        socket.emit(encoding.convertStringToHex,
            [1,2,3,4],
            [
                {
                    img:`<a href="/"><img src="./image/clearlove7.png" alt="banner"></a>`,
                    author : "clearlove7",
                    header: "Header"
                }
            ] 
        );
    });
}

module.exports = {
    connectToClient: connectToClient
};


















