const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name:{
        type:String,
        required:true,
        unique:true

    } ,
    author: {
        type: ObjectId,
        ref: "newAuthor"
    },
    price:{ 
        type:Number,
        required:true

    },
    ratings:{
        type:Number,
        required:true
    },
    publisher:{
        type:ObjectId,
        ref:'newPublisher'
    }


}, { timestamps: true });


module.exports = mongoose.model('newBook2', bookSchema)






// _id
// :
// 621f72abb33200bfd8b3c77a
// name
// :
// "IndianPublication"
// headQuarter
// :
// "Mumbai"
// createdAt
// :
// 2022-03-02T13:35:39.596+00:00
// updatedAt
// :
// 2022-03-02T13:35:39.596+00:00
// __v
// :
// 0

// {
//     "name":"Two States",
//     "author":"621f6975b33200bfd8b3c776",
//     "price":50,
//     "ratings":4.5,
//     "publisher":"621f72abb33200bfd8b3c77a"
// }



// _id
// :
// 621f6975b33200bfd8b3c776
// authorName
// :
// "PK"
// age
// :
// 35
// address
// :
// "New Delhi"
// createdAt
// :
// 2022-03-02T12:56:21.756+00:00
// updatedAt
// :
// 2022-03-02T12:56:21.756+00:00
// __v
// :
// 0




// {
// 		_id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	name:"Two states",
// 		author:"61951bfa4d9fe0d34da86829",
// 	price:50,
// 		ratings:4.5,
// 		publisher: "61951bfa4d9fe0d34da84523"
// }


// TOPIC: Mongoose Populate and Reference

// For this assignment the session branch is session/populate-reference
// For the solution you have to create a new branch in your own repo- assignment/populate-reference
// Because you are sharing databases and thus the collections too, please make sure you write the schema correctly. User these collection names - newBook, newAuthor, newPublisher.

// A newAuthor document should look like this (no author_id anymore)
//  	{ 
// _id: ObjectId("61951bfa4d9fe0d34da86829"),
// 		authorName:"Chetan Bhagat",
// 		age:50,
// 		address:"New Delhi"
// 	}
// A newPublisher document looks like this.
// {
// 		_id: ObjectId("61951bfa4d9fe0d34da86344"),
// name: “Penguin”,
// headQuarter: “New Delhi”,
// }
// A newBook document should look like this. The author property is a reference to newAuthor collection. 
// {
// 		_id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	name:"Two states",
// 		author:"61951bfa4d9fe0d34da86829",
// 	price:50,
// 		ratings:4.5,
// 		publisher: "61951bfa4d9fe0d34da84523"
// }
// {
//     "name":"Two States",
//     "author":"61951bfa4d9fe0d34da86829",
//     "price":50,
//     "ratings":4.5,
//     "publisher":"61951bfa4d9fe0d34da84523"
// }


// 1. Write a POST api that creates an author from the details in request body
// 2. Write a POST api that creates a publisher from the details in the request body
// 3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 
// In this api, you have to write a logic that validates the following :
// The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
// The publisherId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.
// 4. Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 
