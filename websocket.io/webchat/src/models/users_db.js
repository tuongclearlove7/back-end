const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// model database User_db
const User_db = new Schema(
    {
        home : {type : String, maxLength: 600},
        description : {type : String, maxLength: 600},
        img : {type : String, maxLength: 600},
        name : {type : String, maxLength: 600},
        createdAt : {type : Date, default: Date.now}, 
        updatedAt : {type : Date, default: Date.now}, 
    },
    {
        logo : {type : String, maxLength: 600},
        heading : {type : String, maxLength: 600},
        name_dev : {type : String, maxLength: 600},
        adDress : {type : String, maxLength: 600},
        createdAt : {type : Date, default: Date.now}, 
        updatedAt : {type : Date, default: Date.now}, 
    },
    {
        chat : {type : String, maxLength: 600},
        description : {type : String, maxLength: 600},
        img : {type : String, maxLength: 600},
        name : {type : String, maxLength: 600},
        createdAt : {type : Date, default: Date.now}, 
        updatedAt : {type : Date, default: Date.now}, 
    },
    {
        news : {type : String, maxLength: 600},
        description : {type : String, maxLength: 600},
        img : {type : String, maxLength: 600},
        name : {type : String, maxLength: 600},
        createdAt:{type : Date, default: Date.now}, 
        updatedAt:{type : Date, default: Date.now}, 
      
    },
    {
        contact: {type : String, maxLength: 600},
        description: {type : String, maxLength: 600},
        img: {type : String, maxLength: 600},
        name : {type : String, maxLength: 600},
        createdAt:{type : Date, default: Date.now}, 
        updatedAt:{type : Date, default: Date.now}, 
      
    },
    {
        message: {type : String, maxLength: 600},
        description: {type : String, maxLength: 600},
        img : {type : String, maxLength: 600},
        name : {type : String, maxLength: 600},
        createdAt : {type : Date, default: Date.now}, 
        updatedAt : {type : Date, default: Date.now}, 
      
    },
);

// model database title_web
const Title_web = new Schema(
    {
        logo : {type : String, maxLength: 600},
        heading : {type : String, maxLength: 600},
        name_dev : {type : String, maxLength: 600},
        address : {type : String, maxLength: 600},
        createdAt : {type : Date, default: Date.now}, 
        updatedAt : {type : Date, default: Date.now}, 
    },
);

const Key_chat = new Schema(
    {
        chao : {type : String, maxLength: 600},
        hoi_ten : {type : String, maxLength: 600},
        tra_loi : {type : String, maxLength: 600},
        createdAt : {type : Date, default: Date.now}, 
        updatedAt : {type : Date, default: Date.now}, 
    },
);

module.exports = {
    User_db : mongoose.model('User_db', User_db),
    Title_web : mongoose.model('Title_web', Title_web),
    Key_chat : mongoose.model('Key_chat', Key_chat),
};
















