//hàm kết xuất dữ liệu trong databases ra giao diện
//rendering data from databases to a user interface.
function render_database(database,req,res, next, page){
    // lấy dữ liệu ra từ databases
    // get data from database
    database.find({}).then((data) => { // trả về kết quả return to results
        data = data.map(res => res.toObject());

        res.render(page,{data});
    }).catch(err =>{//xử lý lỗi handle error
        next(err);
    });
}

function render_toObjDB(mongoose){
    return mongoose ? mongoose.toObject() : mongoose;
}

function render_list_database(list_mongoose){
    return list_mongoose.map(mongoose => mongoose.toObject());
}

module.exports = {
    render_database,
    render_toObjDB,
    render_list_database,
};
























