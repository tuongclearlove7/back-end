
//ket noi voi server de lay du lieu tu server
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
    //get id
    console.log(appClientConnection.get(0).socketio.id);
});

//receive from server to client
var memory = [];
appClientConnection.get(0).socketio.on('server', dataToServer => {

    memory = dataToServer;
    //console.log(data);
});

appClientConnection.get(0).socketio.on('server2', dataToServer => {
    //get data from server
    console.log(dataToServer);
    renderData(dataToServer.img);
});


//render data from server
function renderData(data){

    var listNameClass = ['.data-server']

    document.querySelector(listNameClass[0]).innerHTML = `${data}`;
}



























