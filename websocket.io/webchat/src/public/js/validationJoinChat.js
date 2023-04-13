// event nav link 
//su kien click vao nav link 
document.querySelector("#chatpage").addEventListener("click", function(e){
    var user = undefined;
    var roomname = undefined;
    //function click button
    checkValidChatPage(e,user,roomname);
});
//ham kiem tra xem nguoi dung da nhap vao input hay chua neu chua thi k cho vao room
function checkValidChatPage(e,username,room) {

    e.preventDefault();
    let valid = true;

    if (!username || !room) {
        alert('ban phai nhap ten truoc khi vao room chat');
    }else{
        valid = true;
    }

    return valid;
}










