const express = require('express');
const coursesController = require('../app/controllers/courses.controller');
const router = express.Router();

router.post('/save', coursesController.save);
router.get('/create', coursesController.create);
router.post('/from-handle-action', coursesController.handleAction);
router.get('/:id/edit', coursesController.edit);
router.delete('/:id/force-delete', coursesController.forceDelete);
router.put('/:id', coursesController.update);
router.delete('/:id', coursesController.SoftDelete);
router.patch('/:id', coursesController.restore);
router.get('/:slug', coursesController.show);
router.get('/', coursesController.index);

module.exports = router;
