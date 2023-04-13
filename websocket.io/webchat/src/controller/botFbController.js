require("dotenv").config();
const request = require('request');
const fs = require("fs");
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
let VERIFY_TOKEN = process.env.VERIFY_TOKEN;


let botPage = async (req,res, next)=>{


      res.setHeader('Access-Control-Allow-Origin', process.env.REACT);
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
  
      next();
  
      console.log("reload app");

      return res.send('bot page');
}

let postWebhook = (req,res) =>{

    let body = req.body;

    if (body.object === 'page') {

        body.entry.forEach(function(entry) 
    {

    
    let webhook_event = entry.messaging[0];

    console.log('Event : ',webhook_event);


    let sender_psid = webhook_event.sender.id;

    console.log('Sender PSID : ' + sender_psid);

    
    if (webhook_event.message) {

        handleMessage(sender_psid, webhook_event.message); 

    } 

    else if (webhook_event.postback) {

            handlePostback(sender_psid, webhook_event.postback);

        };
    });

    res.status(200).send('EVENT_RECEIVED');

    }
    
    else{

      res.sendStatus(404);
    }
};

let getWebhook = (req,res) =>{

    console.log('verify token : ',VERIFY_TOKEN)

    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    if(mode && token){

        if(mode === "subscribe"&&token === VERIFY_TOKEN){ 

            console.log("WEBHOOK_VERIFY");

            res.status(200).send(challenge);

        }else{

            res.sendStatus(403);
            }   
        }
};


function callSendAPI(sender_psid, response) {

    let request_body = {

      "recipient": {

        "id": sender_psid
      },

      "message": response
    }
    
    request({

      "uri": "https://graph.facebook.com/v2.6/me/messages",
      "qs": { "access_token": PAGE_ACCESS_TOKEN },
      "method": "POST",
      "json": request_body

    },(err, res, body) => {

        if (!err) {

          console.log('message sent!');//
        
        } else {

          console.error("Unable to send message:" + err);
        }
    });
}

module.exports = {
    botPage: botPage,
    getWebhook: getWebhook,
    postWebhook: postWebhook,
    callSendAPI : callSendAPI
};












