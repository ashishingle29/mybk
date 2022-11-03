const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid= require("../../middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.user  )

router.post("/login", userController.login)

//The userId is sent by front end
router.get("/users/:userId", mid.verifytoken, userController.getData)

router.put("/users/:userId",mid.verifytoken, userController.updatedata)

router.delete("/users/:userId",mid.verifytoken, userController.deleteData)

module.exports = router;