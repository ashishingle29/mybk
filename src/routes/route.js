const { Console } = require('console');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})


// Assignment No. 1 
router.get('/movies', function(req, res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log("Assignment 1 Done")
    res.send(movies)
})

// Assignment No. 2
router.get('/movie/:indexNumber', function(req, res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
  index = req.params.indexNumber
  console.log("Assignment 2 Done")
  res.send(movies[index])
})

//Assignment No. 3
router.get('/movies/:indexNumber', function(req, res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let index = req.params.indexNumber
    if(index >movies.length || index < 0){
        let invalid =  "please provide a valid Number."
        res.send(invalid) 
    }else {
    console.log("Assignment 3nd ")
    res.send(movies[index])}
})


//Assignment No. 4
router.get('/films', function(req,res){
    let films = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
       console.log("Assignment 4 Done")
       res.send(films)
})

//Assignment No. 5
router.get('/films/:filmid', function(req,res) {
    let films = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
let reqid = req.params.filmid
       for (i=0; i<films.length; i++){
            filmindex = films[i]
            if (filmindex.id == reqid){
                console.log("Assignment 5th is Done ")
                res.send(filmindex)
            }
       }
       res.send("No movie exists with this id")
    //    console.log("Assignment 5th is not Done ")
    //             res.send("No movie exists with this id")
})




module.exports = router;