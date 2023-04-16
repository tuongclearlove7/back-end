import { render_List } from "./clientRendering.js";
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
        //render to display
        render_List(".logo","block-logo",resource[1][0].img);
        render_List(".heading","block-heading",`<h1><a href="/home">${resource[1][0].header}</a></h1>`);
        render_List(".footer-top","block-f-top",`<address>${resource[1][0].author}</address>`);
        render_List(".footer-top","block-f-top",`<address>${resource[1][0].address}</address>`);

    });    
});



























