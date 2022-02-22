
module.exports.currentDate = new Date();

const currdate = new Date();
const month = ["January","February","March","April","May","June","July",
                "August","September","October","November","December"];
module.exports.currentMonths = month[currdate.getMonth()];

const day = currdate.getDay();
date1 = new Date("01/31/2022");  
date2 = new Date(); 
const time_difference = date2.getTime() - date1.getTime();
const days_difference = time_difference / (1000 * 60 * 60 * 24);
const weekDifference = Math.floor(days_difference / 7)

module.exports.getBatchInfo = ( ) =>{
        return `Thorium, W${weekDifference}D${day}, the topic for today 
        is Nodejs module system`;


}




// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught 
//today is ….. For example - ‘Thorium, W3D1, the topic for today is 
//Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler

