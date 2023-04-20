const express = require('express');
const {homePage} = require('../controller/homeController');
let router = express.Router();

//route path home page : tuyến đường trang home và các trang khác cùng tuyến đường với home
router.get('/shop', homePage.shop);
router.get('/contact', homePage.contact);
router.get('/message', homePage.message);
router.get('/create', homePage.create);
router.post('/store', homePage.postStore);
router.post('/contact', homePage.postcontact);
router.post('/message', homePage.postmessage);
router.get('/:slug', homePage.show);
router.get('/', homePage.index);

module.exports = router;
















