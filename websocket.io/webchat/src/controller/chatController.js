const express = require('express');
require("dotenv").config();


//render chat page
let chatPage = async (req, res, next) => {

    console.log("get chat page");
    return res.render('chat.cl7');
}

//render message page
let messagePage = async (req, res, next) => {

    console.log("get message page");
    console.log(req.body);
    return res.render('message.cl7');
}

module.exports = {

    chatPage: chatPage,
    messagePage : messagePage
};