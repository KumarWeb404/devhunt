const express = require('express');

const userController = require('../controllers/userController');
const freelancerController = require('../controllers/freelancerController');
const clientController = require('../controllers/clientController');
const projectController = require('../controllers/projectController');
const categoryController = require('../controllers/categoryController');
const bidController = require('../controllers/bidController');
const chatController = require('../controllers/chatController');

const router = express.Router();

//Login
router.post('/login', userController.login);

//Check Token
router.use(require('../config/tokenChecker'));

router.post('/change-password', userController.changePassword);

//Freelancer
router.post('/freelancer/all', freelancerController.getAllFreelancers);
router.post('/freelancer/single', freelancerController.getFreelancer);
router.post('/freelancer/change-status', userController.changeStatus);

//Client
router.post('/client/all', clientController.getAllClients);
router.post('/client/single', clientController.getClient);
router.post('/client/change-status', userController.changeStatus);

//Project
router.post('/project/all', projectController.getAllProjects);
router.post('/project/single', projectController.getProject);
router.post('/project/create', projectController.createProject);
router.post('/project/delete', projectController.delete);

//Category
router.post('/category/all', categoryController.getAllCategory);
router.post('/category/single', categoryController.getCategory);
router.post('/category/create', categoryController.createCategory);
router.post('/category/update', categoryController.updateCategory);
router.post('/category/change-status', categoryController.changeStatus);

//Bid
router.post('/bids', bidController.getAllBids);
router.post('/bid-single', bidController.getBid);

router.all('*', (req, res) => {
  res.send({
    success: false,
    status: 404,
    message: 'Invalid address!',
  });
});

module.exports = router;
