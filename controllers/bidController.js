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

exports.getAllBids = (req, res) => {
  req.body.status = true;
  Bid.find(req.body)
    .exec()
    .then((bids) => {
      res.send({
        success: true,
        status: 200,
        message: 'All bids found!',
        data: {
          bids,
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

exports.getBid = (req, res) => {
  let validation = '';

  if (!req.body._id) {
    validation += 'id is required.';
  }

  if (!!validation) {
    return res.send({
      success: false,
      status: 400,
      message: 'Validation Error: ' + validation,
    });
  } else {
    Bid.findOne({ _id: req.body._id })
      .exec()
      .then((bid) => {
        if (bid == null) {
          return res.send({
            success: false,
            status: 404,
            message: 'Bid does not exist!',
          });
        } else {
          return res.send({
            success: true,
            status: 200,
            message: 'Bid found!',
            data: {
              bid,
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

exports.updateBid = (req, res) => {
  let validation = '';

  if (!req.body._id) {
    validation += 'id is required.';
  }

  if (!!validation) {
    return res.send({
      success: false,
      status: 400,
      message: 'Validation Error: ' + validation,
    });
  } else {
    Bid.findOne({ _id: req.body._id })
      .exec()
      .then((bid) => {
        if (bid == null) {
          res.send({
            success: false,
            status: 404,
            message: 'Bid does not exists!',
          });
        } else {
          if (!!req.body.bidAmount) {
            bid.bidAmount = req.body.bidAmount;
          }
          if (!!req.body.poc) {
            bid.poc = req.body.poc;
          }
          if (!!req.body.description) {
            bid.description = req.body.description;
          }
          if (!!req.body.duration) {
            bid.duration = req.body.duration;
          }
          bid
            .save()
            .then((updatedBid) => {
              res.send({
                success: true,
                status: 200,
                message: 'Bid updated!',
                data: {
                  bid: updatedBid,
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
