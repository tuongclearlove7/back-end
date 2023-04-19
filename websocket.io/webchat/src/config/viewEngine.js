const express = require('express');
const handlebars = require('express-handlebars');
//config : cấu hình
let configViewEngine = (app,path) =>{

    // app.use(express.static(path.join(__dirname, "../public")));
    // app.set('views', path.join(__dirname, "../views"));
    app.use(express.static("./src/public"));
    app.use(express.urlencoded({extended: true})); 
    app.use(express.json());    
    app.engine('cl7', handlebars.engine({extname : '.cl7',}));
    app.set('view engine','cl7');
    app.use(express.static("./src/views"));
    app.set("views", "./src/views");
}

module.exports = {
    decorateWebsite : configViewEngine
};
    
  








