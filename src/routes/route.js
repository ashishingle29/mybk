const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post('/createpub', bookController.createpub)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)



// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.get("/getBooksData", bookController.getBooksData)


router.put('/putbook', bookController.putbook)
router.put('/priceUpdate', bookController.priceUpdate)

module.exports = router;