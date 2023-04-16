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
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">${message.text}</p>`; 
    document.querySelector('.chat-messages').appendChild(div);

}
export{
    render_object,
    render_List,
    sendMessage
}










