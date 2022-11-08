const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Midd = require("../middlewares/commonMiddlewares")

router.post("/users",userController.createUser)
router.post("/login",userController.loginUser)
router.get("/users/:userId",Midd.Authentication,Midd.authorization,userController.getUserData)
router.put("/users/:userId",Midd.Authentication,Midd.authorization,userController.updatedata)
router.delete("/users/:userId",Midd.Authentication,Midd.authorization,userController.deleteData)
 


module.exports = router;
