// Get DOM elements
const messageList = document.getElementById('message-list');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Event listener for sending a message
sendButton.addEventListener('click', sendMessage);

// Function to send a message
function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = messageText;
        messageList.appendChild(messageElement);
        messageInput.value = '';
        messageList.scrollTop = messageList.scrollHeight;
    }
}
