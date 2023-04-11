const express = require('express');
const moment = require('moment');

// format data 
function formatData(id, username, text, room, state){
   
    return {
        id,
        username,
        text,
        room,
        state,
        time : moment().format('h:mm a')
    };
}


module.exports = formatData;
























