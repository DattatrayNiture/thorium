

const mid1 = (req,res,next)=>{
    let yes = true;
    if(yes){
        console.log("I am from middleware you have permission");
        next();
    }else{
        console.log("you dont have permission for for controller")
    }
}

 const logOriginalUrl =(req, res, next) => {
    console.log('Request URL:', req.originalUrl)
   // next()
  }
  
  const logMethod = (req, res, next) =>{
    console.log('Request Type:', req.method)
   // next()
  }
  
//   const logStuff = [logOriginalUrl, logMethod]
//   app.get('/user/:id', logStuff, (req, res, next) => {
//     res.send('User Info')
//   })










module.exports.mid1 = mid1

module.exports.logOriginalUrl = logOriginalUrl;

module.exports.logMethod = logMethod;



// <!-- ASSIGNMENT:- -->
// Write a middleware that logs (console.log) some data everytime any API is hit
// Data to be logged:-the current timestamp(as date time) , the IP of the user and the route being requested).
// For this first figure out how to get the route location being requested, how to get current timestamp and how to get the IP.
// NOTE: ip of local computer will come as ::1 so dont get disturbed by seeing this)

// e.g: you should be logging something like this on each line:
// time , IP, Route should be printed on each line in terminal( every time an api is hit)
// 2010-08-19 14:00:00 , 123.459.898.734 , /createUser
// 2010-08-19 14:00:00 , 123.459.898.734 , /basicAPi
// 2010-08-19 14:00:00 , 123.459.898.734 , /falanaAPI