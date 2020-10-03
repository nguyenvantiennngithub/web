const express = require('express');
const meController = require('../app/controllers/me.controller');
const router = express.Router();

router.get('/show-courses', meController.show);

module.exports = router;
