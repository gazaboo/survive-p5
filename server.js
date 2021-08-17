'use strict';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const express = require('express');
const app = express();
app.use(express.static('public'));

const server = app.listen(PORT);
const socket = require('socket.io'); 
const io = socket(server);

io.sockets.on('connection', newConnection); 

console.log(`Running on http://${HOST}:${PORT}`);


function newConnection(socket){
    socket.on('data', data => {
        socket.broadcast.emit('data', data); 
    }); 
}