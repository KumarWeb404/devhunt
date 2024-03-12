const User = require('./../models/userModel');
const bcrypt = require('bcrypt');

exports.login = (req, res) => {
  let validation = '';

  if (!req.body.email) {
    validation += 'Email is required. ';
  }
  if (!req.body.password) {
    validation += 'Password is required. ';
  }

  if (!!validation) {
    return res.send({
      success: false,
      status: 400,
      message: 'Validation Error: ' + validation,
    });
  } else {
    User.findOne({ email: req.body.email })
      .exec()
      .then((userData) => {
        if (userData == null) {
          return res.send({
            success: false,
            status: 404,
            message: 'User account does not exist',
          });
        } else {
          if (bcrypt.compareSync(req.body.password, userData.password)) {
            if (userData.status) {
              return res.send({
                success: true,
                status: 200,
                message: 'Login successful!',
                data: {
                  user: userData,
                },
              });
            } else {
              return res.send({
                success: false,
                status: 403,
                message: 'Account inactive!',
              });
            }
          } else {
            return res.send({
              success: false,
              status: 401,
              message: 'Incorrect passsword!',
            });
          }
        }
      })
      .catch((err) => {
        res.send({
          success: false,
          status: 500,
          message: err.message,
        });
      });
  }
};
