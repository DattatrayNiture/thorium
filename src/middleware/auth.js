const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel')



const jwtauth = async function(req,res,next){

    try{
    //authenticate
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    //If no token is present in the request header return error
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
  
   // console.log(token);
  
    let decodedToken = jwt.verify(token, "functionup-thorium");
    console.log(decodedToken)
    if (!decodedToken || decodedToken == '')
      return res.status(401).send({ status: false, msg: "token is invalid" });
   



    // authorise
      
    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
   // console.log(userToBeModified)
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId
    //console.log(userLoggedIn)
    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.status(401).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

      next()
    }catch(error){
        return res.status(401).send(error.message)
    } 
  
  }
  


  const userExist = async function(req,res,next){ 
    try{
      let userId = req.params.userId;
      if(!userId){return res.status(400).send({msg:"please give userId"})}
    
      let user = await userModel.findOne({_id:userId ,isDeleted:'true'});
      //Return an error if no user with the given id exists in the db
      if (!user) {
        return res.status(404).send("No such user exists");
      }
      
      next()
    }catch(error){
        res.status(500).send(error)
    }
  
  }
  
  
  
  module.exports.userExist = userExist
  module.exports.jwtauth = jwtauth
  




















