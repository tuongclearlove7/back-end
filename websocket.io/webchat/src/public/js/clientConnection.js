const socket = io();

//create promise
let promise = new Promise(

    //Executor
   function(resolve, reject){

   resolve("success");//thành công

   reject("Error");// lỗi
});

promise.then(function(success){

    console.log(success);

    //get id user connected
    socket.on('connect',() => {

        console.log(socket.id);
    });
    
    //receive from server to client
    socket.on('server', msgClient => {
    
        console.log(msgClient);
    });

}).catch(function(err){

    console.log(err);
});





























