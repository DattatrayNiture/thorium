let url = 'https://www.google.com';

function logg(message){
    console.log(message)
}

module.exports.url = url; // also we can write same name or different;
module.exports.logg = logg;
// modeule.exports.url is key and we are defining value for this

// just run this command in thorium folder
// git checkout -f session/nodejs-modules
//underscore lybrary 
//  uderscore.function("hi");