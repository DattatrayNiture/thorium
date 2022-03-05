const route = require('color-convert/route');
const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController =require('../controllers/publisherController')
const middlewares = require("../middleware/middleware.js")








router.get("/logOriginalUrl-me",function (req, res) {
    res.send({msg:"My first ever logOriginalUrl"})
})

// middlewares.logMethod
router.get("/logMethod-me" ,function (req, res) {
    res.send("My first ever logMethod!")
})




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// author end points
router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)


//publisher end points
router.post("/createPublisher",publisherController.createPublisher)

router.get('/getPublisher',publisherController.getPublisher)



//book end points
router.post("/createBook", bookController.createBook  )

router.get("/getBooksData",bookController.getBooksData)

router.get("/getBooksWithDetails", bookController.getBooksWithDetails)

 router.put("/putrequest", bookController.putrequest)
 router.put("/updatePriceByRatings", bookController.updatePriceByRatings)



module.exports = router;