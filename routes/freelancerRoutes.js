const express = require('express');

const userController = require('../controllers/userController');
const clientController = require('../controllers/clientController');
const freelancerController = require('../controllers/freelancerController');
const projectController = require('../controllers/projectController');
const bidController = require('../controllers/bidController');
const chatController = require('../controllers/chatController');

const router = express.Router();

//Login
router.post('/login', userController.login);
router.post('/change-password', userController.changePassword);

//Register
router.post('/register', freelancerController.register);
router.post('/update', freelancerController.updateFreelancer);

//Client
router.post('/client-single', clientController.getClient);

//Freelancer
router.post('/freelancer-single', freelancerController.getFreelancer);

//Project
router.post('/project/all', projectController.getAllProjects);
router.post('/project/single', projectController.getProject);

//Bid
router.post('/bids', bidController.getAllBids);
router.post('/bid-single', bidController.getBid);
router.post('/create-bid', bidController.createBid);
router.post('/bid-update', bidController.updateBid);

//Chat
router.post('/chat', chatController.createChat);

router.all('*', (req, res) => {
  res.send({
    success: false,
    status: 404,
    message: 'Invalid address!',
  });
});

module.exports = router;
