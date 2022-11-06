const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/registration", userController.registeruser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", mid.authenticate, userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId", userController.updateUser)
router.delete('/users/:userId', userController.deleteUser)

module.exports = router;