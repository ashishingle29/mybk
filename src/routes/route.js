const express = require("express")
const router = express.Router()
const controller = require("../controllers/userController")
const middleware = require("../middleware/auth")

router.post("/users", controller.resisterApi)
router.post("/login", controller.loginApi)

router.get("/users/:userId", middleware.loginCheck, middleware.autherisation, controller.fetchUser)

router.put("/users/:userId", middleware.loginCheck, middleware.autherisation, controller.updateUser)

router.delete("/users/:userId", middleware.loginCheck, middleware.autherisation, controller.deleteUser)



module.exports = router