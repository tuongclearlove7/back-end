const express = require('express');
const {chatPage} = require('../controller/chatController');
let router = express.Router();

//route path chat page : tuyến đường trang chat
router.get('/:slug', chatPage.show);
router.get('/', chatPage.index);

module.exports = router;



