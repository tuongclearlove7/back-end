const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
//config : cấu hình
let configViewEngine = (app) =>{

    app.use(express.static(path.join(__dirname, "../public")));
    app.use(express.urlencoded({extended: true})); 
    app.use(express.json());    
    app.engine('cl7', handlebars.engine({extname : '.cl7',}));
    app.set('view engine','cl7');
    app.set('views', path.join(__dirname, "../views"));
}

module.exports = {
    configViewEngine : configViewEngine
};
    
  








