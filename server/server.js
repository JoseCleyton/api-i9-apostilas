'use strict'

const express = require('express');
const http = require('http');
const debug = require('debug')('api-i9-apostilas');

const app = require('../app');
const port = process.env.PORT;
const server = http.createServer(app);
const router = express.Router();

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log('API rodando na porta: ' + port);

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return port;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;


    switch (error.code) {
        case 'EACCES':
            console.log(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(bind + ' is already in use');
            process.exit(1);
            break;

        default:
            throw error;
    }
};
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;

    debug('Listening on ' + bind);
};
