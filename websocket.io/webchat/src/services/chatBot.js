const {Key_chat} = require('../models/users_db.js');
var globalMemory;

Key_chat.find({}).then((data) => {
    const memory = data.map(item => item);
    globalMemory = memory;
});

// hàm xử lý chat
//handle auto chat
/* vì biến globalMemory thực thi trước biến memory trong hàm then
nên thi in globalMemory sẽ ra một object rỗng thế nên sử dụng hàm await
để biến globalMemory thực thi nó sẽ trẻ về giá trị mà biến memory vừa 
gán cho globalMemory
------------------------------------------------------------------------
Since globalMemory is executed before memory inside the then block,
printing globalMemory will result in an empty object. 
To ensure that globalMemory gets assigned the value that memory just received, 
we can use the await function to delay the 
execution of globalMemory.*/
async function handleAutoMsg(msg){

    // console.log(globalMemory[0]);
    var res ='';
    switch (msg) {
        case await globalMemory[0].chao:
            return res = "Xin chào";
        case await globalMemory[0].hoi_ten:
            return res = await globalMemory[0].tra_loi;
        case undefined:
            break;
        default:
            break;
    }
}

module.exports = {    
    handleAutoMsg,
};






























