const express = require('express');
const coursesController = require('../app/controllers/courses.controller');
const router = express.Router();

router.post('/save', coursesController.save);
router.get('/create', coursesController.create);
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);
router.delete('/:id', coursesController.delete);
router.get('/:slug', coursesController.show);
router.get('/', coursesController.index);

module.exports = router;
