const socket = io();
const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const countUser = document.getElementById('count-user');

const name = prompt('What is your name?');
sendMessage(`You joined`);
socket.emit('new-user', name);

socket.on('chat-message', data => {
    console.log(data);
    sendMessage(`${data.name}: ${data.message}`);
});

socket.on('user-connected', data => {
    countUser.innerHTML = `so nguoi trong room ${data.count}`;
    console.log(`User : ${data.count}`);
    sendMessage(`${data.name} is comming room chat`);
    
});

socket.on('user-disconnected', data => {
    countUser.innerHTML = `so nguoi trong room ${data.count}`;
    console.log(`User : ${data.count}`);
    sendMessage(`${data.name} out room chat`);
   
});

messageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value
    sendMessage(`You: ${message}`);
    socket.emit('send-chat-message', message);
    messageInput.value = '';
});

function sendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}