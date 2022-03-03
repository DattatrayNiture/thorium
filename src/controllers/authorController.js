const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    try{
        let authorCreated = await AuthorModel.create(author)
        res.status(200).send({data: authorCreated})
    }catch(error){
        console.log(error)
    }       
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}




module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData