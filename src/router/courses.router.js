const express = require('express');
const coursesController = require('../app/controllers/courses.controller');
const router = express.Router();

router.get('/', coursesController.index);

module.exports = router;
