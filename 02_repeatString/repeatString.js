const repeatString = function(str, num) {
    let newString = "";
    if(num < 0){
        return "ERROR";
    }
    if(str === ''){
        return '';
    }
    for(let i = 0; i < num; i++){
        newString += str;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
