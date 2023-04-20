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
const db = require('./config/databases/index.js');
require('dotenv').config();
//port : cổng
const port = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET;
const SESSION_ALGORITHM = process.env.SESSION_ALGORITHM;

viewEngine.decorateWebsite(app, path, SESSION_SECRET, SESSION_ALGORITHM);//config : cấu hình 
router.routeWebInit(app);//router : tuyến đường
communicateClient.connectToClient(io);//connect to client (ket noi voi client)
connectPageChat.connectWebChat(io);//connect to page chat (ket noi voi phong chat)
db.connectDB();//connect databases : kết nối databases

//chạy port
//run port
server.listen(port, () => {
    console.log(`server running on port ${port}`);
});































