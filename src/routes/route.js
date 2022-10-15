const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger/logger')
const tdate = require('../util/helper') 
const tr = require('../validator/formatter') 
//importing external package
const underscore = require('underscore');
const { chunk } = require('underscore');
const { tail } = require('underscore');
const { union } = require('underscore');
const { merge } = require('underscore');
const { fromPairs } = require('lodash');

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)
    console.log("1. Welcome Massage", xyz.myWelcome())
    console.log("2.1 Today Date is:", tdate.printdate())
    console.log("2.2 Today Month is:", tdate.printmonth())
    console.log("2.3 Batch Info is:", tdate.batchinfo())
    console.log("3.1 Trim Function:", tr.gettrim())
    console.log("3.2 To Lower Case:", tr.getlower())
    console.log("3.3 To upper Case:", tr.getupper())

    // Ptoblem No. 4.1 lodash Package 
    let epart = function(){
        const allmonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const equal1  = chunk(allmonths, 4);
        return equal1
    }
    console.log("4.1 Using Chunk lodash:", epart());

    // Ptoblem No. 4.2 lodash Package 
    let removef = function(){
        let  oddno = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
        const rmfirst = tail(oddno);
        return rmfirst;
    }
    console.log("4.2 Using tail lodash:", removef());

    // Ptoblem No. 4.3 lodash Package 
    let allmerge = function(){
    let arr1 = [1]
    let arr2 = [2]
    let arr3 = [1]
    let arr4 = [4]
    let arr5 = [3]
    const merge = union(arr1, arr2, arr3, arr4, arr5);
    return merge;
    }
    console.log("4.3 Using union lodash:", allmerge());

     // Ptoblem No. 4.4 lodash Package 
    const fromPairs1 = function(){
        let  kvalue =[ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
     const pairs = fromPairs(kvalue)
     return pairs
    }
console.log("4.4 Using fromPairs lodash:", fromPairs1())
     
 

    //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;