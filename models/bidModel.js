const mongoose = require('mongoose');

const bidModel = mongoose.Schema({
  autoId: {
    type: Number,
    default: 0,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: 'client',
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: 'project',
  },
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: 'freelancer',
  },
  bidAmount: {
    type: Number,
    default: 0,
  },
  poc: [String],
  description: {
    type: String,
    default: '',
  },
  duration: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: true,
  },
});
