//hàm render list object
function render_List(class1, class2, obj){
    
    const div = document.createElement('div');
    div.classList.add(class2);
    div.innerHTML = `${obj}`; 
    document.querySelector(class1).appendChild(div);
}
//hàm render list 1 object
function render_object(classOrID,countUsers){

    document.querySelector(classOrID).innerText = countUsers;
}
//function send message
function sendMessage(message) {

    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">
    ${message.username} <span>${message.time}</span></p>
    <p class="text">${message.text}</p>`; 
    document.querySelector('.chat-messages').appendChild(div);

}

//function auto send message
function autoSend(message,auto_send) {

    const div = document.createElement('div');
    div.classList.add('auto-message');
    div.innerHTML = `<p class="auto">${"Bot"} <span>${message.time}</span></p>
    <p class="text-auto">${auto_send}</p>`; 
    document.querySelector('.chat-messages').appendChild(div);

}
//hàm gọi lại sau 2 giây
// Call back in 2 seconds.
function callMsg2Seconds(message,msg_auto) {
    return new Promise(resolve => {
        setTimeout(() => {
            if(msg_auto === '' || msg_auto === null || 
               msg_auto === undefined)
            {
                return "";
            }
            else{
                autoSend(message,msg_auto);
            }
        }, 1500);   
    });
}
//executing function
//hàm thực thi
async function asyncCallMsg(message,msg_auto) {

    sendMessage(message);
    await callMsg2Seconds(message,msg_auto);
    // Expected output: "resolved"
}

export{
    render_object,
    render_List,
    sendMessage,
    autoSend,
    asyncCallMsg
}










