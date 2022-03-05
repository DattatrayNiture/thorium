const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Datta-database:D3443t1432@cluster0.gakoa.mongodb.net/FunctionUp?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);



app.use(function (req, res, next){
    console.log('Request URL:', req.originalUrl)
   


    console.log('Request Type:', req.method) // use to check the method
     const date = new Date().toLocaleString()
    console.log(date,req.ip,req.url)
  
    //console.log(req.socket.remoteAddress,req.url )
    //console.log(req.ip)  // ::1 // this is an ipv6 
    //console.log(req)
    //console.log(req.ip,req.connection,req.connection.remoteAddress)
   // console.log(req.headers['x-forwarded-for'].connection.remoteAddress)
   // console.log(req.headers['x-forwarded-for'].split(',')[0])



   //another way
    //const parseIp = (req) => req.headers['x-forwarded-for']?.split(',').shift() // || req.socket?.remoteAddress

   // console.log(parseIp(req))



    // next()


// **************another way ************************/
//      Install:

// npm install request-ip
// In your app:

// var requestIp = require('request-ip');

// // inside middleware handler
// var ipMiddleware = function(req, res, next) {
//     var clientIp = requestIp.getClientIp(req); // on localhost > 127.0.0.1
//     next();
// };

//****************************** */


})




//  I nthink this wiil gives ous our local address because weare requiring os 
// const os       = require('os');
// const interfaces = os.networkInterfaces();

// let addresses = [];

// for (var k in interfaces) {

//     for (var k2 in interfaces[k]) {

//         const address = interfaces[k][k2];

//         if ( (address.family === 'IPv4' || address.family === 'IPv6')  && 
//             !address.internal) {

//             addresses.push(address.address);

//         }
//     }
// }
// console.log(addresses);  // output :=  [ 'fe80::185e:7578:d796:4da1', '192.168.43.243' ]











app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
