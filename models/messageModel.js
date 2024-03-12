const mongoose = require('mongoose');

const chatModel = mongoose.Schema({
  autoId: {
    type: Number,
    default: 0,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
  messages: [
    {
      fromId: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
      },
      message: {
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
    },
  ],
});

const Chat = mongoose.model('chat', chatModel);

module.exports = Chat;
