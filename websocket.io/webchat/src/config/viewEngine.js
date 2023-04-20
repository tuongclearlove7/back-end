const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const handlebars = require('express-handlebars');
//config : cấu hình
let configViewEngine = (app,path,SESSION_SECRET,SESSION_ALGORITHM) =>{

    // app.use(express.static(path.join(__dirname, "../public")));
    // app.set('views', path.join(__dirname, "../views"));
    app.use(session({
        secret: SESSION_SECRET, // Khóa bí mật để mã hóa session
        algorithm: SESSION_ALGORITHM, // Thuật toán mã hóa
        resave: false,
        saveUninitialized: true
      }));
    app.use(flash());
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
    
  








