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
//config : cấu hình
viewEngine.decorateWebsite(app, path, SESSION_SECRET, SESSION_ALGORITHM); 
//router : tuyến đường
router.routeWebInit(app);
//connect to client (ket noi voi client)
communicateClient.connectToClient(io);
//connect to page chat (ket noi voi phong chat)
connectPageChat.connectWebChat(io);
//connect databases : kết nối databases
db.connectDB();

//chạy port
//run port
server.listen(port, () => {
    console.log(`server running on port ${port}`);
});































