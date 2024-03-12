const express = require('express');

const userController = require('../controllers/userController');
const freelancerController = require('../controllers/freelancerController');
const clientController = require('../controllers/clientController');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

//Login
router.post('/login', userController.login);

//Freelancer
router.post('/freelancer/all', freelancerController.getAllFreelancers);
router.post('/freelancer/single', freelancerController.getFreelancer);

//Client
router.post('/client/all', clientController.getAllClients);
router.post('/client/single', clientController.getClient);

//Category
router.post('/category/all', categoryController.getAllCategory);
router.post('/category/single', categoryController.getCategory);
router.post('/category/create', categoryController.createCategory);
router.post('/category/update', categoryController.updateCategory);
router.post('/category/delete', categoryController.deleteCategory);

router.all('*', (req, res) => {
  res.send({
    success: false,
    status: 404,
    message: 'Invalid address!',
  });
});

module.exports = router;
