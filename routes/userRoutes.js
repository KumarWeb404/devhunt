const freelancerController = require('./../controllers/freelancerController');
const projectController = require('./../controllers/projectController');
const clientController = require('./../controllers/clientController');
const express = require('express');

const router = express.Router();

//Project
router.post('/project/all', projectController.getAllProjects);
router.post('/project/single', projectController.getProject);
router.post('/project/create', projectController.createProject);
router.post('/project/delete', projectController.deleteProject);

//Freelancer
router.post('/freelancer/register', freelancerController.register);
router.post('/freelancer/all', freelancerController.getAllFreelancers);
router.post('/freelancer/single', freelancerController.getFreelancer);

//Client
router.post('/client/register', clientController.register);
router.post('/client/all', clientController.getAllClients);
router.post('/client/single', clientController.getClient);

module.exports = router;
