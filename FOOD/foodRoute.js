const express=require('express')
const routeFood=express.Router()

const {getFoodMenu,addfoodMenu,updateFoodMenu,deletefoodMenu}=require('./foodController')

  routeFood.get('/',getFoodMenu)
  routeFood.post('/addFood',addfoodMenu)
  routeFood.post('/update/:id',updateFoodMenu)
  routeFood.delete('/:id',deletefoodMenu)
  


  module.exports=routeFood
