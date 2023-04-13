const express = require('express');
require("dotenv").config();


//render home page
let homePage = async (req,res, next)=>{

    console.log("get home page");
    return res.render('index.cl7');
}

//render news page
let newsPage = async (req, res, next)=>{

    console.log("get news page");
    return res.render('news.cl7');
}
//render contact page
let contactPage = async (req, res, next)=>{

    console.log("get contact page");
    return res.render('contact.cl7');
}

//post method contact page
let postContactPage = async (req, res, next)=>{

    console.log("post contact page");
    console.log(`nguoi dung vua nhap`);
    console.log(req.body);
    return res.render('contact.cl7');
}


module.exports = {

    homePage : homePage,
    newsPage : newsPage,
    contactPage : contactPage,
    postContactPage: postContactPage
    
}