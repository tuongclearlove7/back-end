const express = require('express');
require("dotenv").config();
const User_db = require('../models/users_db.js');
//controller render pages 
// bộ điều khiển kết xuất trang
class homeController {
    //hàm kết xuất dữ liệu trong databases ra giao diện
    //rendering data from databases to a user interface.
    render_data(req,res, next, page){
        // lấy dữ liệu ra từ databases
        // get data from database
        User_db.find({}).then(databases => { // trả về kết quả return to results
            databases = databases.map(data => data.toObject());
            res.render(page,{databases});
        }).catch(err =>{//xử lý lỗi handle error
            next(err)
        });
    }
    //render home page ...
    // kết xuất trang home và các trang khác ...
    index = async (req,res, next)=>{
    
        this.render_data(req ,res , next, 'index.cl7');
    }
    news = async (req,res, next)=>{
       
        this.render_data(req ,res , next, 'news.cl7');

    }
    contact = async (req,res, next)=>{
       
        this.render_data(req ,res , next, 'contact.cl7');
    }
    postcontact = async (req,res, next)=>{
       
        console.log(req.body);
        this.render_data(req ,res , next, 'contact.cl7');
    }
    message = async (req,res, next)=>{
       
        this.render_data(req ,res , next, 'message.cl7');
    }
    postmessage = async (req,res, next)=>{
       
        console.log(req.body);
        this.render_data(req ,res , next, 'message.cl7');
    }
    show = async (req,res, next)=>{
       
        this.render_data(req ,res , next, 
            'index.cl7', 'Home page');
    }
}

module.exports = {
    homePage : new homeController,
}