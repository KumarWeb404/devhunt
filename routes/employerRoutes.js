const express = require('express');
const employerController = require('./../controllers/employerController');
const router = express.Router();

router
  .route('/user')
  .get(employerController.showUsers)
  .post(employerController.addUser);

module.exports = router;
