const express = require('express');
const moment = require('moment');

function formatMessage(id, username, text){
   
    return {
        id,
        username,
        text,
        time : moment().format('h:mm a')
    };
}


module.exports = formatMessage;
























