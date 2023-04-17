const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// databases user
const User_db = new Schema(
    {
        home : {type : String, maxLength: 600},
        description_home : {type : String, maxLength: 600},
        img_home : {type : String, maxLength: 600},
        createdAt : {type : Date, default: Date.now}, 
        updatedAt : {type : Date, default: Date.now}, 
    },
    {
        chat : {type : String, maxLength: 600},
        description_chat : {type : String, maxLength: 600},
        img_chat : {type : String, maxLength: 600},
        createdAt : {type : Date, default: Date.now}, 
        updatedAt : {type : Date, default: Date.now}, 
    },
    {
        news : {type : String, maxLength: 600},
        description_news : {type : String, maxLength: 600},
        img_news : {type : String, maxLength: 600},
        createdAt:{type : Date, default: Date.now}, 
        updatedAt:{type : Date, default: Date.now}, 
      
    },
    {
        contact: {type : String, maxLength: 600},
        description_contact: {type : String, maxLength: 600},
        img_contact: {type : String, maxLength: 600},
        createdAt:{type : Date, default: Date.now}, 
        updatedAt:{type : Date, default: Date.now}, 
      
    },
    {
        home: {type : String, maxLength: 600},
        description_message: {type : String, maxLength: 600},
        img_message : {type : String, maxLength: 600},
        createdAt : {type : Date, default: Date.now}, 
        updatedAt : {type : Date, default: Date.now}, 
      
    },
);

module.exports = mongoose.model('User_db', User_db);
















