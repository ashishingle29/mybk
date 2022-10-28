const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel");

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let authorData= await AuthorModel.create(data)
    res.send({msg: authorData})
}


const chetanbhagatbyid = async function(req, res){
    let databycb = await  AuthorModel.findOne({author_name : "Chetan Bhagat"})
    chetanid = databycb.author_id
    listofcbid = await BookModel.find({ author_id : chetanid})
    res.send({msg : listofcbid})
}

const twostatesdata = async function(req,res){
    const bookDetails = await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100, age:24}}, {new:true})
    
    const autotrId = bookDetails.author_id
    
    const author = await AuthorModel.findOne({author_id: autotrId })
    
    res.send({authorName: author.author_name, price: bookDetails.price})
    
    }



        const getbook50100 = async function (req, res) {
            const book = await BookModel.find({ price: { $gt: 49, $lt: 101 } }).select({ price: 1,name:1, author_id: 1, _id: 0 })
            const a=book.map(x=>x.author_id)
            const author=await AuthorModel.find({author_id:a}).select({author_name:1,author_id:1,_id:0})
            const myData=[]
            console.log(book)
            console.log(author)
            book.forEach(element => {
                author.forEach(element2 => {
                    if(element.author_id==element2.author_id){
                        data={bookName:element.name,authorName:element2.author_name}
                        myData.push(data)
                    }
                });
            });
            res.send(myData)
        }


    module.exports.createBook= createBook
    module.exports.createAuthor= createAuthor
    module.exports.twostatesdata =twostatesdata
  module.exports.chetanbhagatbyid =chetanbhagatbyid
  module.exports.getbook50100 =getbook50100
   // const createAuthor= async function (req, res) {
//     let data= req.body
//     let authorData= await AuthorModel.create(data)
//     res.send({msg: authorData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE





// module.exports.createAuthor= createAuthor
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks


