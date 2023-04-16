const express = require('express');
require("dotenv").config();

class chatController {

    index = async (req,res, next)=>{

        console.log("get chat page");

        return res.render('chat');
    }
    
    show = async (req,res, next)=>{
       
        return res.send('chat detail');
    }
}

module.exports = {
    chatPage : new chatController,
}