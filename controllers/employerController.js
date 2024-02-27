const Employer = require('./../models/employerModel');

exports.showUsers = async (req, res) => {
  try {
    const allUsers = await Employer.find();
    res.status(200).json({
      status: 'success',
      message: 'Users Found!',
      data: {
        allUsers,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.addUser = async (req, res) => {
  try {
    const autoId = await Employer.countDocuments();
    const { name, email, password, createdAt, userType, status } =
      await Employer.create(req.body);
    res.status(201).json({
      status: 'success',
      message: 'New employer added.',
      data: {
        autoId,
        name,
        email,
        password,
        createdAt,
        userType,
        status,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err,
    });
  }
};
