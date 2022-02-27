const mongoose = require('mongoose');








const bookSchema = new mongoose.Schema( {
    bookName: {
       type: String,
       unique: true,
       required:true
    },
    authorName:{
        type:String,
        required:true
    },
    category: {
        type: String,
        required:true,
        enum: ["Biography","Fact fiction" , "Adventure fiction","Action fiction","Autobiography","Anthology","Alternate history","Art","Fantasy","Science fiction","cookbook","Fiction","Non-fiction"] 
    },
    year : Number
}, { timestamps: true });
//timestamps: true this option adds createdAt and updatedAt properties that are time stamped with the date
//any time you update the document it updates the updatedAt property












const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });


module.exports.userSchema = mongoose.model('User', userSchema) //User will converted into user
module.exports.bookSchema = mongoose.model('Book', bookSchema)


// String, Number
// Boolean, Object/json, array