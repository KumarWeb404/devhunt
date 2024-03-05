const projectController = require('./../controllers/projectController');
const express = require('express');

const router = express.Router();

router.post('/project/all', projectController.getProjects);
router.post('/project/single', projectController.getProject);
router.post('/project/create', projectController.createProject);
router.post('/project/delete', projectController.deleteProject);

module.exports = router;
