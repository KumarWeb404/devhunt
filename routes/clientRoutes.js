const express = require('express');

const userController = require('../controllers/userController');
const clientController = require('../controllers/clientController');
const freelancerController = require('../controllers/freelancerController');
const projectController = require('../controllers/projectController');
const bidController = require('../controllers/bidController');
const chatController = require('../controllers/chatController');

const router = express.Router();

router.post('/login', userController.login);
router.post('/register', clientController.register);
router.post('/client-single', clientController.getClient);
router.post('/freelancer-single', freelancerController.getFreelancer);
router.post('/project/all', projectController.getAllProjects);
router.post('/project/single', projectController.getProject);

//Check Token
router.use(require('../config/tokenChecker'));

router.post('/change-password', userController.changePassword);

router.post('/update', clientController.updateClient);

//Project
router.post('/project/create', projectController.createProject);
router.post('/project/update', projectController.updateProject);
router.post('/project/delete', projectController.delete);

//Bid
router.post('/bids', bidController.getAllBids);
router.post('/bid-single', bidController.getBid);

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
