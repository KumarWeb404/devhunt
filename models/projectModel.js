const mongoose = require('mongoose');

const projectModel = mongoose.Schema({
  clientId: {
    type: Number,
    default: 0,
  },
  categoryId: {
    type: Number,
    default: 0,
  },
  autoId: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    default: '',
  },
  technology: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  duration: {
    type: String,
    default: 0,
  },
  budget: {
    type: Number,
    default: 0,
  },
  attachment: [],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const Project = mongoose.model('project', projectModel);

module.exports = Project;
