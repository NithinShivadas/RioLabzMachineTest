const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default:"user" },
  
});

module.exports=User