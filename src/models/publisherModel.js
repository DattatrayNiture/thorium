const mongoose = require('mongoose')



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

module.exports = mongoose.model('newPublisher', publisherSchema)

// {
//     "name":"IndianPublication",
//     "headQuarter":"Mumbai"
// }
// {
//     "name": "Penguin",
//     "headQuarter": "New Delhi",
//  }


//A newPublisher document looks like this.
// {
// 		_id: ObjectId("61951bfa4d9fe0d34da86344"),
// name: “Penguin”,
// headQuarter: “New Delhi”,
// }
