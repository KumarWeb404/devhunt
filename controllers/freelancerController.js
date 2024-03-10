const User = require('./../models/userModel');
const Freelancer = require('./../models/freelancerModel');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  let validation = '';

  if (!req.body.name) {
    validation += 'Name is required. ';
  }
  if (!req.body.email) {
    validation += 'Email is required. ';
  }
  if (!req.body.password) {
    validation += 'Password is required. ';
  }
  if (!req.body.contact) {
    validation += 'Contact is required. ';
  }
  if (!req.body.categoryId) {
    validation += 'CategoryId is required. ';
  }

  if (!!validation) {
    return res.send({
      success: false,
      status: 400,
      message: 'Validation Error: ' + validation,
    });
  } else {
    const totalUser = await User.countDocuments();
    let user = new User();
    user.autoId = totalUser + 1;
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = bcrypt.hashSync(req.body.password, 10);

    user
      .save()
      .then(async (userData) => {
        const totalFreelancer = await Freelancer.countDocuments();
        let freelancer = new Freelancer();
        freelancer.userId = userData._id;
        freelancer.autoId = totalFreelancer + 1;
        freelancer.name = req.body.name;
        freelancer.email = req.body.email;
        freelancer.contact = req.body.contact;
        freelancer.categoryId = req.body.categoryId;

        freelancer
          .save()
          .then((freelancerData) => {
            res.send({
              success: true,
              status: 201,
              message: 'New freelancer registered!',
              data: {
                freelancer: freelancerData,
              },
            });
          })
          .catch((err) => {
            res.send({
              success: false,
              status: 500,
              message: err.message,
            });
          });
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

exports.getAllFreelancers = (req, res) => {
  Freelancer.find(req.body)
    .populate('userId')
    .populate('categoryId')
    .exec()
    .then(async (freelancers) => {
      const total = await Freelancer.countDocuments();
      res.send({
        success: true,
        status: 200,
        total,
        message: 'All freelancers found!',
        data: {
          freelancers,
        },
      });
    })
    .catch((err) => {
      res.send({
        success: false,
        status: 500,
        message: err.message,
      });
    });
};

exports.getFreelancer = (req, res) => {
  let validation = '';

  if (!req.body._id) {
    validation += 'id is required. ';
  }

  if (!!validation) {
    return res.send({
      success: false,
      status: 400,
      message: 'Validation Error: ' + validation,
    });
  } else {
    Freelancer.findOne({ _id: req.body._id })
      .exec()
      .then((freelancerData) => {
        if (freelancerData == null) {
          return res.send({
            success: false,
            status: 404,
            message: 'Freelancer does not exist!',
          });
        } else {
          return res.send({
            success: true,
            status: 200,
            message: 'Freelancer found!',
            data: {
              freelancer: freelancerData,
            },
          });
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
