const mongoose = require('mongoose');

async function connectDB(){
    //connect to mongodb 
    mongoose.connect('mongodb://127.0.0.1:27017/webchat_db_dev', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
    }).then(res => 
        //connect thành công
        console.log('connect successfully'))
      .catch((err) => 
        // connect thất bại 
        console.log('connect failed : ', err));
}

module.exports = {
    connectDB : connectDB,
};
































