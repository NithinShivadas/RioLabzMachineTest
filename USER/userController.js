const User = require("./user");

//---------get user------------
const getUser = async (req, res, next) => {
    let users;
    try {
      users = await User.find();
    } catch (err) {
      console.log(err);
    }
    if (!users) {
      return res.status(404).json({ message: "No User Found" });
    }
    return res.status(200).json({ users });
  };
  
  //-----------sign up User-------------
  const signupUser = async (req, res, next) => {
    const { username,mobile, email, password } = req.body;
    let existUser;
    try {
      existUser = await User.findOne({ "email": email , "password":password});
    } catch (err) {
      console.log(err);
    }
    if (existUser) {
      return res.status(404).json({ message: "User Already Exist" });
    }
    const user=new User({
      email,
      password,
    });
    try {
      await user.save();
    } catch (err) {
      console.log(err);
    }
    return res.status(200).json({ user,message:"Register Success" });
  };
  
  //--------------Log in------------------
  const loginUser=async(req,res,next)=>{
      const{email,password}=req.body
      let existUser
      try{
          existUser = await User.findOne({ "email": email,"password":password });
      } catch (err) {
        console.log(err);
      }
      if (!existUser) {
        return res.status(404).json({ message: "Couldnt find user by this email..Try Again!!!!!" });
      }
      return res.status(200).json({ existUser,message:"Login Success" });
  }
  
  //------------------update userrole-------------------

const updateUserRole = async (req, res, next) => {
  // const {role}=req.body
  const userId = req.params.id;
  let foodmenu;
  try {
    foodmenu = await Food.findByIdAndUpdate(userId, {
      role:"Admin"
     
    });
  } catch (err) {
    console.log(err);
  }
  if (!foodmenu) {
    return res.status(500).json({ message: "Unable to switch user to Admin" });
  }
  return res
    .status(200)
    .json({ foodmenu, message: "Admin Role added successfully" });
};
  
  module.exports={getUser,signupUser,loginUser,updateUserRole}