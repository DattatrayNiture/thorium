const express = require('express');
const router = express.Router();

//const moviesArrObj = express('../movies/movies.js');



const playerInfo =
[ 
    {

  "name": "manish",

  "dob": "1/1/1995",

  "gender": "male",

  "city": "jalandhar",

  "sports": ["swimming"],

  "bookings": 
        [
            {

                "bookingNumber": 1,
                "sportId"  : "cricket1234x1",
                "centerId" : "3333",
                "type": "private",
                "slot": "16286598000000",
                "bookedOn": '31/08/2021',
                "bookedFor": '01/09/2021',
            },
            {
                "bookingNumber": 2,
                "sportId": "swiming1234x1",
                "centerId" : "344334",
                "type": "private",
                "slot": '16286518000000',
                "bookedOn": '31/08/2001',
                "bookedFor": '01/09/2001'
            },
        ]

    },



    {

  "name": "gopal",

  "dob": "1/23/1995",

  "gender": "male",

  "city": "pune",

  "sports": ["swimming","footbal"],

  "bookings": 
        [
            {

                "bookingNumber": 1,
                "sportId"  : "football1234x1",
                "centerId" : "3333",
                "type": "private",
                "slot": "16286598000000",
                "bookedOn": '31/08/2021',
                "bookedFor": '01/09/2021',
            },
            {
                "bookingNumber": 2,
                "sportId": "swimming1234x1",
                "centerId" : "344334",
                "type": "private",
                "slot": '16286518000000',
                "bookedOn": '31/08/2001',
                "bookedFor": '01/09/2001'
            },
        ]

    },


    {

        "name": "Dattatray",
      
        "dob": "1/1/1995",
      
        "gender": "male",
      
        "city": "Earth",
      
        "sports": ["swimming","running"],
      
        "bookings": 
              [
                  {
      
                      "bookingNumber": 1,
                      "sportId"  : "swimmingt1234x1",
                      "centerId" : "0000",
                      "type": "golbal",
                      "slot": "1000000008000000",
                      "bookedOn": '23/02/2022',
                      "bookedFor": '05/05/2022',
                  },
                  {
                      "bookingNumber": 2,
                      "sportId": "running1234x1",
                      "centerId" : "344334",
                      "type": "private",
                      "slot": '16286518000000',
                      "bookedOn": '31/08/2001',
                      "bookedFor": '01/09/2001'
                  },
              ]
      
          },



];








router.post('/players/', function(req, res) {
   // const pl = req.params.playername
   
    const newPlayerInfo = req.body  
    let newName = req.body.name; // newPlayerInfo.name
    let names = playerInfo.map((b) => b.name) // player names of old array
     
   if(names.includes(newName)){ 

       res.send("player with this name is already exist please send another player information")
  
    }
   else{

        playerInfo.push(newPlayerInfo);

        res.send({body:playerInfo,status:true})
   }

   
  
})

 router.post('/players/:playerName/bookings/:bookingId', (req,res) =>{
            const playerName    =   req.params.playerName;
            const newBookingId  =   req.params.bookingId;
            const newBooking    =   req.body

            // console.log(playerName);
            // console.log(newBookingId);
            // console.log(newBooking);




            let nameFlag = false;
            //let bookingIdFlag = flase;
            for(let i = 0; i< playerInfo.length; i++){
                

                if(playerInfo[i].name == playerName){
                    nameFlag = true;

                    for(let j = 0; j < playerInfo[i].bookings.length ; j++ ){

                        let oldBookId =playerInfo[i].bookings.map((bookArray) =>bookArray.bookingNumber.toString())
                         //console.log(oldBookId).
                        //console.log(oldBookId.includes(newBookingId))

                        if(oldBookId.includes(newBookingId) == false  ){
                            //console.log(playerInfo[i].bookings[j].bookingNumber);
                           
                            playerInfo[i].bookings.push(newBooking);
                            res.send({body:playerInfo, status:true});
                            break;
                            //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
                            // solution I uses break;
                            //why this happen I thik not sure
                            //0
                            // there are some functions and process runnig after sending the response 
                            //thats why we see these type of header ERROR!
                            //1
                            // If this header already exists in the to-be-sent headers,
                            //  its value will be replaced. Use an array of strings here to
                            // send multiple headers with the same name. Non-string values
                            // will be stored without modification. Therefore, response.getHeader() 
                            // may return non-string values. However, the non-string values will be 
                            // converted to strings for network transmission.
                            // When headers have been set with response.setHeader(), 
                            // they will be merged with any headers passed to response.writeHead(),
                            //  with the headers passed to response.writeHead() given precedence.

                            //2
                            // The error "Error: Can't set headers after they are sent."
                            //  means that you're already in the Body or Finished state, 
                            //  but some function tried to set a header or statusCode. 
                            //  When you see this error, try to look for anything that tries to
                            //   send a header after some of the body has already been written.
                            //    For example, look for callbacks that are accidentally called 
                            //    twice, or any error that happens after the body is sent.
                        }
                        else{

                            res.send("booking was already processed");
                            break;
                            
                        }
                    }

                }
            }
            if(nameFlag == false){

                res.send("something relevant about player not being found.");
                

            }

            


 })











module.exports = router;







