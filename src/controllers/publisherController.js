const publisherModel = require('../models/publisherModel')


const createPublisher= async function (req,res){

    try{
        const response= await publisherModel.create(req.body);
        res.status(200).send({msg:response})
    }catch(error){
        console.log(error)

    }
}

const getPublisher = async (req,res)=>{
    try{
        const response = await publisherModel.find()
        res.status(200).send({msg:response})
    }catch(error){
        console.log(error)
    }
}



module.exports.createPublisher = createPublisher
module.exports.getPublisher=getPublisher