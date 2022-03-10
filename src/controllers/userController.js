const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.send({ msg: savedData });
};



const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;
  if(!userName || !password){return res.send({msg:'all credentials must required'})}

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );

  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};


const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};



const updateUser = async function (req, res) {

  let userId = req.params.userId;
  
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.send({ status: updatedUser, data: updatedUser });
};






const deleteUser = async function (req, res){

    let userId = req.params.userId;
   
    let user = await userModel.findById({_id:userId,isDeleted:"false"});
    
    user.isDeleted = "true";
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, user ,{new:true});
    return res.status(200).send({ status: 'true', data: updatedUser });

}


const postMessage = async function (req, res) {
    let message = req.body.message
    
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.status(200).send({status: true, data: updatedUser})
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser
