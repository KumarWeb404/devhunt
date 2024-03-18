const Chat = require('../models/chatModel');

exports.createChat = async (req, res) => {
  let validation = '';

  if (!req.body.clientId) {
    validation += 'clientId is required.';
  }
  if (!req.body.freelancerId) {
    validation += 'freelancerId is required.';
  }

  if (!!validation) {
    res.send({
      success: false,
      status: 400,
      message: 'Validation Error: ' + validation,
    });
  } else {
    const totalChat = await Chat.countDocuments();
    const { fromId, message } = req.body;
    let chat = new Chat();
    chat.autoId = totalChat + 1;
    chat.clientId = req.body.clientId;
    chat.freelancerId = req.body.freelancerId;
    chat.messages.fromId = fromId;
    chat.messages.message = message;

    chat
      .save()
      .then((newChat) => {
        res.send({
          success: true,
          status: 201,
          message: 'New chat created!!',
          data: {
            chat: newChat,
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
  }
};

// exports.viewChat = (req,res)=>{

// }
