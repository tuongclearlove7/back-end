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

appClientConnection.get(0).socketio.on('server2', dataToServer => {

    console.log(dataToServer);
    renderData(dataToServer.img);
});

function renderData(data){

    var listNameClass = ['.data-server']

    document.querySelector(listNameClass[0]).innerHTML = `${data}`;
}

document.querySelector(".btn").addEventListener("click", function(e){

    checkValidInput(e);
});

function checkValidInput(e) {

    e.preventDefault();
    const username = document.getElementById("username");
    const room = document.getElementById("room");
    let valid = true;

    if (!username.value || !room.value) {
        
        alert('Vui long nhap vao form input');
    }else{

        console.log(document.join_page_chat.username.value); // lay du lieu tu form input
        console.log(document.join_page_chat.room.value);
        window.location.href=`/chat?username=${document.join_page_chat.username.value}&&room=${document.join_page_chat.room.value}`;
    }

    return valid;
}

























