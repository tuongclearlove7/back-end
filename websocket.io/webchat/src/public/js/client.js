const socket = io();
const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.querySelector('#room-name');
const usersName = document.querySelector('#users');
const {username, room} = Qs.parse(location.search, {

     ignoreQueryPrefix: true

});

console.log(username, room);

//joined room chat
socket.emit('joinRoom',{username, room});

//get room and users
socket.on('roomUsers', ({room,users}) => {

    getRoom(room);
    clientGetUsers(users);
});

//send message
socket.on('message', message => {
    console.log(message);

    sendMessage(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

// submit send chat messages
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = e.target.elements.msg.value;
    socket.emit('chatMessage',msg); 
    e.target.elements.msg.value = ''; 
    e.target.elements.msg.focus(); 
});

//function send message
function sendMessage(message) {

    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">${message.text}</p>`; 
    document.querySelector('.chat-messages').appendChild(div);

}

//get room name
function getRoom(room){

    roomName.innerHTML = `${room}`;
}

// get name users
function clientGetUsers(users){

    usersName.innerHTML = `${users.map(user =>
                `<li>${user.username}</li>`).join(" ")}`; 
}











