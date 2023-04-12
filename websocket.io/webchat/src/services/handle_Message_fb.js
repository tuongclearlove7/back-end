const {callSendAPI} =  require("../controller/botFbController");

function handleMessage(sender_psid, received_message) {
    let response;        
    if (received_message.text) {    
   
       response = {
        "text": `${received_message.text}`,
      }
  }

  if(received_message.text==="#Tường"){
    response = {"text": `${received_message.text} : Tường nick name Clearlove7 Profile : `+SearchBot[36],
    }
}

   else if (received_message.attachments) {
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "oh ảnh của bạn thật đẹp",
            "subtitle": "bạn có thấy nó đẹp không?",
            "image_url": attachment_url,
            "title":"cảm ơn vì đã gửi ảnh cho tôi ^^",
            "buttons": [
              {
                "type": "postback",
                "title": "Có rất đẹp ((: !",
                "payload": "yes",
              },
              {
                "type": "postback",
                "title": "Không đẹp chút nào !",
                "payload": "no",
              }
            ],
          }]
        }
      }
    }
  } 

  callSendAPI(sender_psid, response);   

}


module.exports = {

    handleMessage : handleMessage
};































