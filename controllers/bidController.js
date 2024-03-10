const Bid = require('./../models/bidModel');

exports.createBid = async (req, res) => {
  const { clientId, freelancerId, projectId, poc, description, duration } =
    req.body;
  const totalBids = await Bid.countDocuments();

  let validation = '';

  if (!clientId) {
    validation += 'clientId is Required ';
  }
  if (!projectId) {
    validation += 'projectId is Required ';
  }
  if (!freelancerId) {
    validation += 'freelancerId is Required ';
  }
  if (!poc) {
    validation += 'poc is Required ';
  }
  if (!description) {
    validation += 'description is Required ';
  }
  if (!duration) {
    validation += 'duration is Required ';
  }

  if (!!validation) {
    return res.send({
      success: false,
      status: 400,
      message: 'Validation Error: ' + validation,
    });
  } else {
    let bid = new Bid();
    bid.autoId = totalBids + 1;
    bid.clientId = clientId;
    bid.projectId = projectId;
    bid.freelancerId = freelancerId;
    bid.poc = poc;
    bid.description = description;
    bid.duration = duration;

    bid
      .save()
      .then((bid) => {
        res.send({
          success: true,
          status: 201,
          message: 'New bid created!!',
          data: {
            bid,
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
