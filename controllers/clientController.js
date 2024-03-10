const User = require('./../models/userModel');
const Client = require('./../models/clientModel');
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
  if (!req.body.companyName) {
    validation += 'Company name is required. ';
  }
  if (!req.body.address) {
    validation += 'Address is required. ';
  }
  if (!req.body.country) {
    validation += 'Country is required. ';
  }
  if (!req.body.contact) {
    validation += 'Contact is required. ';
  }

  if (!!validation) {
    res.send({
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
    user.userType = 2;

    user
      .save()
      .then(async (userData) => {
        const clientTotal = await Client.countDocuments();
        let client = new Client();
        client.userId = userData._id;
        client.autoId = clientTotal + 1;
        client.name = req.body.name;
        client.email = req.body.email;
        client.companyName = req.body.companyName;
        client.address = req.body.address;
        client.country = req.body.country;
        client.contact = req.body.contact;

        client
          .save()
          .then((clientData) => {
            res.send({
              success: true,
              status: 201,
              message: 'New client registered!',
              data: {
                client: clientData,
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

exports.getAllClients = (req, res) => {
  Client.find(req.body)
    .populate('userId')
    .exec()
    .then(async (clients) => {
      const total = await Client.countDocuments();
      res.send({
        success: true,
        status: 200,
        total,
        message: 'All clients found!!',
        data: {
          clients,
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

exports.getClient = (req, res) => {
  let validation = '';
  if (!req.body._id) {
    validation = 'id is required. ';
  }

  if (!!validation) {
    res.send({
      success: true,
      status: 400,
      message: 'Validation Error: ' + validation,
    });
  } else {
    Client.findOne({ _id: req.body._id })
      .exec()
      .then((clientData) => {
        if (clientData == null) {
          return res.send({
            success: false,
            status: 404,
            message: 'Client does not exist!',
          });
        } else {
          return res.send({
            success: true,
            status: 200,
            message: 'Client found!',
            data: {
              client: clientData,
            },
          });
        }
      });
  }
};
