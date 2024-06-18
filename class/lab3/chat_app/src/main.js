import { io } from '../../../../node_modules/socket.io-client';

// Create a WebSocket connection to the backend
const socket = io('http://fwd.innopolis.university');

const messages = document.getElementById('messages');

// The server is configured to emit an event called "chat message"
//  when any user sends a message.
socket.on('chat message', function (msg) {
    // Create a new list item and fill it with our message content
    const item = document.createElement('li');
    item.textContent = msg;
    // And then add it to the screen
    messages.appendChild(item);
    // Lastly, scroll to the bottom of the page to show messages as they arrive
    window.scrollTo(0, document.body.scrollHeight);
});