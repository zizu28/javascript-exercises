const sumAll = function(val1, val2) {
    let result = 0;
    if(val1 < 0 || typeof val2 !== 'number')
        return 'ERROR';
    if(val1 < val2){
        for(i = val1; i <= val2; i++){
            result += i;
        }
    }
    else{
        for(i = val1; i >= val2; i--){
            result += i;
        }
    }
    
    return result;
};

// Do not edit below this line
module.exports = sumAll;
