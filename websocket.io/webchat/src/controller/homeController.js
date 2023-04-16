const express = require('express');
require("dotenv").config();
//controller render pages 
// bộ điều khiển kết xuất trang
class homeController {
    //render home page ...
    // kết xuất trang home và các trang khác ...
    index = async (req,res, next)=>{

        console.log("get home page");
        return res.render('index.cl7');
    }
    news = async (req,res, next)=>{
       
        return res.render('news.cl7');
    }
    contact = async (req,res, next)=>{
       
        return res.render('contact.cl7');
    }
    postcontact = async (req,res, next)=>{
       
        console.log(req.body);
        return res.render('contact.cl7');
    }
    message = async (req,res, next)=>{
       
        return res.render('message.cl7');
    }
    postmessage = async (req,res, next)=>{
       
        console.log(req.body);
        return res.render('message.cl7');
    }
    show = async (req,res, next)=>{
       
        return res.render('index.cl7');
    }
}

module.exports = {
    homePage : new homeController,
}