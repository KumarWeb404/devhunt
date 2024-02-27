const express = require('express');
const devController = require('./../controllers/devController');
const router = express.Router();

router
  .route('/user')
  .get(devController.showUsers)
  .post(devController.addUser);

module.exports = router;
