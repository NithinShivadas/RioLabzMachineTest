const mongoose = require("mongoose");

const Food = mongoose.model("Food", {
  origin: { type: String, required: true },
  category: { type: String, required: true },
  taste: { type: String, required: true },
  
  
});

module.exports = Food;

