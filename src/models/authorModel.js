const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    authorName:{
        type:String,
        required:true

    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    ratings:{
        type:Number,
        required:true
    }

}, { timestamps: true });


module.exports = mongoose.model('newAuthor3', authorSchema)



//A newAuthor document should look like this (no author_id anymore)
 	// { 
    //     _id: ObjectId("61951bfa4d9fe0d34da86829"),
	// 	"authorName":"Chetan Bhagat",
	// 	"age":50,
	// 	"address":"New Delhi",
    //     "ratings":2
	// }