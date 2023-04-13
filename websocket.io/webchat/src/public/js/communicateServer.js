//connection server
//ket noi voi server 
const appSocket = (function () {
    
    var data = [{
        socketio : io(),
    }];

    return{
        get(index){
            return data[index];
        },
        add(obj){
            return data.push(obj);
        }, 
    }
})();

//receive from server to client 
// nhan du lieu tu server
appSocket.get(0).socketio.on('connect',resource => {

    resource = appSocket.get(0).socketio.id;
    console.log(resource);
});

appSocket.get(0).socketio.on('encoding', key => {

    appSocket.get(0).socketio.on(key, (...resource) => {

        console.log(resource);
        renderData(".logo",null,resource[1][0].img);//render
        renderData(".heading",null,`<h1><a href="/home">${resource[1][0].header}</a></h1>`);
    });    
});

//render data from server
function renderData(classname, id, obj){

    document.querySelector(classname).innerHTML = `${obj}`;
}



























