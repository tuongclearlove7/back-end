const socket = io();
const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');


const name = prompt('What is your name?');
var username = [];
socket.emit('new-user',name);
sendMessage(`<h4 style='color:grey;'>you joined<h4>`);

socket.on('message', data => {

    sendMessage(`${data.name}: ${data.message}`);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

socket.on('user-connected', data => {

    console.log(`User : ${data.count}`);
    sendMessage(`${data.name} is comming room chat`);
   
});

socket.on('user-disconnected', data => {
    console.log(`User : ${data.count}`);
    sendMessage(`${data.name} out room chat`);
   
});
 
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = e.target.elements.msg.value;
    socket.emit('chatMessage',msg);
    sendMessage(`You : ${msg}`);
    e.target.elements.msg.value = " ";
    e.target.elements.msg.focus();

});

function sendMessage(message) {
        
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta"><span></span></p>
    <p class="text">${message}</p>`; 
    document.querySelector('.chat-messages').appendChild(div);
}




















