const express = require('express');
const {homePage} = require('../controller/homeController');
let router = express.Router();

router.get('/news', homePage.news);
router.get('/news', homePage.news);
router.get('/contact', homePage.contact);
router.get('/message', homePage.message);
router.post('/contact', homePage.postcontact);
router.post('/message', homePage.postmessage);
router.get('/:slug', homePage.show);
router.get('/', homePage.index);

module.exports = router;
















