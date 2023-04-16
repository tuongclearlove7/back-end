const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const testcase1 = require('./connect_websocket.js');
const {formatData} = require('./messages.js');
const moment = require('moment');
const testcase2 = require('./encoding.js');
const {convertStringToHex} = require('./encoding.js');
//test function
describe('the can', () => {

    const io = new Server(server);
    //tests case
    test('connect success websocket', () => {
        expect(testcase1.connectWebChat(io)).not.toBe(io);
    });
    test('the argument is true', () => {
        io.on('connection',socket => { 
            expect(formatData(null,null,null,null,null,null)).toStrictEqual({
                id : socket.id, 
                room: null, 
                state: null,
                text: null, 
                username: null,
                ucontUsers,
                countMessages,                
                time : moment().format('h:mm a')
            });
        });
    });
    test('same results', () => {
        expect(testcase2.convertStringToHex1).toEqual(convertStringToHex('server'));
    });
});



























