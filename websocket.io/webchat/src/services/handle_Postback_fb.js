const {callSendAPI} =  require("../controller/botFbController");

function handlePostback(sender_psid, received_postback) {
    let response;
    
    let payload = received_postback.payload;

    if (payload === 'yes') {
      response = { "text": "Cảm ơn!" }
    } 
    else if (payload === 'no') {
      response = { "text": "ohhh, cảm ơn vì bạn đã nhận xét <: " }
    }
    
    callSendAPI(sender_psid, response);
}



module.exports = {
  handlePostback: handlePostback
};