const express = require('express');
const morgan = require('morgan');
const path = require('path')
const handlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,'public')));
 
app.use(morgan('combined'));

//config : cấu hình
app.engine('cl7', handlebars.engine({

    extname : '.cl7',

}));
app.set('view engine','cl7');
app.set('views', path.join(__dirname, 'resources/views'));


//route : tuyến đường
app.get('/', (req, res) => {

    res.render('home');
});
app.get('/news', (req, res) => {

    res.render('news');
});


const applications = (function(){

    return{

        get(){

            console.log(`Example app listening at http://localhost:${port}`)

        }

    }
    
})()

app.listen(port,applications.get());

























