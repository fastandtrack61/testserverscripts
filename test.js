const net = require('net');

const socket = net.createConnection(465, 'smtp.gmail.com');
socket.on('connect', () => console.log('Connected!'));
socket.on('error', (err) => console.error('Error:', err));
