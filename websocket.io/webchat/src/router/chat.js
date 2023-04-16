const express = require('express');
const {chatPage} = require('../controller/chatController');

let router = express.Router();

router.get('/:slug', chatPage.show);
router.get('/', chatPage.index);

module.exports = router;



