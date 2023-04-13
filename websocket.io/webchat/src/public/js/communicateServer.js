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
        rendering(".logo","block-logo",resource[1][0].img);//render
        rendering(".heading","block-heading",`<h1><a href="/home">${resource[1][0].header}</a></h1>`);
        rendering(".footer-top","block-f-top",`<address>${resource[1][0].author}</address>`);
        rendering(".footer-top","block-f-top",`<address>${resource[1][0].address}</address>`);

    });    
});

//render data from server
function rendering(class1, class2, obj){
    
    const div = document.createElement('div');
    div.classList.add(class2);
    div.innerHTML = `${obj}`; 
    document.querySelector(class1).appendChild(div);
}



























