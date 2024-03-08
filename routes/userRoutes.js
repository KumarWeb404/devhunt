const projectController = require('./../controllers/projectController');
const categoryController = require('./../controllers/categoryController');
const express = require('express');

const router = express.Router();

router.post('/project/all', projectController.getProjects);
router.post('/project/single', projectController.getProject);
router.post('/project/create', projectController.createProject);
router.post('/project/delete', projectController.deleteProject);

router.post('/category/create', categoryController.createCategory);

module.exports = router;
