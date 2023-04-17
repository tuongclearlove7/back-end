const express = require('express');
require("dotenv").config();
const renderView = require('../models/database_function.js');
const {User_db} = require('../models/users_db.js');

//controller render pages 
// bộ điều khiển kết xuất trang
class chatController {
     //render chat page ...
    // kết xuất trang chat và các trang khác ...
    index = async (req,res, next)=>{

        renderView.render_database(User_db ,req, res , next, 'chat.cl7');
    }
    show = async (req,res, next)=>{
       
        return res.send('chat detail');
    }
}

module.exports = {
    chatPage : new chatController,
}