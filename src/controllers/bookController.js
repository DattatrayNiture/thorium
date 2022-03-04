const { ObjectId } = require("bson")
const { count } = require("console")
const AuthorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel");
//const ObjectId = mongoose.Schema.Types.ObjectId;

const createBook= async function (req, res) {
     const{name,author,price,ratings,publisher} = req.body
    
    //  console.log(author);
    //  console.log(authorid)
     //by using we can check is this valid mongoDb ID
     //const ObjectId = mongoose.Schema.Types.ObjectId
    // !ObjectId.isValid(author)




    // checking author validation
    if(!author || !name || !price || !ratings || !publisher){
        return res.status(422).send({msg:"auther details is required"});
    }




    //this line returns the object that matches with id
    let isAuthorIdValid = await AuthorModel.findById(author)
    // console.log(isAuthorIdValid)


    if(!isAuthorIdValid ){
        return res.status(422).send({msg:"autherId is not present or not matches with existing database"});
           
    }

    
    // if(ObjectId.isValid(author) ){
    //     return res.status(422).send({msg:"autherId is not present or not matches with existing database"});
           
    // }
    

    //checking publisher validation
    if(!publisher){
       return res.status(422).send({msg:"publisher details is required"})
    }
    const isPublisherIdValid = await publisherModel.findById(publisher)

    if(!isPublisherIdValid){
        return res.status(422).send({msg:"PublisherId is not present"});
            
    }
    
    let bookCreated = await bookModel.create(req.body)
    res.status(200).send({data: bookCreated})
}

// {
//     _id: ObjectId("61951bfa4d9fe0d34da86344"),
// name:"Two states",
//     author:"61951bfa4d9fe0d34da86829",
// price:50,
//     ratings:4.5,
//     publisher: "61951bfa4d9fe0d34da84523"
// }

const putrequest = async function (req,res){
    const Id = await publisherModel.find({$or: [{name:"Penguin"},{name:"HarperCollins"}]}).select({_id:1})
    for(let i =0; i<Id.length; i++){
         await bookModel.updateMany({publisher: Id[i]._id}, {isHardCover: true})
    } 
    res.send({msg:"changes is done"})
    
}
const updatePriceByRatings = async function (req, res){
    const author = await AuthorModel.find({ratings: {$gt : 3.5}}).select({_id: 1})
    for (let i = 0; i < author.length; i++){
        await bookModel.updateMany({author: {$eq: author[i]._id}},{$inc: {price: 10}}, {new:true})
    }
    res.send({status: "Done"})
    //res.send(updatePrice)
}




const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author publisher')
    console.log(specificBook)
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithDetails = getBooksWithDetails
module.exports.putrequest= putrequest
module.exports.updatePriceByRatings= updatePriceByRatings





// {
//     "name":"Chetan Stories",
//     "author":"621f68c1b33200bfd8b3c774",
//     "price":44,
//     "ratings":4.5,
//     "publisher":"621f72fdb33200bfd8b3c77c"
// }

// 1. routine , 2. studing & study graph  3.life change. 3. Background
