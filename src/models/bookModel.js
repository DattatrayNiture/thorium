const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        unique: true,
        required:true
     } ,
     price:{
        indianPrice: String,
        euroePrice:String
     },

     authorName:{
         type:String,
         required:true
     },
     tags: {
         type: String,
         required:true,
         enum: ["Biography","Fact fiction" , "Adventure fiction","Action fiction","Autobiography","Anthology","Alternate history","Art","Fantasy","Science fiction","cookbook","Fiction","Non-fiction"] 
     },
     year :{
         type:Number,
         default:2021
     },
     totalPages:{
         type:Number

     },
     stockAvailable:{
         type:Boolean,
         required:true
     }

}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover




// {
//     "bookName":"BlockChain" ,
//     "price":{
//         "indianPrice":"715 ₹",
//         "euroErice":"15 €"
//     },
//     "authorName":"Developers",
//     "tags":"Fact fiction",
//      "year":2020,
//      "totalPages":2111,
//      "stockAvailable": false
//  }
