const mongoose = require('mongoose');

const employerModel = mongoose.Schema({
  autoId: { type: Number, default: 0 },
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  password: { type: String, default: '' },
  userType: { type: Number, default: 3 },
  createdAt: { type: Date, default: Date.now },
  status: { type: Boolean, default: true },
});

const Employer = mongoose.model('employer', employerModel);

module.exports = Employer;
