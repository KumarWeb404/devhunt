const express = require('express');

const userController = require('../controllers/userController');
const freelancerController = require('../controllers/freelancerController');
const projectController = require('../controllers/projectController');

const router = express.Router();

//Login
router.post('/login', userController.login);

//Register
router.post('/register', freelancerController.register);
router.post('/update', freelancerController.updateFreelancer);

//Project
router.post('/project/all', projectController.getAllProjects);
router.post('/project/single', projectController.getProject);

router.all('*', (req, res) => {
  res.send({
    success: false,
    status: 404,
    message: 'Invalid address!',
  });
});

module.exports = router;
