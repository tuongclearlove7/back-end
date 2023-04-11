const express = require('express');
const homeController = require('../controller/homeController.js');
const chatController = require('../controller/chatController.js');
let router = express.Router();

// route : tuyến đường 
let routeWeb = (app) => {

    router.get("/",homeController.homePage);
    router.get("/home",homeController.homePage);
    router.get("/chat",chatController.chatPage);
    router.post("/message",chatController.messagePage);
    router.get("/message",chatController.messagePage);
    router.get("/news",homeController.newsPage);
    router.get("/contact",homeController.contactPage);
    router.post("/contact", homeController.postContactPage);

    return app.use("/",router);
}

module.exports = {

    routeWeb : routeWeb
};










