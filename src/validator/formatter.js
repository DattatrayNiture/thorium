

// Module 3: src/validator/formatter.js
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

module.exports.trim = (str) => {
    return `Trimming = ${str.trim()}`;
}

module.exports.lowerCase = (str) =>{
    return str.toLowerCase()
}


module.exports.upperCase = (str) =>{
    return str.toUpperCase()
}