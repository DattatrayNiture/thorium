const mongoose = require('mongoose')


// while sending new entry in collection when we are 
const publisherSchema = new mongoose.Schema( {
    name:{
        type:String,
        required:true
    },
    headQuarter:{
        type:String,
        required:true
    }

}, { timestamps: true });

module.exports = mongoose.model('newPublisher3', publisherSchema)

// {
//     "name":"IndianPublication",
//     "headQuarter":"Mumbai"
// }
// {
//     "name": "Penguin",
//     "headQuarter": "New Delhi",
//      "ratings":4.5
//  }


//A newPublisher document looks like this.
// {
// 		_id: ObjectId("61951bfa4d9fe0d34da86344"),
// name: “Penguin”,
// headQuarter: “New Delhi”,
// }
