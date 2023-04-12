
//event button tai trang home kiem tra co nhap input hay k truoc khi vao room chat 
document.querySelector(".btn").addEventListener("click", function(e){
    //function click button
    checkValidInput(e);
});
//check invalid input
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












