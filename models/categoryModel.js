const mongoose = require('mongoose');

const categoryModel = mongoose.Schema({
  autoId: {
    type: Number,
    default: 0,
  },
  name: {
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

const Category = mongoose.model('category', categoryModel);

module.exports = Category;
