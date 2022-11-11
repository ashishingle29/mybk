const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController");
const memeController = require("../controllers/memeController");
const weatherController = require("../controllers/weatherController");



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/cowin/getSession/v2/appointment/sessions/public/findByDistrict", CowinController.districtDetails)
// router.get("/cowin/districtsWithData/v2/appointment/sessions/public/findByDistrict", CowinController.districtDetails)
// router.get("/weatherdata/data/2.5/weather", weatherController.weatherdata)
router.get("/weatherdata/data/2.5/weather", weatherController.weathertempcity)
router.post("/createMeme", memeController.createMeme);
router.get("/cowin/states", CowinController.getStates)



router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;