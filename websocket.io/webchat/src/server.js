const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const viewEngine = require('./config/viewEngine.js');
const router = require('./router/web.js');
const connectPageChat = require('./services/connect_websocket.js');
const communicateClient = require('./services/communicateClient.js');

require('dotenv').config();
//port : cổng
const port = process.env.PORT || 3000;

viewEngine.decorateWebsite(app,path);//config : cấu hình 
router.routeWebInit(app);//router : tuyến đường
communicateClient.connectToClient(io);//ket noi voi client
connectPageChat.connectWebChat(io);// ket noi voi page chat

//chạy port
server.listen(port, () => {
    console.log(`server running on port ${port}`);
});































