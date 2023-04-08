const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('What is your name?')
sendMessage('You joined')
socket.emit('new-user', name)

socket.on('chat-message', data => {
  console.log(data);
  sendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name => {
  sendMessage(`${name} is comming room chat`)
})

socket.on('user-disconnected', name => {
  sendMessage(`${name} out room chat`)
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  sendMessage(`You: ${message}`)
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function sendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}