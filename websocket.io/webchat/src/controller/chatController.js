const express = require('express');
require("dotenv").config();
const {homePage} = require('./homeController.js');
//controller render pages 
// bộ điều khiển kết xuất trang
class chatController {
     //render chat page ...
    // kết xuất trang chat và các trang khác ...
    index = async (req,res, next)=>{

        homePage.render_data(req ,res , next, 'chat.cl7');
    }
    
    show = async (req,res, next)=>{
       
        return res.send('chat detail');
    }
}

module.exports = {
    chatPage : new chatController,
}