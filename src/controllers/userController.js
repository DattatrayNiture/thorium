const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{

  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.status(200).send({ msg: savedData });

}catch(error){

  return res.status(500).send(error.message)
}
};



const loginUser = async function (req, res) {
  try{
  // let userName = req.body.emailId;
  // let password = req.body.password;
   const { emailId, password } = req.body

  if(!emailId || !password){return res.send({msg:'all credentials must required'})}

  let user = await userModel.findOne({ emailId: emailId, password: password });

  if (!user)return res.send({status: false,msg: "username or the password is not corerct" });

  let token = jwt.sign({ userId: user._id.toString(),batch: "thorium",organisation: "FUnctionUp",}, "functionup-thorium");

  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, data: token });
}catch(error){
  res.status(500).send(error.message)
}

};


const getUserData = async function (req, res) {
  try{
  //let userId = req.params.userId;
  let userDetails = await userModel.findById(req.params.userId);
  
  res.ststus(200).send({ status: true, data: userDetails });

  }catch(error){
    res.status(500).send(error.message)
  }
};



const updateUser = async function (req, res) {
try{
  //let userId = req.params.userId;
  
  //let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: req.params.userId }, req.body,{new:true});
  res.status(200).send({ status: updatedUser, data: updatedUser });

}catch(error){

  res.status(500).send(error.message)
}
};






const deleteUser = async function (req, res){
  try{
    //let userId = req.params.userId;
   
    let user = await userModel.findOne({_id:req.params.userId,isDeleted:"false"});
    
    user.isDeleted = "true";
    let updatedUser = await userModel.findOneAndUpdate({ _id: req.params.userId }, user ,{new:true});
    return res.status(200).send({ status: 'true', data: updatedUser });

  }catch(error){

    res.status(500).send(error.message)
  }
}


const postMessage = async function (req, res) {
  try{
    let message = req.body.message
    
    let user = await userModel.findById(req.params.userId)
   // let updatedPosts = user.posts
    //add the message to user's posts
    //updatedPosts.push(message)
    user.posts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},user, {new: true})

    //return the updated user document
    return res.status(200).send({status: true, data: updatedUser})
  }catch(error){

    req.status(500).send(error.message)
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser
