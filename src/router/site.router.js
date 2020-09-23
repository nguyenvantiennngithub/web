const express = require('express');
const siteController = require('../app/controllers/site.controller');
const router = express.Router();

router.get('/search', siteController.search);
router.post('/find', siteController.find);
router.get('/', siteController.index);

module.exports = router;
