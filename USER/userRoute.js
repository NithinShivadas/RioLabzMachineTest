const express=require('express')
const routeUser=express.Router()

const {getUser,signupUser,loginUser,updateUserRole}=require('./userController')

  routeUser.get('/',getUser)
  routeUser.post('/signup',signupUser)
  routeUser.post('/login',loginUser)
  routeUser.put('/update/id',updateUserRole)


  module.exports=routeUser