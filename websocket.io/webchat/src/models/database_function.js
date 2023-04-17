//hàm kết xuất dữ liệu trong databases ra giao diện
//rendering data from databases to a user interface.
function render_database(database,req,res, next, page){
    // lấy dữ liệu ra từ databases
    // get data from database
    database.find({}).then((data) => { // trả về kết quả return to results
        data = data.map(res => res.toObject());
        //console.log(data);
        res.render(page,{data});
    }).catch(err =>{//xử lý lỗi handle error
        next(err)
    });
}

module.exports = {
    render_database,
};
























