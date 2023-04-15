//hàm render list object
function render_List(class1, class2, obj){
    
    const div = document.createElement('div');
    div.classList.add(class2);
    div.innerHTML = `${obj}`; 
    document.querySelector(class1).appendChild(div);
}

//hàm render list 1 object
function render_object(classOrID,countUsers){

    document.querySelector(classOrID).innerText = countUsers;
}


export{

    render_object,
    render_List,
}










