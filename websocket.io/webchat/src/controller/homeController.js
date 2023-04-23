const express = require('express');
const renderView = require('../models/database_function.js');
const {render_toObjDB, render_list_database} = require('../models/database_function.js');
const {User_db,Title_web, User_send_message, Account} = require('../models/users_db.js');
//controller render pages 
// bộ điều khiển kết xuất trang
class homeController {
    constructor(username, password) {
        this.username = username;
        this.password = password;
      }
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
       
        renderView.render_database(User_send_message ,req, res , next, 'message.cl7');
    }
    postmessage = async (req,res, next)=>{
       
        const msg = new User_send_message(req.body);
        msg.save();
        renderView.render_database(User_send_message ,req, res , next, 'message.cl7');
    }
    create = async (req, res, next)=>{
        
        renderView.render_database(User_db ,req, res , next, 'show/create.cl7');
    }
    postStore = async (req, res, next)=>{
        //đối tượng (car) formdata
        //the object (car) form data
        const car = new User_db(req.body);
        //lưu đối tượng formdata vào database
        //Save FormData object to database
        car.save();
        res.send('Create new model!');
    }

    login = async (req, res, next)=>{
        Account.find({}).then(data => { 
                const users = render_list_database(data);
                users.forEach(user =>{
                   
                });
                //res.render('show/login.cl7',{notify});
            }).catch(err =>{next(err);
        });
       // renderView.render_database(Account ,req, res , next, 'show/login.cl7');
       res.render('show/login.cl7');
    }

    //hàm đăng nhập thành công
    //login success function
    loginSuccess = async (res,user)=>{
        //đợi chờ 2 giây trước khi thực thi
        //Wait for 2 seconds before executing
        setTimeout(function(){
            res.render('./show/account.cl7',{
                //success : 'Chúc mừng bạn đã đăng nhập thành công!'
                user : render_toObjDB(user)
            });
        },2000);
    }

    postLogin = async (req, res, next)=>{
        //input user (formdata)
        const input_user = req.body;
        const account = new Account(input_user);
       // account.save();
        Account.findOne({username :  input_user.username})
                .then(user => { 
                    //kiểm tra login 
                    //check login
                    //condition này chỉ kiểm tra 
                    //mật khẩu tương ứng với tên đăng nhập có trong database
                    // gán this.username cho user.username để lấy username
                    /**
                    condition only checks if the password matches the 
                    corresponding username in the database, 
                    assigns this.username to 
                    user.username to retrieve the username
                     */
                    this.username = user.username;
                    if(user.password === input_user.password){
                        this.loginSuccess(res,user);
                    }
                    else{
                        res.render('./show/login.cl7',{
                            fail : 'Xin lỗi vì điều này bạn đã login thất bại!'
                        });
                    }   
            }).catch(err =>{
                  //nếu tôi nhập một tên đăng nhập khác vào formdata ứng dụng web
                  //sẽ lỗi lợi dụng catch để bắt lỗi tôi sử dụng phương thức của tôi 
                  //vào catch để bắt lỗi khi ng dùng nhập 1 tên đăng nhập khác
                  /**
                   If I enter a different username into the form data, 
                   the web application will throw an error. 
                   I will use catch to capture the error, 
                   and then I will use my own method within 
                   the catch block to handle the error 
                   when a user enters a different username
                   */
                res.render('./show/login.cl7',{
                    fail : 'Xin lỗi vì điều này bạn đã login thất bại'
                });
        });
    }

    account = async (req, res, next)=>{

        var user = {username : this.username};
        Account.findOne({})
            .then(myuser => { 
                res.render('show/account.cl7', {
                    user
                });
            }).catch(err =>{next(err);
        });
    }

    show = async (req,res, next)=>{

        User_db.findOne({slug: req.params.slug})
            .then(data => { 
                res.render('show/show.cl7', {
                    data : render_toObjDB(data)});
            }).catch(err =>{next(err);
        });
    }
}

module.exports = {
    homePage : new homeController,
}