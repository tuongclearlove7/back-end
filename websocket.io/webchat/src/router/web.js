const express = require('express');
const homeController = require('../controller/homeController.js');
const chatController = require('../controller/chatController.js');
const botFbController = require('../controller/botFbController.js');
let router = express.Router();

// route : tuyến đường 
let routeWeb = (app) => {

    router.get("/",homeController.homePage);
    router.get("/home",homeController.homePage);
    router.get("/chat",chatController.chatPage);
    router.get("/message",chatController.messagePage);
    router.get("/news",homeController.newsPage);
    router.get("/contact",homeController.contactPage);
    router.get("/botchatfb",botFbController.botPage);
    router.get("/webhook", botFbController.getWebhook);
    router.post("/contact", homeController.postContactPage);
    router.post("/message",chatController.messagePage);
    router.post("/webhook", botFbController.postWebhook);

    return app.use("/",router);
}

module.exports = {

    routeWeb : routeWeb
};










