const reverseString = function(str) {
    let chars = str.split('');
    let newChar = [];
    if(str === '') 
        return '';
    for(let i = chars.length - 1; i >= 0; i--){
        newChar.push(chars[i]);
    }
    return newChar.join('');
};

// Do not edit below this line
module.exports = reverseString;
