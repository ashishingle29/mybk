const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel");
const authorModel = require('../models/authorModel');


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )


// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.post("/createAuthor", BookController.createAuthor  )

router.get("/chetanbhagatbyid", BookController.chetanbhagatbyid)

router.get('/twostatesdata', BookController.twostatesdata)

router.get('/getbook50100', BookController.getbook50100)


module.exports = router;




// router.get('/getbook50100', async function(req,res){

    // let getbook = await BookModel.find({price :{$gte : 50, $lte :100}}).select({author_id:1, name:1})
    // allid = getbook.author_id
    // let idbyname = await authorModel.find({author_id: allid})
    // res.send({msg : idbyname})

    // const bookList = await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1, name:1})

    // const authotIdList = bookList.map( book => book.author_id) // [id, id, id]

    // const authorList = await authorModel.find( {author_id : {$in: authotIdList }})

// allby =
// bookList.forEach( book => {
//     const authorIdOfBook =  book.author_id
//    const author = authorList.find( author => authorIdOfBook === author.author_id)

//    book.author_id = author.name


// res.send({msg : bookList})

// })

   

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

//MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })


