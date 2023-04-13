//event button tai trang home 
//su kien click vao button join chat
document.querySelector(".btn").addEventListener("click", function(e){
    //function click button
    checkValidInput(e);
});
//check invalid input 
//ham kiem tra xem nguoi dung da nhap vao input hay chua neu chua thi k cho vao room
function checkValidInput(e) {

    e.preventDefault();
    const username = document.getElementById("username");
    const room = document.getElementById("room");
    let valid = true;

    if (!username.value || !room.value) {
        alert('Vui long nhap vao form input');
    }else{
        console.log(document.join_page_chat.username.value); // lay du lieu tu form input
        console.log(document.join_page_chat.room.value);
        window.location.href=`/chat?username=${document.join_page_chat.username.value}&&room=${document.join_page_chat.room.value}`;
    }

    return valid;
}












