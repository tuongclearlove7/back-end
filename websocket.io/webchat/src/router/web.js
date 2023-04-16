const express = require('express');
let router = express.Router();
const chatRoute = require('./chat');
const homeRoute = require('./home');
const {botPage, getWebhook, postWebhook} = require('../controller/botFbController');

//route init 
//hàm khởi tạo tuyến đường
let routeWebInit = (app) => {

    app.get('/chatbotfb', botPage.index);
    app.get('/webhook', getWebhook)
    router.post('/webhook', postWebhook);
    app.use('/chat', chatRoute);
    app.use('/', homeRoute);
}

module.exports = {
    routeWebInit : routeWebInit
};










