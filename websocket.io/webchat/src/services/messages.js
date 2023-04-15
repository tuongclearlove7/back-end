const express = require('express');
const moment = require('moment');

// format data 
function formatData(id, username, text, room, state, countUsers, countMessages){
   
    return {
        id,
        username,
        text,
        room,
        state,
        countUsers,   
        countMessages,
        time : moment().format('h:mm a')
    };
}

module.exports = {formatData};
























