async function alertSuccess(io){
    io.on('connection', (socket) => {
        socket.emit("alert","login successfully");
    });
}


module.exports = {alertSuccess};




















