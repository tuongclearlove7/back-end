const express = require('express');
require("dotenv").config();
//controller render pages 
// bộ điều khiển kết xuất trang
class chatController {
     //render chat page ...
    // kết xuất trang chat và các trang khác ...
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