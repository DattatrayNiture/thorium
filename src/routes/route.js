const express = require('express');
const router = express.Router();

//const moviesArrObj = express('../movies/movies.js');

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})
// problenm statement 1
router.get('/movies', (req, res) =>{

    res.send('["Iron Man","life-of-pi","Avatar","The Godfather","Inception","Lagaan","Natrang"]');
});

// problem 2 and 3
router.get('/movies/:moviesId', (req, res) => {

    const moviesOfTheWeek = ["Iron Man","life-of-pi","Avatar","The Godfather","Inception","Lagaan","Natrang"];
    const request = req.params.moviesId;
    if(request < moviesOfTheWeek.length){
        res.send(moviesOfTheWeek[request])
    }
    else{
        //problem three
        res.send('" !ERROR: not present please use a valid index"');
    }
})

// problem 4;

router.get('/films', (req,res) => {
 
    
    res.send([
        {    "id" : 1,   "name": "The Shining"       },
        {    "id" : 2,   "name": "Incendies"         },
        {    "id" : 3,   "name": "Rang de Basanti"   },
        {    "id" : 4,    "name": "Finding Demo"      }
     ]);
    
});
router.get('/films/:filmld',(req, res)=>{
    const movieList =
    [
        {    "id" : 1,   "name": "The Shining"       },
        {    "id" : 2,   "name": "Incendies"         },
        {    "id" : 3,   "name": "Rang de Basanti"   },
        {    "id" : 4,    "name": "Finding Demo"     }
    ];
    let request = req.params.filmld;
    let response = false;
    for(let index = 0; index < movieList.length; index++){
        if(movieList[index].id == request){
            response = true;
            res.send(movieList[index]);
            break;
        }
    }
    if(response == false){
        res.send('No movie exists with this id');
    }

})






module.exports = router;
