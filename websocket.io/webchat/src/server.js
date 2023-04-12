const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const {configViewEngine} = require('./config/viewEngine.js');
const {routeWeb} = require('./router/web.js');
const {connectWebChat} = require('./services/connect_websocket.js');
const {receiveDataToClient} = require('./services/communicateClient.js');

require('dotenv').config();
//port : cổng
const port = process.env.PORT || 3000;

configViewEngine(app);//config : cấu hình 
routeWeb(app);//router : tuyến đường
receiveDataToClient(io);
connectWebChat(io);

//chạy port
server.listen(port, () => {

    console.log(`server running on port ${port}`);
});































