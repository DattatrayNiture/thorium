const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body;
    let savedData= await UserModel.bookSchema.create(data);
    res.send({msg: savedData})
}

const getBooksInfo= async function (req, res) {
    let allBooks= await UserModel.bookSchema.find();
    res.send({msg: allBooks})
}





const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.userSchema.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.userSchema.find()
    res.send({msg: allUsers})
}


module.exports.createBook= createBook
module.exports.getBooksInfo= getBooksInfo


module.exports.createUser= createUser
module.exports.getUsersData= getUsersData