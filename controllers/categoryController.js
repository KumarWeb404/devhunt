const Category = require('./../models/categoryModel');

exports.createCategory = async (req, res) => {
  const totalCategory = await Category.countDocuments();
  const { name } = req.body;
  let category = new Category();
  category.autoId = totalCategory + 1;
  category.name = name;

  category.save().then((data) => {
    res.send({
      success: true,
      status: 201,
      message: 'New category created!!',
      data: {
        category,
      },
    });
  });
};
