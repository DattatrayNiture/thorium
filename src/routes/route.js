const express = require('express');
const _ = require('lodash');
const router = express.Router();
const welcomeObj = require('../logger/logger.js')

const helper = require('../util/helper.js')
const formatter = require('../validator/formatter')


router.get('/test-me', function (req, res) {
    
    console.log(welcomeObj.welcome())
    

    console.log("current Date =" + helper.currentDate +"\n");
    console.log("current month = " + helper.currentMonths+"\n");
    console.log(helper.getBatchInfo() +"\n");

    console.log("trim function uses '   Thorium    ' = "+formatter.trim("   Thorium     ")+"\n");
    console.log("converting to lower case DeVeLopMent =" +formatter.lowerCase("DeVeLopMent")+"\n");
    console.log("converting to upperCase heloo iron lady ="+formatter.upperCase("heloo iron lady")+"\n")
    
    
    res.send('My first ever api!')            
});
router.get('/hello', (req, res)=>{
    //Q 4th. question part 1
    const monthsarray = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    const reas = _.chunk(monthsarray,monthsarray.length/4);
    console.log(reas);
    
    // part 2
    const oddarray = [];
    let i = 0;
    let j = 0;
    while(j < 10){
        if(i%2 != 0){
            oddarray.push(i)
            j++
        }
        i++;
    }
    console.log("original array = ", oddarray)
    console.log("after tail function =",_.tail(oddarray));

    // part 3
    const arr1 = [1,2,3,4,5];
    const arr2 = [4,5,6,7];
    const arr3 = [3,4,5,6,7,8];
    const arr4 = [11,3,3,4,4,2,3,45,5];
    const arr5 = [1,2,3,4,5,56,7,7];
    const union = _.union(arr1,arr2,arr3,arr4,arr5);
    console.log("Union =",union);

    // part 4
    const pairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
    const pairsKeyValue = _.fromPairs(pairs);
    console.log("key value pairs = ",pairsKeyValue);

    res.send('This page says Hello');
})



module.exports = router;