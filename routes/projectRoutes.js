const express = require('express');
const projectController = require('./../controllers/projectController');
const router = express.Router();

router.route('/project').post(projectController.createProject);

module.exports = router;
