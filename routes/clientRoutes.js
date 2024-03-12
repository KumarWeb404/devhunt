const express = require('express');

const userController = require('../controllers/userController');
const clientController = require('../controllers/clientController');
const projectController = require('../controllers/projectController');

const router = express.Router();

//Login
router.post('/login', userController.login);

//Register
router.post('/register', clientController.register);

//Project
router.post('/project/all', projectController.getAllProjects);
router.post('/project/single', projectController.getProject);
router.post('/project/create', projectController.createProject);
router.post('/project/delete', projectController.deleteProject);

router.all('*', (req, res) => {
  res.send({
    success: false,
    status: 404,
    message: 'Invalid address!',
  });
});

module.exports = router;
