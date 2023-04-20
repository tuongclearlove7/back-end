const express = require('express');
require("dotenv").config();
const renderView = require('../models/database_function.js');
const {render_toObjDB, render_list_database} = require('../models/database_function.js');
const {User_db,Title_web, User_send_message} = require('../models/users_db.js');
//controller render pages 
// bộ điều khiển kết xuất trang
class homeController {
    //render home page ...
    // kết xuất trang home và các trang khác ...
    index = async (req, res, next)=>{
    
        renderView.render_database(User_db ,req, res , next, 'index.cl7');
    }
    shop = async (req,res, next)=>{
       //render step 
        // User_db.find({}).then(data => { 
        //     res.render('shop.cl7', {
        //         data : render_list_database(data)
        //     });
        // }).catch(next);
        renderView.render_database(User_db ,req, res , next, 'shop.cl7');

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
       
        const msg = new User_send_message(req.body);
        msg.save();
        res.send('message send success');
    }
    create = async (req, res, next)=>{
        
        renderView.render_database(User_db ,req, res , next, 'show/create.cl7');
    }
    postStore = async (req, res, next)=>{

        const car = new User_db(req.body);
        car.save();
        res.send('Create new model!');
    }
    show = async (req,res, next)=>{
       
        //console.log(req.params.slug);
        //renderView.render_database(User_db ,req, res , next, 'index.cl7');
        // res.send(`Home detail ${req.params.slug}`);
        //render step 
        User_db.findOne({slug: req.params.slug})
            .then(data => { 
                res.render('show/show.cl7', {data : render_toObjDB(data)});
            }).catch(err =>{next(err);
        });
    }
}

module.exports = {
    homePage : new homeController,
}