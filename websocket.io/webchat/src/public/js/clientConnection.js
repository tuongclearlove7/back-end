const appClientConnection = (function () {
    
    var data = [{
        socketio : io()
    }];

    return{
        get(index){
            return data[index];
        }
    }
})();

 //get id user connected
appClientConnection.get(0).socketio.on('connect',() => {

    console.log( appClientConnection.get(0).socketio.id);
});

//receive from server to client
var memory = [];
appClientConnection.get(0).socketio.on('server', dataToServer => {

    memory = dataToServer;
    //console.log(data);
});

// console.log(data);

appClientConnection.get(0).socketio.on('server2', dataToServer => {

    renderData(dataToServer);
});


function renderData(data){

    var listNameClass = ['.data-server']

    document.querySelector(listNameClass[0]).innerHTML = `${data}`;
}
























