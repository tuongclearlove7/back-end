const express = require('express');
const handlebars = require('express-handlebars');
//config : cấu hình
let configViewEngine = (app,path) =>{

    app.use(express.static(path.join(__dirname, "../public")));
    app.use(express.urlencoded({extended: true})); 
    app.use(express.json());    
    app.engine('cl7', handlebars.engine({extname : '.cl7',}));
    app.set('view engine','cl7');
    app.set('views', path.join(__dirname, "../views"));
}

module.exports = {
    decorateWebsite : configViewEngine
};
    
  








