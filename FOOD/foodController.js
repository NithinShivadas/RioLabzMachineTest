const mongoose = require("mongoose");
const Food = require("./food");

//-------------------Add food-------------------
const addfoodMenu = async (req, res, next) => {
  const { origin, category, taste } = req.body;
  let foodmenu;
  try {
    foodmenu = await Food.findOne({
      origin: origin,
      category: category,
      taste: taste,
    });
  } catch (err) {
    console.log(err);
  }
  if (foodmenu) {
    return res.status(404).json({ message: "This Menu items Already Exist" });
  }
  const food = new Food({
    origin,
    category,
    taste,
  });
  try {
    await Food.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(200).json({ food, message: "Menu Added Successfully" });
};

//------------------get Food-----------------
const getFoodMenu = async (req, res, next) => {
  let foodmenu;
  try {
    foodmenu = await Food.find();
  } catch (err) {
    console.log(err);
  }
  if (!foodmenu) {
    return res.status(404).json({ message: "No menu items Found" });
  }
  return res.status(200).json({ foodmenu });
};

//------------------update food-------------------

const updateFoodMenu = async (req, res, next) => {
  const { origin, category, taste } = req.body;
  const foodMenuId = req.params.id;
  let foodmenu;
  try {
    foodmenu = await Food.findByIdAndUpdate(foodMenuId, {
      origin,
      category,
      taste,
    });
  } catch (err) {
    console.log(err);
  }
  if (!foodmenu) {
    return res.status(500).json({ message: "Unable to update the Menu" });
  }
  return res
    .status(200)
    .json({ foodmenu, message: "Menu Updated Successfully" });
};

//----------------------Delete food----------------

const deletefoodMenu = async (req, res, next) => {
  const id = req.params.id;
  let foodmenu;
  try {
    foodmenu = await Food.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!foodmenu) {
    return res.status(404).json({ message: "Unable to delete" });
  }
  return res
    .status(200)
    .json({ foodmenu, message: "Food Removed Successfully" });
};

module.exports = {
  addfoodMenu,
  getFoodMenu,
  updateFoodMenu,
  deletefoodMenu,
};
