const express = require('express');
require("dotenv").config();
const renderView = require('../models/database_function.js');
const {User_db} = require('../models/users_db.js');
const {Title_web} = require('../models/users_db.js');

//controller render pages 
// bộ điều khiển kết xuất trang
class homeController {
   
    //render home page ...
    // kết xuất trang home và các trang khác ...
    index = async (req, res, next)=>{
    
        renderView.render_database(User_db ,req, res , next, 'index.cl7');
    }
    news = async (req,res, next)=>{
       
        renderView.render_database(User_db ,req, res , next, 'news.cl7');

    }
    contact = async (req,res, next)=>{
       
        renderView.render_database(User_db ,req, res , next, 'contact.cl7');
    }
    postcontact = async (req,res, next)=>{
       
        console.log(req.body);
        renderView.render_database(User_db ,req, res , next, 'contact.cl7');
    }
    message = async (req,res, next)=>{
       
        renderView.render_database(User_db ,req, res , next, 'message.cl7');
    }
    postmessage = async (req,res, next)=>{
       
        console.log(req.body);
        renderView.render_database(User_db ,req, res , next, 'message.cl7');
    }
    show = async (req,res, next)=>{
       
        renderView.render_database(User_db ,req, res , next, 'index.cl7');
    }
}

module.exports = {
    homePage : new homeController,
}